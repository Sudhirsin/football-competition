import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class TeamDetails extends Component {
  render() {
    const { teamDetails } = this.props;
    if (teamDetails && teamDetails.length > 0) {
      return (
        <div class='container'>
          <h5 class='text-center'>TEAM DETAILS</h5>
          <div class='row d-flex justify-content-center'>
            <div class='col-xs-12 col-sm-6 col-md-4'>
              <div class='card'>
                <div class='card-body text-center'>
                  <p>
                    <img
                      class='img-fluid'
                      src={teamDetails[0].avatar}
                      src='https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png'
                      alt='card image'
                    />
                  </p>
                  <h4 class='card-title'>{teamDetails[0].team_name}</h4>
                  <p class='card-text'>Address:- {teamDetails[0].address}</p>
                  <p class='card-text'>
                    Total Members:- {teamDetails[0].total_members}
                  </p>
                  <p class='card-text'>Mobile No.:- {teamDetails[0].mobile}</p>
                  <a href={teamDetails[0].website}> Website </a>
                  <Link to='/' class='btn btn-primary btn-sm'>
                    Go to home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Data Loading</h1>;
    }
  }
}

const mapStateToProps = (state) => ({
  teamDetails: state.teamsReducer.teamDetails,
});

export default connect(mapStateToProps, null)(TeamDetails);
