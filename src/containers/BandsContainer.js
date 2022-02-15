import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import Bands from '../components/Bands'
import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    return(
      <ul>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} deleteBand={this.props.deleteBand} />
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {bands: state.bands}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: band => dispatch({type: "ADD_BAND", name: band}),
    deleteBand: id => dispatch({type: "DELETE_BAND", id: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer); 
