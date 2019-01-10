import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.actions.addBand}/>
        <Band band={this.props.name} deleteBand={this.props.actions.deleteBand}/>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  actions: {  
    addBand: name => dispatch({ type: "ADD_BAND", name }),
    deleteBand: id => dispatch({ type: 'DELETE_BAND', id})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
