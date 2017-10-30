import React from 'react';

export default function MVP(props) {
  console.log(props)
  return (
    <div>
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">Scrape Test</a>
          </div>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                  <li>
                      <a href="#">Coming Soon</a>
                  </li>
              </ul>
          </div>
        </div>
      </nav>
      <div class="container">
          <header class="jumbotron hero-spacer">
              <h1>Scraping Example</h1>
          </header>
          <br />
          <div class="col-xs-12">
              <div class="panel panel-default">
                  <div class="panel-body">
                    <div class="row">
                        <div class="col-xs-6">
                            <img src="RivCon-logo_2017-300x300.png" class="img-responsive" />
                        </div>
                        <div class="col-xs-6">
                            <div class="list-group-item">
                              {
                                map...........
                              }



                            {% for info in jobInfo %}
                                {% if loop.first %}
                            <ul>
                                <li><strong>Name: </strong><em>{{ info.name }}</em></li>
                                <li><strong>Job title: </strong><em>{{ info.jobTitle }}</em></li>
                                <li><strong>Location: </strong> {{ info.location }}</li>
                                <li><strong>Company Name: </strong> {{ info.companyName }}</li>
                                <li><strong>Job Description:</strong> {{ info.summary }}</li>
                                <li><strong>Link:</strong> <a href="{{info.url}}">View More</a></li>
                            </ul>
                                {% endif %}
                            {% endfor %}



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
