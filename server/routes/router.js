const router = require("express").Router();

const IPFSController = require("../controllers/IPFSController");

router.get("/image", async (req, res) => {
  console.log(req.query);
  const hash = req.query.hash;
  const image = await IPFSController.getImage(hash);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).send({ image });
});

module.exports = router;
