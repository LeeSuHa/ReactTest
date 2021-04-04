import React, { Component } from 'react';
import { Button, Box } from '@material-ui/core';

class Counter extends Component {

  constructor(){
    super();
    this.state ={
      count:5,
    }
  }

  increment(){
    this.setState({
      count : this.state.count +1,
    })
  }

  decrement(){
    this.setState({
      count : this.state.count -1,
    })
  }

  render(){
    return(
      <div>
        <Button onClick={this.increment.bind(this)} variant='contained' color='primary' size='large'> - </Button>        
        
        <Box component='span' m={5}> {this.state.count} </Box>
        
        <Button onClick={this.decrement.bind(this)} variant='contained' color='primary' size='large'> + </Button>
      </div>
    )
  }
}

export default Counter;