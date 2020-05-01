import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Competitions extends Component {
  render() {
    const {
      name_competition,
      end_date,
      start_date,
      address,
      id,
    } = this.props.competition;

    return (
      <Fragment>
        <div className='col-lg-12 col-sm-12 col-md-12'>
          <div className='card mb-3'>
            <div className='row no-gutters'>
              <div className='col-md-4'>
                <img
                  src='https://images.unsplash.com/photo-1529510078431-fefe4d9d8aab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                  className='card-img'
                  alt='Fifa world cup image'
                />
              </div>
              <div className='col-md-8'>
                <div className='card-body'>
                  <h5 className='card-title'>{name_competition}</h5>
                  <div className='d-flex justify-content-between'>
                    <div>
                      Start Date
                      <br />
                      <span className='small text-muted'>{start_date}</span>
                    </div>
                    <div>
                      End Date
                      <br />
                      <span className='small text-muted'>{end_date}</span>
                    </div>
                  </div>
                  <p className='card-text'>Location:- {address}</p>
                  <div className='d-flex justify-content-between'>
                    <button
                      // to={`/competition/${id}`} 
                      className='btn btn-primary' 
                      value={id}
                      onClick={this.props.getTeams}
                    >
                      Details
                    </button>
                    <button className='btn btn-primary'>Favourite</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
