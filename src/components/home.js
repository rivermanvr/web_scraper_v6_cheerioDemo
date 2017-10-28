
import React from 'react';

export default function Main() {
  return (
    <div className="marginT container-fluid">
      <div className="row">
        <div className="col-sm-6">
        <h3>Premise:</h3>
          <ul className="tabRight">
            <li className="fontS23H20">Learn something new - interesting? - relevant?</li>
            <li className="fontS23H20">determine a use case for it.</li>
            <li className="fontS23H20">package it - minimum viable application</li>
            <li className="fontS23H20">visualize the product evolution</li>
          </ul>
        </div>
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
    </div>
  )
}
