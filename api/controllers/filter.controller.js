const Filtered_videos = require("../models/filter.model.js");

exports.searchvideos = (req, res) => {
  if (!req.query) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  let keys = "";
  let pages = 1;

  if (req.query.key) {
    keys = req.query.key;
  }
  if (req.query.p) {
    pages = req.query.p;
  }
  Filtered_videos.search(keys, pages, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found ` + err,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving " + err,
        });
      }
    } else {
      console.log(req.data);
      res.send(data);
    }
  });
};
exports.filterrefreshed = (req, res) => {
  Filtered_videos.refreshed((err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found` + err,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving " + err,
        });
      }
    } else {
      res.send(data);
    }
  });
};
exports.filternext = (req, res) => {
  Filtered_videos.next((err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found` + err,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving " + err,
        });
      }
    } else {
      res.send(data);
    }
  });
};
exports.filterprevious = (req, res) => {
  Filtered_videos.previous((err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found` + err,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving " + err,
        });
      }
    } else {
      res.send(data);
    }
  });
};
