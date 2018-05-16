import React, { Component } from 'react'
import {connect} from 'react-redux';
import {INCREMENT} from './../actions/increment'

class Counter extends Component {

  render() {

    return (
      <div>
          <h1>Add {this.props.inc_counter}</h1>
          <button onClick={ this.props.increment }>Add</button>
          <h1>Sub {this.props.dec_counter}</h1>
          <button onClick={ this.props.decrement }>Sub</button>
      </div>
    )

  }

}//@end

const mapStateToProps = state => { 
    return{
        inc_counter: state.incrementReducer.get('counter'),
        dec_counter: state.decrementReducer.get('counter')
    }
}
 

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({type: 'INCREMENT'}),
        decrement: () => dispatch({type: 'DECREMENT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);


