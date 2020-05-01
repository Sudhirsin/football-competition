import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Competitions from "./Competitions";
import Footer from "./Footer";
import Teams from "./Teams";
import Favourite from "./Favourite";

const Home = () => {
  return (
    <Fragment>
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
      <section>
        <div className='container'>
          <h2 className='ml-3'>Competitions</h2>
          <div className='row m-0 p-0'>
            <Competitions />
            <Teams />
          </div>
        </div>
      </section>

      {/* test */}
      <div className="container">
          <div className="row">
              <Favourite />
              <Favourite />
              <Favourite />
          </div>
      </div>
      {/* test */}

      {/* Footer */}
      <Footer />
    </Fragment>
  );
};

export default Home;
