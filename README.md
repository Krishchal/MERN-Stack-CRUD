
# MERN Stack CRUD API

## Overview

The **MERN Stack CRUD API** is a robust backend solution that allows you to manage user data through Create, Read, Update, and Delete (CRUD) operations. It is built using the **MERN stack**—MongoDB, Express.js, React, and Node.js. This project demonstrates how to build a backend API that connects to a **MongoDB** database to store and manipulate user information. It supports basic user management operations such as creating a new user, retrieving user data, updating user details, and deleting users ..

This API provides a foundation for building full-stack applications with **React** on the frontend, interacting with a RESTful API built using **Express** and **Node.js**.

## Key Features

- **Create User**: Add a new user with their first name, last name, email, and password.
- **Get All Users**: Retrieve a list of all users stored in the database.
- **Get User by ID**: Fetch a specific user’s details based on their unique ID.
- **Update User**: Modify user details (such as first name, last name, etc.) by user ID.
- **Delete User**: Remove a user from the database by their unique ID.

## Technologies Used

- **Node.js**: A JavaScript runtime environment for building scalable and efficient server-side applications.
- **Express.js**: A minimalist web framework for Node.js that facilitates building RESTful APIs.
- **MongoDB**: A NoSQL database for storing user data.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js, which simplifies database operations and schema validation.
- **dotenv**: A zero-dependency module for loading environment variables from a `.env` file.

## Installation

### Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **MongoDB**: You can use a local MongoDB instance or a MongoDB Atlas account for cloud-based storage.

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory**:
   ```bash
   cd <project-directory>
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Configure environment variables**:
   - Create a `.env` file in the root directory and add the following configuration:
     ```dotenv
     MONGOURL=<your-mongo-db-connection-url>
     PORT=7000
     ```

   - Replace `<your-mongo-db-connection-url>` with your MongoDB connection string. If using MongoDB Atlas, obtain the connection string from the MongoDB Atlas dashboard.

5. **Start the application**:
   ```bash
   npm start
   ```

   The server will start running on `http://localhost:7000`.

## API Endpoints

### 1. **Create User**
- **Endpoint**: `POST /api/create`
- **Description**: Creates a new user in the database.
- **Request Body**:
  ```json
  {
    "fname": "Krishchal",
    "lname": "Regmi",
    "email": "krish@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "msg": "Successfully Added",
    "savedData": {
      "_id": "12345",
      "fname": "Krishchal",
      "lname": "Regmi",
      "email": "krish@example.com",
      "password": "password123",
      "createdAt": "2024-01-01T00:00:00Z",
      "updatedAt": "2024-01-01T00:00:00Z"
    }
  }
  ```

### 2. **Get All Users**
- **Endpoint**: `GET /api/getAll`
- **Description**: Retrieves all users from the database.
- **Response**:
  ```json
  {
    "userData": [
      {
        "_id": "12345",
        "fname": "Krishchal",
        "lname": "Regmi",
        "email": "krish@example.com",
        "password": "password123",
        "createdAt": "2024-01-01T00:00:00Z",
        "updatedAt": "2024-01-01T00:00:00Z"
      },
      {
        "_id": "67890",
        "fname": "krish",
        "lname": "Reg",
        "email": "krish.reg@example.com",
        "password": "password456",
        "createdAt": "2024-01-02T00:00:00Z",
        "updatedAt": "2024-01-02T00:00:00Z"
      }
    ]
  }
  ```

### 3. **Get User by ID**
- **Endpoint**: `GET /api/getOne/:id`
- **Description**: Retrieves a specific user based on their unique ID.
- **Response**:
  ```json
  {
    "userData": {
      "_id": "12345",
      "fname": "Krishchal",
      "lname": "Regmi",
      "email": "krish@example.com",
      "password": "password123",
      "createdAt": "2024-01-01T00:00:00Z",
      "updatedAt": "2024-01-01T00:00:00Z"
    }
  }
  ```

### 4. **Update User**
- **Endpoint**: `PUT /api/update/:id`
- **Description**: Updates a user's details.
- **Request Body**:
  ```json
  {
    "fname": "Updated Name",
    "lname": "Updated Last Name",
    "email": "updated.email@example.com",
    "password": "updatedpassword"
  }
  ```
- **Response**:
  ```json
  {
    "msg": "User Updated Successfully.",
    "updatedData": {
      "_id": "12345",
      "fname": "Updated Name",
      "lname": "Updated Last Name",
      "email": "updated.email@example.com",
      "password": "updatedpassword",
      "createdAt": "2024-01-01T00:00:00Z",
      "updatedAt": "2024-01-03T00:00:00Z"
    }
  }
  ```

### 5. **Delete User**
- **Endpoint**: `DELETE /api/delete/:id`
- **Description**: Deletes a user by their unique ID.
- **Response**:
  ```json
  {
    "msg": "User deleted Successfully"
  }
  ```

## Contributing

1. Fork the repository
2. Create a new branch for your feature (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a new Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

