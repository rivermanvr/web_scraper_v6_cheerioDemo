const express = require( 'express' );
const router = express.Router();

const request = require('request');
const cheerio = require('cheerio');
const _ = require('lodash');

router.get('/', function(req, res, next) {
  const url = req.query.url;
  request(url, function(err, resp, body) {
    var $ = cheerio.load(body);
    var companyName = $('.company').first();
    var companyNameText = companyName.text();

    var jobTitle = $('.jobtitle font');
    var jobTitleText = jobTitle.text();

    var location = $('.location').first();
    var locationText = location.text();

    var summary = $('#job_summary p');
    if (summary.length === 0) summary = $('#job_summary');
    var summaryText = summary.text();

    var details = {
      jobTitle: jobTitleText,
      location: locationText,
      companyName: companyNameText,
      summary: summaryText,
      url: url
    };

    var detailsArray = _(details).toArray();
    return res.send({ jobInfo: detailsArray });
  });
});

module.exports = router;
