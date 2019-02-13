import React from 'react'
import {connect} from 'react-redux'

const WaitIndicator = (props) => {
  return props.waiting
    ? <img className='wait-indicator' src='/animated-circle.gif' />
    : null
}

function mapStateToProps (state) {
  return {
    waiting: state.waiting
  }
}

export default connect(mapStateToProps)(WaitIndicator)
