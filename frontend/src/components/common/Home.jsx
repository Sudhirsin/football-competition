import React, { Fragment } from "react";
import { Link } from 'react-router-dom'
import Competitions from "./Competitions";
import Footer from "./Footer";

const Home = () => {
  return (
      <Fragment>
        <section className='landing'>
            <div className='dark-overlay'>
                <div className='landing-inner'>
                <h1 className='x-large'>Forever Play, Its Football Play</h1>
                <p className='lead'>
                “Little by little, I’m getting better all the time.
                    <br />
                I’ve not lost the passion to play.”
                    <br />
                    – Lionel Messi
                </p>
                </div>
            </div>
        </section>
        <section>
            <Competitions />
        </section>

        {/* Footer */}
        <Footer />
      </Fragment>
  );
};

export default Home;