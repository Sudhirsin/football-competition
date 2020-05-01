import React, { Fragment } from "react";

function Favourite() {
  return (
    <div className='col-lg-4 col-sm-12'>
      <div class='card'>
        <div class='card-body text-center'>
          <p>
            <img
              class=' img-fluid'
              src='https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png'
              alt='card image'
              style={{width:"80px", height: "80px"}}
            />
          </p>
          <h4 class='card-title'>Sunlimetech</h4>
          {/* <p class='card-text'>
            This is basic card wih image on top, title, description and button.
          </p> */}
          <button className="btn btn-outline-danger">Remove Favourite</button>
        </div>
      </div>
    </div>
  );
}

export default Favourite;
