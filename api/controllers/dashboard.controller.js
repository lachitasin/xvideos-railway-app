const Dashboard_videos = require("../models/dashboard.model.js");

exports.dashboardvideos = (req, res) => {
  let pages = 1;

  if (req.query.p) {
    pages = req.query.p;
  }
  Dashboard_videos.dashboard(pages, (err, data) => {
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
exports.dashboardrefreshed = (req, res) => {
  Dashboard_videos.refreshed((err, data) => {
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
exports.dashboardnext = (req, res) => {
  Dashboard_videos.next((err, data) => {
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
exports.dashboardprevious = (req, res) => {
  Dashboard_videos.previous((err, data) => {
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
