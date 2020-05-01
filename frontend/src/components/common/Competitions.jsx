import React, { Component, Fragment } from "react";

export default class Competitions extends Component {
  render() {
    return (
      <Fragment>
        {/* <div className='container'>
          <h2 className>Competitions</h2>
          <div className='row'> */}
            <div className='col-lg-6 col-sm-12 col-md-12'>
              <div className='card mb-3'>
                <div className='row no-gutters'>
                  <div className='col-md-4'>
                    <img
                      src='https://images.unsplash.com/photo-1529510078431-fefe4d9d8aab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                      className='card-img'
                      alt='...'
                    />
                  </div>
                  <div className='col-md-8'>
                    <div className='card-body'>
                      <h5 className='card-title'>Competitions</h5>
                      <div className='d-flex justify-content-between'>
                        <div>
                          Start Date
                          <br />
                          <span className='small text-muted'>Start Date</span>
                        </div>
                        <div>
                          End Date
                          <br />
                          <span className='small text-muted'>End Date</span>
                        </div>
                      </div>
                      <p className='card-text'>Location</p>
                      <div className='d-flex justify-content-between'>
                        <button className='btn btn-primary'>Details</button>
                        <button className='btn btn-primary'>Favorite</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='col-lg-6 col-sm-12 col-md-12'>
              <h4>Teams</h4>

              <div className='row bg-white align-items-center ml-0 mr-0 py-4'>
                <div className='col mb-4 grow shadow p-3 mb-5 bg-white rounded'>
                  <div className='text-center text-lg-left'>
                    <div className='align-items-center justify-content-between'>
                      <div>
                        <div className='d-flex justify-content-between'>
                          <div className='d-flex'>
                            <img
                              style={{
                                width: "70px",
                                height: "70px",
                                borderRadius: "50%",
                              }}
                              src='https://images.unsplash.com/photo-1486286701208-1d58e9338013?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                              alt='Image'
                              className='img-fluid'
                            />
                            <div className='ml-3'>
                              <h3 className='h5'>Patriots</h3>
                              <span className='text-uppercase small text-muted'>
                                Brazil
                              </span>
                            </div>
                          </div>
                          <button className='btn btn-outline-success'>
                            Team Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div> */}
          {/* </div>
        </div> */}
      </Fragment>
    );
  }
}
