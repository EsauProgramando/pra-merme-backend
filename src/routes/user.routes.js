const { Router } = require("express");
const { registerUser, loginUser } = require("../controllers/user.controllers");
const router = Router();

router.get("/", (req, res) => {
  res.send("Método GET desde router");
});
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;

//http://localhost:8000/api/v1/users/register
