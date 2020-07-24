import React, { Component } from 'react';
import City from './City';
import { connect } from 'react-redux'
import { 
  setStartDraggingPos,
  moveCity
 } from '../../../../../redux/cities'
 import {
   query
 } from '../../../../../redux/weather'
 

class CityContainer extends Component {
  render() {
    return <City 
      startPosition = {this.props.startPosition}
      setStartDraggingPos = {this.props.setStartDraggingPos}
      name = {this.props.name}
      removeFromList = {this.props.removeFromList}
      position = {this.props.position}
      moveCity = {this.props.moveCity}
      query = {this.props.query}
    />
  }
}

let mstp = (state) => {
  return {
    startPosition: state.cities.startPosition,
  }
}

export default connect(mstp,{setStartDraggingPos,moveCity,query})(CityContainer);