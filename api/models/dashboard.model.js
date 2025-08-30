const xvideos = require("@rodrigogs/xvideos");
// constructor
const Dashboard_videos = function (dashboardvideos) {
  this.videos = dashboardvideos.videos;
  this.totalPages = dashboardvideos.totalPages;
  this.hasNext = dashboardvideos.hasNext;
  this.hasPrevious = dashboardvideos.hasPrevious;
};
let storedList = "";
Dashboard_videos.dashboard = (pages, result) => {
  async function search() {
    const dashboardList = await xvideos.videos
      .dashboard({ page: pages })
      .catch((e) => {
        console.log(e);
        result(e, null);
        return;
      });
    if (dashboardList === undefined) {
      // result("404", null);
      console.log("undefined");
    } else {
    storedList = dashboardList;
    result(null, {
      videos: dashboardList.videos,
      totalPages: dashboardList.pagination.pages,
      hasNext: dashboardList.hasNext(),
      hasPrevious: dashboardList.hasPrevious(),
    });
    }

  }
  search();
};

Dashboard_videos.refreshed = (result) => {
  async function search() {

    const refreshedVideos = await storedList.refresh().catch((e) => {
      console.log(e);
      result(e, null);
      return;
    });
    if (refreshedVideos === undefined) {
      // result("404", null);
      console.log("undefined");
    } else {
    storedList = refreshedVideos;
    result(null, {
      videos: refreshedVideos.videos,
      totalPages: refreshedVideos.pagination.pages,
      hasNext: refreshedVideos.hasNext(),
      hasPrevious: refreshedVideos.hasPrevious(),
    });
    }

  }
  search();
};

Dashboard_videos.next = (result) => {
  async function search() {
    const nextVideos = await storedList.next().catch((e) => {
      console.log(e);
      result(e, null);
      return;
    });
    if (nextVideos === undefined) {
      // result("404", null);
      console.log("undefined");
    } else {
    storedList = nextVideos;
    result(null, {
      videos: nextVideos.videos,
      totalPages: nextVideos.pagination.pages,
      hasNext: nextVideos.hasNext(),
      hasPrevious: nextVideos.hasPrevious(),
    });
    }
  }
  search();
};

Dashboard_videos.previous = (result) => {
  async function search() {
    const previousVideos = await storedList.previous().catch((e) => {
      console.log(e);
      result(e, null);
      return;
    });
    if (previousVideos === undefined) {
      // result("404", null);
      console.log("undefined");
    } else {
    storedList = previousVideos;
    result(null, {
      videos: previousVideos.videos,
      totalPages: previousVideos.pagination.pages,
      hasNext: previousVideos.hasNext(),
      hasPrevious: previousVideos.hasPrevious(),
    });
    }
  }
  search();
};

module.exports = Dashboard_videos;
