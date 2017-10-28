const express = require( 'express' );
const app = express();
const path = require( 'path' );
const bodyParser = require( 'body-parser' );
const morgan = require( 'morgan' );
const routes = require( './routes/api' );

const request = require( 'request-promise' );
const fs = require( 'fs' );
const cheerio = require( 'cheerio' );

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/public', express.static(path.join(__dirname, '/public')));
app.use('/vendor/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api', routes);

// TESTS FOLLOW:

let url = 'http://www.google.com';
const file = fs.createWriteStream('result.html')

// test #1   ...request site and log the result (non-promise call)

// request(url, function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

// test #2   ...request site and log the result (promise call)

// request(url)
//   .then(result => console.log(result))
//   .catch(err => console.log('vin error: ', err));

// test #3A   ...request site and save the result (promise call)

// request(url)
// .then(result => file.write(result))
// .catch(err => console.log('vin error: ', err));

// test #3B   ...request 2 sites (above & thiS) and review the saved result (promise call)

// request(url)
// .then(result => file.write(result))
// .catch(err => console.log('vin error: ', err));

// test #4   ...request site and use cheerio to extract contents (promise call)

// url = 'https://www.indeed.com/viewjob?jk=abe3124266f27566&q=redux+react&l=New+York%2C+NY&tk=1btfije3b1bt42e0&from=web';
// let content;

// request(url)
// .then(result => cheerio.load(result))
// .then($ => {
//   const jobTitle = $('.jobtitle font').text();
//   const location = $('.location').text();
//   const jobSummary = $('#job_summary').text().slice(0, 450);

//   content = { jobTitle, location, jobSummary };
//   console.log('>>>>>>>>>Our Results: ')
//   console.log(content);
// })
// .catch(err => console.log('vin error: ', err));

// test #5  ..scrape an image callback and promise version

  const scraper = require('./scraper');
  url = 'https://imgur.com/gallery/hj4NW';
  const filePath = 'text.txt';

  //callback example:

  // scraper.imgScrape(url, (data) => {
  //   console.log('data from scraper received');
  //   console.log(data);
  // })

  //promise example
  scraper.imgScrape2(url)
    .then(data => {
      console.log('data from scraper received');
      fs.writeFile(filePath, JSON.stringify(data), (error) => {
        if (error) {
          console.log(error)
        }
        console.log('successfully wrote to', filePath);
      })
    })
    .catch(err => console.log('error scraping data: ', err))



/*******************************/

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'public/index.html')));

// ......error middleware not wired to anything.
// ......error status sent back to index.html

app.use((req, res, next) => {
  const error = new Error('page not found');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
});

module.exports = app;
