import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom'

export default class Teams extends Component {
  render() {

    const { team } = this.props

    return (
      <Fragment>
        <div className='col-lg-12 col-sm-12 col-md-12'>
          <div className='row bg-white align-items-center ml-0 mr-0 pb-1'>
            <div className='col mb-4 grow shadow py-1 mb-1 bg-white rounded'>
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
                          src={ team.avatar }
                          // src='https://images.unsplash.com/photo-1486286701208-1d58e9338013?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                          alt='Image'
                          className='img-fluid'
                        />
                        <div className='ml-3'>
                          <h3 className='h5'>{ team.team_name }</h3>
                          <span className='text-uppercase small text-muted'>
                            { team.address }
                          </span>
                        </div>
                      </div>
                      <Link 
                        to={`/user/team_details/${team.team_id}`}
                      >
                        <button 
                          onClick={ this.props.getTeamDetails }
                          value={ team.team_id }
                          className='btn btn-outline-success'
                        >
                          Team Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </Fragment>
    );
  }
}
