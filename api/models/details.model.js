const xvideos = require("@rodrigogs/xvideos");
// constructor
const Details_video = function (detailsvideo) {
  this.title = detailsvideo.title;
  this.duration = detailsvideo.duration;
  this.image = detailsvideo.image;
  this.videoType = detailsvideo.videoType;
  this.videoWidth = detailsvideo.videoWidth;
  this.videoHeigth = detailsvideo.videoHeigth;
  this.views = detailsvideo.views;
  this.low = detailsvideo.low;
  this.high = detailsvideo.high;
  this.HLS = detailsvideo.HLS;
  this.thumb = detailsvideo.thumb;
  this.thumb69 = detailsvideo.thumb69;
  this.thumbSlide = detailsvideo.thumbSlide;
  this.thumbSlideBig = detailsvideo.thumbSlideBig;
};

Details_video.search = (url, result) => {
  async function search() {
    try {
      console.log("url : " + url);
      const details = await xvideos.videos.details({ url: url, });

      if (details === undefined) {
        console.log("undefined");

      } else {
        result(null, details);
        // result(null, {
        //   title: details.title,
        //   duration: details.duration,
        //   image: details.image,
        //   videoType: details.videoType,
        //   videoWidth: details.videoWidth,
        //   videoHeigth: details.videoHeigth,
        //   views: details.views,
        //   low: details.files.low,
        //   // high: details.files.high,
        //   HLS: details.files.HLS,
        //   thumb: details.files.thumb,
        //   thumb69: details.files.thumb69,
        //   thumbSlide: details.files.thumbSlide,
        //   thumbSlideBig: details.files.thumbSlideBig,
        // });

      }
    } catch (e) {
      console.log("error : " + e);
      result(e, null);
      return;
    }

  }
  search();
}



module.exports = Details_video;
