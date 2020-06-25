const { Router } = require("express");
const router = Router();
const {
  getUsers,
  createUser,
  getUsersById,
  deleteUser,
  updateUser,
} = require("../controller/index.controller");

router.get("/users", getUsers);
router.get("/users/:id", getUsersById);
router.post("/users", createUser);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);

module.exports = router;
