import React from 'react';

export default function Step1() {
  return (
    <div className="marginT container-fluid">
      <div className="row">
        <div className="col-sm-5">
          <h3>Modules evaluated:</h3>
          <ul className="tabRight">
            <li className="fontS23H20">phantomjs & casper (automated testing)</li>
            <li className="fontS23H20">selenium (automated testing)</li>
            <li className="fontS23H20">jsdom</li>
            <li className="fontS23H20">request & cheerio</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-10">
          <h3>Example Use Case:</h3>
          <h5>(These examples all require authentication)</h5>
          <ul className="tabRight">
            <li className="fontS23H20 backWhite padTBSMM well">Automatically retrieve client data for input into our CRM when no API is available. (ex: Supplier Portal)</li>
            <li className="fontS23H20 backWhite padTBSMM well">Pull contact data for a client into our CRM (ex: LinkedIn)</li>
            <li className="fontS23H20 backWhite padTBSMM well">Pull job data earmarked for me down automatically. (ex: StackOverflow Jobs)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
