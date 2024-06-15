# Authentication System

This project is an authentication system built with Express, Knex, MySQL, and React.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js and npm installed on your machine
- MySQL installed and running
- Create a `.env` file with the necessary environment variables (see `.env.example`)

## Installation

1. **Clone the repository**

    ```sh
    git clone https://github.com/your-repository/authentication-system.git
    cd authentication-system
    ```

2. **Install backend dependencies**

    ```sh
    cd backend
    npm install
    ```

3. **Configure the MySQL database**

    - Create a MySQL database (e.g., `auth_system`)
    - Update the `knexfile.js` with your MySQL database credentials

4. **Run migrations and seed the database**

    ```sh
    npx knex migrate:latest
    npx knex seed:run
    ```

5. **Start the backend server**

    ```sh
    npm start
    ```

6. **Install frontend dependencies**

    ```sh
    cd ../frontend
    npm install
    ```

7. **Start the frontend server**

    ```sh
    npm start
    ```

## Database Migrations

To create a new migration, use:

```sh
npx knex migrate:make migration_name
