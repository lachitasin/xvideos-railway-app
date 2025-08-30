module.exports = (app) => {
  const videos = require("../controllers/filter.controller");
  const dashboard = require("../controllers/dashboard.controller");
  const details = require("../controllers/details.controller");
  const fresh = require("../controllers/fresh.controller");
  const best = require("../controllers/best.controller");
  const verified = require("../controllers/verified.controller");
  const info = require("../controllers/info.controller");
  const download = require("../controllers/download.controller");
  const read = require("../controllers/read.controller");

  app.get("/details", details.detailsvideo);

  app.get("/videos", videos.searchvideos);
  app.get("/videos/refreshed", videos.filterrefreshed);
  // app.get("/videos/next", videos.filternext);
  // app.get("/videos/previous", videos.filterprevious);

  app.get("/dashboard", dashboard.dashboardvideos);
  app.get("/dashboard/refreshed", dashboard.dashboardrefreshed);
  // app.get("/dashboard/next", dashboard.dashboardnext);
  // app.get("/dashboard/previous", dashboard.dashboardprevious);

  app.get("/fresh", fresh.freshvideos);
  app.get("/fresh/refreshed", fresh.freshrefreshed);
  // app.get("/fresh/next", fresh.freshnext);
  // app.get("/fresh/previous", fresh.freshprevious);

  app.get("/best", best.bestvideos);
  app.get("/best/refreshed", best.bestrefreshed);
  // app.get("/best/next", best.bestnext);
  // app.get("/best/previous", best.bestprevious);

  app.get("/verified", verified.verifiedvideos);
  app.get("/verified/refreshed", verified.verifiedrefreshed);
  // app.get("/verified/next", verified.verifiednext);
  // app.get("/verified/previous", verified.verifiedprevious);

  app.get("/info", info.infodetails);

  app.get("/read", read.readdetails);

  app.get("/download", download.downloadvideos);
};
