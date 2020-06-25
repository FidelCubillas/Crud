const { Pool } = require("pg");

//Database connection
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "123456",
  database: "azurian",
  port: "5432",
});

//List users ==============================================================//
const getUsers = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM users");
    res.status(200).json(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server Error");
  }
};

//Search users ==============================================================//
const getUsersById = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await pool.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);

    res.json(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server Error");
  }
};

//Create new user ==============================================================//
const createUser = async (req, res) => {
  const { name, age, userName } = req.body;

  try {
    const response = await pool.query(
      "INSERT INTO users (name, age, userName) VALUES ($1, $2, $3)",
      [name, age, userName]
    );

    console.log(response);

    res.status(201).json({
      message: "User Added Succesfully",
      body: {
        user: { name, age, userName },
      },
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server Error");
  }
};

//Update user ==============================================================//
const updateUser = async (req, res) => {
  const id = req.params.id;
  const { name, age, userName } = req.body;
  try {
    const response = await pool.query(
      "UPDATE users SET name = $1, age = $2, userName = $3 WHERE id = $4",
      [name, age, userName, id]
    );
    console.log(response);
    res.json("User Updated Successfully");
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server Error");
  }
};

//Delete user ==============================================================//
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await pool.query("DELETE FROM users WHERE id = $1", [id]);
    console.log(response);
    res.json(`User ${id} deleted successfully`);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server Error");
  }
};

module.exports = {
  getUsers,
  getUsersById,
  createUser,
  deleteUser,
  updateUser,
};
