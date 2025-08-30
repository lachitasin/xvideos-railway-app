const Best_videos = require("../models/best.model.js");

exports.bestvideos = (req, res) => {
  let currentTime = new Date();
  let years = currentTime.getFullYear();
  let months = currentTime.getMonth() + 1;
  let pages = 1;
  if (req.query.year) {
    years = req.query.year;
  }
  if (req.query.month) {
    months = req.query.month;
  }
  if (req.query.p) {
    pages = req.query.p;
  }
  console.log("year : " + years + "months : "+ months+ "pages : " + pages);
  Best_videos.search(years, months, pages, (err, data) => {
    
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found.`+err,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving "+err,
        });
      }
    } else {
      res.send(data);
    }
  });
};
exports.bestrefreshed = (req, res) => {
  Best_videos.refreshed((err, data) => {
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
exports.bestnext = (req, res) => {
  Best_videos.next((err, data) => {
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
exports.bestprevious = (req, res) => {
  Best_videos.previous((err, data) => {
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
