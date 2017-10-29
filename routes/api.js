const express = require( 'express' );
const router = express.Router();

const request = require('request');
const cheerio = require('cheerio');
const _ = require('lodash');

router.get('/', function(req, res, next) {
  var url = "http://www.indeed.com/cmp/Fuze-Lab/jobs/Entry-Junior-PHP-Jquery-MySQL-Coder-Team-Member-01790db21236725e";

  request(url, function(err, resp, body) {
    var $ = cheerio.load(body);
    var companyName = $('.company');
    var companyNameText = companyName.text();

    var jobTitle = $('.jobtitle font');
    var jobTitleText = jobTitle.text();

    var location = $('.location');
    var locationText = location.text();

    var summary = $('#job_summary p');
    var summaryText = summary.text();

    var details = {
      jobTitle: jobTitleText,
      location: locationText,
      companyName: companyNameText,
      summary: summaryText,
      url: url
    };

    var detailsArray = _(details).toArray();

    console.log(detailsArray);
    return res.send({ jobInfo: detailsArray });
  });
});

module.exports = router;
