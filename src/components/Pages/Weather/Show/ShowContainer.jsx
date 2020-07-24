import React, { Component } from 'react';
import {connect} from 'react-redux'
import Show from './Show'
import {addInList} from '../../../../redux/cities'
import {setFavorit} from '../../../../redux/favorite'

class ShowContainer extends Component {
  render() {
    return <Show 
      answer={this.props.answer}
      setFavorit={this.props.setFavorit}
      addInList={this.props.addInList}
    />
  }
}

const mstp = (state) => {
  return {
    answer: state.weather.answer
  }
}

export default connect(mstp,{setFavorit,addInList})(ShowContainer);