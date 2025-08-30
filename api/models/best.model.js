const xvideos = require("@rodrigogs/xvideos");
// constructor
const Best_videos = function (bestvideos) {
  this.videos = bestvideos.videos;
  this.totalPages = bestvideos.totalPages;
  this.hasNext = bestvideos.hasNext;
  this.hasPrevious = bestvideos.hasPrevious;
};
let storedList = "";
Best_videos.search = (years, months, pages, result) => {
  async function search() {
    const bestList = await xvideos.videos
      .best({
        year: years,
        month: months,
        page: pages,
      })
      .catch((e) => {
        console.log(e);
        result(e, null);
        return;
      });

    if (bestList === undefined) {
      result("404", {
        videos: "",
        totalPages: "0",
        hasNext: "false",
        hasPrevious: "false",
      });
      console.log("undefined ");
    } else {
      storedList = bestList;
      result(null, {
        videos: bestList.videos,
        totalPages: bestList.pagination.pages,
        hasNext: bestList.hasNext(),
        hasPrevious: bestList.hasPrevious(),
      });
    }
  }
  search();
};
Best_videos.refreshed = (result) => {
  async function search() {
    const refreshedVideos = await storedList.refresh().catch((e) => {
      console.log(e);
      result(e, null);
      return;
    });
    if (bestList === undefined) {
      result("404", {
        videos: "",
        totalPages: "0",
        hasNext: "false",
        hasPrevious: "false",
      });
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

Best_videos.next = (result) => {
  async function search() {
    const nextVideos = await storedList.next().catch((e) => {
      console.log(e);
      result(e, null);
      return;
    });
    if (bestList === undefined) {
      result("404", {
        videos: "",
        totalPages: "0",
        hasNext: "false",
        hasPrevious: "false",
      });
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

Best_videos.previous = (result) => {
  async function search() {
    const previousVideos = await storedList.previous().catch((e) => {
      console.log(e);
      result(e, null);
      return;
    });
    if (bestList === undefined) {
      result("404", {
        videos: "",
        totalPages: "0",
        hasNext: "false",
        hasPrevious: "false",
      });
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
module.exports = Best_videos;
