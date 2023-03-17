import React, { Component } from 'react'
import Classchild from './Classchild'
import Funcchild from './Funcchild'
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
        <Funcchild  name={"child 1"}/>
        <Classchild name={"child 2"}/>
        "hello parent end"
      </>
    )
  }
}
