const Details_video = require("../models/details.model.js");

exports.detailsvideo = (req, res) => {
  if (!req.query) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  const query = req.query;
  let url = query.url;

  Details_video.search(url, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found.` + err,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving : " + err,
        });
      }
    } else {
      res.send(data);
    }
  });
};
