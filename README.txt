# Authentication System

This project is an authentication system built with Express, Knex, MySQL, and React.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js and npm installed on your machine
- MySQL installed and running (XAMPP)

## Installation

1. **Clone the repository**

    ```sh
    git clone https://github.com/nopalraihan/BE-hyperial.git
    cd hyperiall-be
    ```

2. **Install backend dependencies**

    ```sh
    npm install
    ```

3. **Configure the MySQL database**

    - Create a MySQL database (e.g., `db_hyperails`)
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

## Database Migrations

To create a new migration, use:

```sh
npx knex migrate:make migration_name
```
