const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const knex = require('knex')(require('./knexfile').development);

const app = express();
const port = 3200;

app.use(cors());
app.use(bodyParser.json());

const secretKey = 'aa123sdf!@#';

app.post('/login', async (req, res) => {
    const { username, password, role } = req.body;
    try {
        const user = await knex('users').where({ username }).first();
        if (user && await bcrypt.compare(password, user.password)) {
            if (role === 'admin' && user.role !== 'admin') {
                return res.status(403).json({ message: 'You are not admin' });
            }
            const token = jwt.sign({ id: user.id, role: user.role }, secretKey, { expiresIn: '1h' });
            res.json({ token, role: user.role });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Database error', error });
    }
});

const authMiddleware = (requiredRole) => {
    return (req, res, next) => {
        const token = req.headers['authorization'];
        if (!token) {
            return res.status(403).json({ message: 'No token provided' });
        }

        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return res.status(500).json({ message: 'Failed to authenticate token' });
            }

            if (decoded.role !== requiredRole) {
                return res.status(403).json({ message: 'Access denied' });
            }

            req.userId = decoded.id;
            req.userRole = decoded.role;
            next();
        });
    };
};

// Protected routes
app.get('/user', authMiddleware('user'), (req, res) => {
    res.json({ message: 'Welcome User' });
});

app.get('/admin', authMiddleware('admin'), (req, res) => {
    res.json({ message: 'Welcome Admin' });
});

app.get('/superadmin', authMiddleware('superadmin'), (req, res) => {
    res.json({ message: 'Welcome Super Admin' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
