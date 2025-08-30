const Download_videos = require("../models/download.model.js");

exports.downloadvideos = (req, res) => {
    let url = "";
    let type = "lq"
    let name = "/www/wwwroot/xvideosdwn.com/videos/video.mp4"
    if (req.query.url) {
        url = req.query.url;
    }
    if (req.query.type) {
        type = req.query.type;
    }
    if (req.query.name) {
        name = "/www/wwwroot/xvideosdwn.com/videos/" + req.query.name + ".mp4";
    }
    Download_videos.getVideo(url, type, name, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found.`,
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
