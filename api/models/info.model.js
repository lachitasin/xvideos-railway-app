const xvideos = require("@rodrigogs/xvideos");
const { XVDL } = require("xvdl");
const fs = require("fs");
// constructor
const Info_details = function (filteredvideos) {
    this.info = filteredvideos.info;

};
let storedList = "";

Info_details.getDetails = (url, result) => {
    // console.log("url details : " + url)

    XVDL.getInfo(url)
        .then(info => {
            // console.log(info)
            result(null, info)
        })
        .catch(e => {
            result(e, null)
            console.log("error : " + e)
        });

};
module.exports = Info_details;
