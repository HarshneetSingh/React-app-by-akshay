import React, { Component } from 'react'
import Searchchild from './Searchchild'

export default class Search extends Component {
  constructor(props) {
    super(props);
    console.log("search: ");
  }
  componentDidMount() {
    console.log("search componentDidMount: ");
  }
  render() {
    console.log("search render: ");

    return (
      <>

      
        "hello parent start"
        <Searchchild name={"child 1"}/>
        <Searchchild name={"child 2"}/>

        "hello parent end"

      </>
    )
  }
}
