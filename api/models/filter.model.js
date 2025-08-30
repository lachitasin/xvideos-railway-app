const xvideos = require("@rodrigogs/xvideos");
// constructor
const Filtered_videos = function (filteredvideos) {
  this.videos = filteredvideos.videos;
  this.totalPages = filteredvideos.totalPages;
  this.hasNext = filteredvideos.hasNext;
  this.hasPrevious = filteredvideos.hasPrevious;
};
let storedList = "";
Filtered_videos.search = (keys, pages, result) => {
  storedList = "";
  async function search() {
    const filterList = await xvideos.videos.search({ k: keys, page: pages })
      .catch((e) => {
        console.log(e);
        result(e, null);
        return;
      });
    if (filterList === undefined) {
      result("404", null);
      console.log("undefined");
    } else {
    storedList = filterList;
    result(null, {
      videos: filterList.videos,
      totalPages: filterList.pagination.pages,
      hasNext: filterList.hasNext(),
      hasPrevious: filterList.hasPrevious(),
    });
    }

  }
  search();
};
Filtered_videos.refreshed = (result) => {
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

Filtered_videos.next = (result) => {
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

Filtered_videos.previous = (result) => {
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
module.exports = Filtered_videos;
