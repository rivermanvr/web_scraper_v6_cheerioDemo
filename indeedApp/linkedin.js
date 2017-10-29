var express = require('express');
var path = require('path');
var swig = require('swig');
const request = require( 'request' );
var cheerio = require('cheerio');
var _ = require('lodash');
var bodyParser = require('body-parser');
var port = 8080;

var app = express();

app.engine('html', swig.renderFile);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  var url = "https://stackoverflow.com/jobs/150896/data-engineer-bauer-xcel-media";

  request(url, function(err, resp, body) {
    console.log(body);
  })

  // request(url)
  //   .then (result => cheerio.load(result))
  //   .then($ => {
  //     var contactName = $('#profile-wrapper .pv-top-card-section__name').text();
  //     console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', contactName)
  //   })  
  

    // var companyName = $('.company');
    // var companyNameText = companyName.text();

    // var jobTitle = $('.jobtitle font');
    // var jobTitleText = jobTitle.text();

    // var location = $('.location');
    // var locationText = location.text();

    // var summary = $('#job_summary p');
    // var summaryText = summary.text();

    // var details = {
    //   jobTitle: jobTitleText,
    //   location: locationText,
    //   companyName: companyNameText,
    //   summary: summaryText,
    //   url: url
    // };

  //   var details = {
  //     name: contactName, 
  //     jobTitle: 'nothing yet',
  //     location: 'somewhere',
  //     companyName: 'company name',
  //     summary: 'summaryText',
  //     url: url
  //   };

  //   var detailsArray = _(details).toArray();

  //   console.log(detailsArray);
  //   return res.render('index', {
  //     jobInfo: detailsArray
  //   });
  // });
});

app.listen(port, function() {
  console.log('running server on port ' + port);
});