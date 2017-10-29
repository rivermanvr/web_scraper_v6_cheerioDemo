import React from 'react';

export default function Step1() {
  return (
    <div className="marginT container-fluid">
      <div className="row">
        <div className="col-sm-10">
        <h3>What is it?:</h3>
          <ul className="tabRight">
            <li className="fontS23H20 marginB">Web scraping (web harvesting, web data extraction &/or data scraping) is used for extracting data from websites. It is a form of copying, in which specific data is gathered and copied from the web, typically into a central local database or spreadsheet, for later retrieval or analysis. [1]</li>
            <li className="fontS23H20 marginB">Generally, this is done with software that simulates human Web surfing to collect specified bits of information from different websites. [2]</li>
          </ul>
        </div>
      </div>
      <div className="row">
      <div className="col-sm-12">
        Footnotes:
        <ul className="tabRight">
          <li>[1] Wikipedia - https://en.wikipedia.org/wiki/Web_scraping</li>
          <li>[2] Techopedia - https://www.techopedia.com/definition/5212/web-scraping</li>
        </ul>
      </div>
      <div className="col-sm-10">
        <h3>Example Use Case:</h3>
        <h5>(These examples all require authentication)</h5>
        <ul className="tabRight">
          <li className="fontS23H20 marginB">Automatically retrieve client data for input into our CRM when no API is available. (ex: Supplier Portal)</li>
          <li className="fontS23H20 marginB">Pull contact data for a client into our CRM (ex: LinkedIn)</li>
          <li className="fontS23H20 marginB">Pull job data earmarked for me down automatically. (ex: StackOverflow Jobs)</li>
        </ul>
      </div>
    </div>
    </div>
  )
}
