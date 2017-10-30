import React from 'react';

export default function MVP(props) {
  const state = props.state;
  if (!state.results) return <div><h5>Enter a url to scrape (above)</h5></div>;
  return (
    <div>
      <div className="container">
          <br />
          <div className="col-xs-12">
              <div className="panel panel-default">
                  <div className="panel-body">
                    <div className="row">
                        <div className="col-xs-8">
                            <div className="list-group-item">
                              <ul>
                                  <li><strong>Job title: </strong><em>{ state.results.jobInfo[0] }</em></li>
                                  <li><strong>Location: </strong> { state.results.jobInfo[1] }</li>
                                  <li><strong>Company Name: </strong> { state.results.jobInfo[2] }</li>
                                  <li><strong>Job Description:</strong> { state.results.jobInfo[3] }</li>
                                  <li><strong>Link:</strong> <a href={ state.results.jobInfo[4] } target="blank">View More</a></li>
                              </ul>
                            </div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}
