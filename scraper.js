const request = require( 'request-promise' );
const cheerio = require( 'cheerio' );

//callback example:

exports.imgScrape = (url, cb) => {
  request(url, (error, resp, body) => {
    if (error) {
      cb({
        error: error
      })
    }
    let $ = cheerio.load(body);
    let $url = url;
    let $img = $('.post-image img').attr('src');
    let $title = $('.post-title').text();
    let $desc = $('[itemprop=description]').text();

    let image = {
      url: $url,
      img: 'http:' + $img,
      title: $title,
      description: $desc
    }

    //respond with the final JSON
    console.log('scraped from scraper.js', image);
    cb(image);
  })
}

//promise example

exports.imgScrape2 = (url => {
  return new Promise((resolve, reject) => {
    request(url, (error, resp, body) => {
      if (error) {
        //not needed with a promise
        // cb({
        //   error: error
        // })
        reject(error);
      }
      let $ = cheerio.load(body);
      let $url = url;
      let $img = $('.post-image img').attr('src');
      let $title = $('.post-title').text();
      let $desc = $('[itemprop=description]').text();
  
      let image = {
        url: $url,
        img: 'http:' + $img,
        title: $title,
        description: $desc
      }
  
      //respond with the final JSON
      console.log('scraped from scraper.js', image);
      //change the following to resolve
      // cb(image);
      resolve(image);
    })
  })
})
