import React, { Component, Fragment } from "react";
import Competitions from "./Competitions";
import Footer from "./Footer";
import Teams from "./Teams";
import Favourite from "./Favourite";
import { connect } from 'react-redux'
import { getCompetitions, makeFavouriteCompetition } from '../../redux/competitions/action'
import { getTeams } from '../../redux/teams/action'
import queryString from 'query-string'


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
        competitionImg: [
          {
            imgUrl: "/images/fifa.jpg"
          },
          {
            imgUrl: "/images/ufea.jpg"
          },
          {
            imgUrl: "/images/euporean-ufea.jpg"
          },
          {
            imgUrl: "/images/copa.jpg" 
          },
          {
            imgUrl: "/images/confederation.jpg" 
          }
        ]
    }
  }

  componentDidMount = async() => {
    await this.props.getCompetitions()
  }

  getTeams = async (e) => {
    let obj = {
      competition_id: e.target.value
    }

    if(this.props.token) {
      await this.props.getTeams(obj, this.props.token)
    } else {
      alert('Please login first')
      this.props.history.push('/user/login')
    }
  }

  favouriteCompetition = async (e) => {
    alert(e.target.value)
    let obj = {
      competition_id: Number(e.target.value)
    }

    if(this.props.token) {
      await this.props.makeFavouriteCompetition(obj, this.props.token)
    } else {
      alert('Please login first')
      this.props.history.push('/user/login')
    }
  }

  getTeamDetails = () => {
    alert('get details')
  }

  render() {

    const { competitions, teams, fav_competitions } = this.props

    return (
      <Fragment>
          {/* Landing Page */}
        <section className='landing'>
          <div className='dark-overlay'>
            <div className='landing-inner my-4'>
              <h1 className='x-large'>Forever Play, Its Football Play</h1>
              <p className='lead'>
                “Little by little, I’m getting better all the time.
                <br />
                I’ve not lost the passion to play.”
                <br />– Lionel Messi
              </p>
            </div>
          </div>
        </section>
  
        {/* competitions section */}
        <section>
          <div className='container'>
            <h2 className='ml-3'>Competitions</h2>
            <div className='row m-0 p-0'>
              <div className='col-lg-6 col-sm-12 col-md-12'>
                {competitions && competitions.map(competition => {
                  return (
                    <Competitions 
                      competition={ competition }
                      getTeams={ this.getTeams }
                      favouriteCompetition={ this.favouriteCompetition }
                    />
                  )
                })}
              </div>


              <div className="col-lg-6 col-sm-12 col-md-12">
                <h4>Teams</h4>

                { teams && teams.map(team => {
                  return (
                    <Teams 
                      team={ team }
                      getTeamDetails={ this.getTeamDetails }
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </section>
  
        {/* test */}
        <div className="container">
            <div className="row">
                { fav_competitions && fav_competitions.map(fav_comp => {
                  return (
                    <Favourite 
                      fav_comp={ fav_comp }                  
                    />
                  )
                })}
                
            </div>
        </div>
  
        {/* Footer */}
        <Footer />

      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  competitions: state.competitionsReducer.competitions,
  token: state.authReducer.token,
  teams: state.teamsReducer.teams,
  fav_competitions: state.competitionsReducer.fav_competitions
})

const mapDispatchToProps = dispatch => ({
  getCompetitions: () => dispatch(getCompetitions()),
  getTeams: (payload, token) => dispatch(getTeams(payload, token)),
  makeFavouriteCompetition: (payload, token) => dispatch(makeFavouriteCompetition(payload, token)),
  getTeamDetails: (payload, token) => dispatch(getTeamDetails(payload, token)) 
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)
