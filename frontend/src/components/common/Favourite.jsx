import React, { Fragment } from "react";

function Favourite(props) {

  const { fav_comp } = props
  console.log(fav_comp)
  return (
    <div className='col-lg-4 col-sm-8 col-md-6'>
      {/* <div class='card bg-dark'> */}
        <div class='card-body text-center text-white'>
            <img
              class=' img-fluid'
              src='https://images.unsplash.com/photo-1529510078431-fefe4d9d8aab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
              alt='card image'
              style={{width:"80px", height: "80px", borderRadius: "50%"}}
            />
          <h6 class='card-title'>{ fav_comp.name_competition }</h6>
        </div>
      {/* </div> */}
    </div>
  );
}

export default Favourite;
