const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.send("<h2>You are not supposed to be here!</h2>");
});

module.exports = router;
