import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return <footer className="footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <span className="text-muted">
                    <a href="https://adam.harpur.io">
                        adam.['harpur'].i(). &nbsp;
                    </a>
                    <a href="https://github.com/harps116/weather-view">
                      <i className="fab fa-github" />
                    </a>
                  </span>
                </div>
                <div className="col-lg-6">
                  <span className="text-muted">
                    Built with <i className="far fa-heart" />
                    &nbsp; and&nbsp;
                    <a href="https://reactjs.org/">
                      <i className="fab fa-react" />
                    </a>.
                  </span>
                </div>
              </div>
            </div>
          </footer>;
    }
}



export default Footer;