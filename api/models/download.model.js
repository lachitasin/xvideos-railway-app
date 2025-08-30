const xvideos = require("@rodrigogs/xvideos");
const { XVDL } = require("xvdl");
const fs = require("fs");
// constructor
const Download_videos = function (filteredvideos) {
    this.videos = filteredvideos.videos;
};
let storedList = "";
Download_videos.getVideo = (url, type, name, result) => {
    console.log("url : " + url);
    console.log("type : " + type);
    console.log("name : " + name);
    let folder_name = "/www/wwwroot/xvideosdwn.com/videos"
    try {
        return fs.mkdirSync(folder_name)
    } catch (err) {
        if (err.code !== 'EEXIST') throw err
    }
    // fs.mkdirSync(name, { recursive: true })
    var r = XVDL.download(url, { type: type }).pipe(fs.createWriteStream(name));
    // r.on('close', function () {
    //     console.log('request finished downloading file');
    //     result(null, {
    //         url: url,
    //         type: type,
    //         name: name
    //     });
    // });
    // r.on('start', function () {
    //     console.log('start request finished downloading file');
    //     result(null, {
    //         url: url,
    //         type: type,
    //         name: name
    //     });
    // });
    // r.on('error', function (err) {
    //     console.log('in error...' + err);
    //     result(err, null);
    // });
    var readStream = fs.createReadStream(name);

    // This will wait until we know the readable stream is actually valid before piping
    readStream.on('open', function () {
        result(null, {
            url: url,
            type: type,
            name: name
        });
        // This just pipes the read stream to the response object (which goes to the client)
        // readStream.pipe(res);
    });

    // This catches any errors that happen while creating the readable stream (usually invalid names)
    readStream.on('error', function (err) {
        // res.end(err);
        result(err, null);
    });

}
module.exports = Download_videos;
