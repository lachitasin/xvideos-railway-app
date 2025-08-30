const xvideos = require("@rodrigogs/xvideos");
const { XVDL } = require("xvdl");
const fs = require("fs");
const { spawn } = require('child_process');
const Util = require("./Util");
const Constants = require("./Constants");

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const got = require('got');

const Read_details = function (filteredvideos) {
    this.info = filteredvideos.info;

};
let storedList = "";

Read_details.getDetails = (url, result) => {
    console.log("read url details : " + url)


    const puppeteer = require('puppeteer');

    (async () => {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto('https://xvideos.com/video54824245/fucking_huge_tits_big_step_sister_-_family_therapy');
        const html = await page.content();
        var stream = fs.createWriteStream("html.txt");
        stream.once('open', function (fd) {
            stream.write(html);
            stream.end();
        });
        await browser.close();
    })();


    var html;

    var options = {
        mode: 'text',
        args: url
    };
    let { PythonShell } = require('python-shell')
    PythonShell.run('web.py', options, function (err, results) {
        if (err) throw err;
        // results is an array consisting of messages collected during execution
        // console.log('results: %j', results);
        html = results.toString();
        var stream = fs.createWriteStream("array.txt");
        stream.once('open', function (fd) {
            stream.write(results.toString());
            stream.end();
        });
        const { document } = Util.getDOM(html).window;
        const vidMetadata = document.querySelector('.video-metadata');

        try {
            var title = document.querySelector("meta[property='og:title']").getAttribute("content");
        } catch (err) {
            console.log("title err : " + err);
        }
        try {
            var length = parseInt(document.querySelector("meta[property='og:duration']").getAttribute("content")) || 0;
        } catch (err) {
            console.log("length err : " + err);
        }
        try {
            var views = document.querySelector('strong[class="mobile-hide"]').textContent;
        } catch (err) {
            console.log("v-views : " + err);
        }
        try {
            var hq = html.split("html5player.setVideoUrlHigh('")[1].split("');")[0];

        } catch (err) {
            console.log("hq err : " + err);
        }
        try {
            var lq = html.split("html5player.setVideoUrlLow('")[1].split("');")[0];
        } catch (err) {
            console.log("lq err : " + err);
        }
        try {
            var hls = html.split("html5player.setVideoHLS('")[1].split("');")[0];
        } catch (err) {
            console.log("hls err : " + err);
        }

        try {
            var thumbnail = document.querySelector('meta[property="og:image"]').getAttribute("content");
        } catch (err) {
            console.log("thumbnail err : " + err);
        }
        try {
            var relatedVideos = Util.parseRelated(html.split("<script>var video_related=")[1].split(";window.wpn_categories")[0]);
        } catch (err) {
            console.log("relatedVideos err  : " + err);
        }
        try {
            var ratings_likes = document.querySelector('span[class="rating-good-nbr"]').textContent;
        } catch (err) {
            console.log("ratings_likes err  : " + err);
        }
        try {
            var ratings_dislikes = document.querySelector('span[class="rating-bad-nbr"]').textContent;
        } catch (err) {
            console.log("ratings_dislikes err  : " + err);
        }

        try {
            var comments = html.split('"pub_comments":')[1].split(",")[0];
        } catch (err) {
            console.log("comments err : " + err);
        }

        try { var channel_name = vidMetadata.querySelector('span[class="name"]').textContent; } catch (err) {
            console.log("channel_name err : " + err);
        }
        try { var channel_url = `${Constants.BASE_URL}${vidMetadata.querySelector("a").href}`; } catch (err) {
            console.log("channel_url err : " + err);
        }
        try {
            var channel_subscribers = vidMetadata.querySelector('span[class="count"]').textContent;
        } catch (err) {
            console.log("channel_subscribers err : " + err);
        }

        const info = {
            url: url,
            title: title,
            length: length,
            views: views,
            streams: {
                hq: hq,
                lq: lq,
                hls: hls
            },
            thumbnail: thumbnail,
            relatedVideos: relatedVideos,
            ratings: {
                likes: ratings_likes,
                dislikes: ratings_dislikes
            },
            comments: comments,
            channel: {
                name: channel_name,
                url: channel_url,
                subscribers: channel_subscribers
            }
        };

        result(null, info)
    });



};
module.exports = Read_details;
