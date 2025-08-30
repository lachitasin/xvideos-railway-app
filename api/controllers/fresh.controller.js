const Fresh_videos = require("../models/fresh.model.js");

exports.freshvideos = (req, res) => {
    let pages = 1;

  if (req.query.p) {
    pages = req.query.p;
  }
  Fresh_videos.search(pages,(err, data) => {
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
exports.freshrefreshed = (req, res) => {
  Fresh_videos.refreshed((err, data) => {
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
exports.freshnext = (req, res) => {
  Fresh_videos.next((err, data) => {
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
exports.freshprevious = (req, res) => {
  Fresh_videos.previous((err, data) => {
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
