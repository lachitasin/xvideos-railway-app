const xvideos = require("@rodrigogs/xvideos");
// constructor
const Verified_videos = function (filteredvideos) {
  this.videos = filteredvideos.videos;
  this.totalPages = filteredvideos.totalPages;
  this.hasNext = filteredvideos.hasNext;
  this.hasPrevious = filteredvideos.hasPrevious;
};
let storedList = "";
Verified_videos.search = (pages,result) => {
  async function search() {
    const verifiedList = await xvideos.videos
      .verified({ page: pages })
      .catch((e) => {
        console.log(e);
        result(e, null);
        return;
      });
    if (verifiedList === undefined) {
      // result("404", null);
      console.log("undefined");
    } else {
    storedList = verifiedList;
    result(null, {
      videos: verifiedList.videos,
      totalPages: verifiedList.pagination.pages,
      hasNext: verifiedList.hasNext(),
      hasPrevious: verifiedList.hasPrevious(),
    });
    }
  }
  search();
};
Verified_videos.refreshed = (result) => {
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

Verified_videos.next = (result) => {
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

Verified_videos.previous = (result) => {
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
module.exports = Verified_videos;
