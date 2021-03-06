import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class CheckOutReview extends Component {
  render(){
    return(
      <div>
        <div>
          <h1>{`Total $${this.props.currentCartPrice}`}</h1>
          <h1>Shipping Price: Free</h1>
          <NavLink to={'/thank-you-order'}>
            <button>Place Your Order</button>
          </NavLink>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {currentCartPrice: state.currentCartPrice}
}

export default connect(mapStateToProps)(CheckOutReview);

// show the form for the address and come card info
// redirect the page to


//
// <div>
//   <form>
//   </form>
// </div>
