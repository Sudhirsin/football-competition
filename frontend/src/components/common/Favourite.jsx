import React, { Fragment } from "react";

function Favourite(props) {

  const { fav_comp } = props
  console.log(fav_comp)
  return (
    <div className='col-lg-4 col-sm-12'>
      <div class='card' style={{width: "250px", height: "250px", borderRadius: "50%"}}>
        <div class='card-body text-center'>
          <p>
            <img
              class=' img-fluid'
              src='https://images.unsplash.com/photo-1529510078431-fefe4d9d8aab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
              alt='card image'
              style={{width:"80px", height: "80px"}}
            />
          </p>
          <h4 class='card-title'>{ fav_comp.name_competition }</h4>
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
