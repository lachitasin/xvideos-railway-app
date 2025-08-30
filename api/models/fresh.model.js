const xvideos = require("@rodrigogs/xvideos");
// constructor
const Fresh_videos = function (freshvideos) {
  this.videos = freshvideos.videos;
  this.totalPages = freshvideos.totalPages;
  this.hasNext = freshvideos.hasNext;
  this.hasPrevious = freshvideos.hasPrevious;
};
let storedList = "";
Fresh_videos.search = (pages, result) => {
  async function search() {
    const freshList = await xvideos.videos.fresh({ page: pages }).catch((e) => {
      console.log(e);
      result(e, null);
      return;
    });
    if (freshList === undefined) {
      result("404", null);
      console.log("undefined");
    } else {
    storedList = freshList;
    result(null, {
      videos: freshList.videos,
      totalPages: freshList.pagination.pages,
      hasNext: freshList.hasNext(),
      hasPrevious: freshList.hasPrevious(),
    });
    }

  }
  search();
};
Fresh_videos.refreshed = (result) => {
  async function search() {
    const refreshedVideos = await storedList.refresh().catch((e) => {
      console.log(e);
      result(e, null);
      return;
    });
    if (refreshedVideos === undefined) {
      result("404", null);
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

Fresh_videos.next = (result) => {
  async function search() {
    const nextVideos = await storedList.next().catch((e) => {
      console.log(e);
      result(e, null);
      return;
    });
    if (nextVideos === undefined) {
      result("404", null);
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

Fresh_videos.previous = (result) => {
  async function search() {
    const previousVideos = await storedList.previous().catch((e) => {
      console.log(e);
      result(e, null);
      return;
    });
    if (previousVideos === undefined) {
      result("404", null);
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
module.exports = Fresh_videos;
