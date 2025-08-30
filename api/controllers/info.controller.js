const Info_details = require("../models/info.model.js");


exports.infodetails = (req, res) => {
    let url = "";

    if (req.query.url) {
        url = req.query.url;
    }

    Info_details.getDetails(url, (err, data) => {
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
