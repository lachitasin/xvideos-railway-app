const Read_details = require("../models/read.model.js");


exports.readdetails = (req, res) => {
    let url = "";

    if (req.query.url) {
        url = req.query.url;
    }

    Read_details.getDetails(url, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found.` + err,
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving " + err,
                });
            }
        } else {
            res.send(data);
        }
    });
};
