const Verified_videos = require("../models/verified.model.js");

exports.verifiedvideos = (req, res) => {
    let pages = 1;

  if (req.query.p) {
    pages = req.query.p;
  }
  Verified_videos.search(pages,(err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving ",
        });
      }
    } else {
      res.send(data);
    }
  });
};
exports.verifiedrefreshed = (req, res) => {
  Verified_videos.refreshed((err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving ",
        });
      }
    } else {
      res.send(data);
    }
  });
};
exports.verifiednext = (req, res) => {
  Verified_videos.next((err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving ",
        });
      }
    } else {
      res.send(data);
    }
  });
};
exports.verifiedprevious = (req, res) => {
  Verified_videos.previous((err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving ",
        });
      }
    } else {
      res.send(data);
    }
  });
};
