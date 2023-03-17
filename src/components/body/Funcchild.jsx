
import React, { useEffect, useLayoutEffect } from 'react'

const Funcchild = ((props) => {
  console.log("child func start " + props.name);

  useEffect(() => {
    const timer = setInterval(function () {
      console.log("func setinterval");
    }, 1000)
    console.log("child useEffect: " + props.name + " start");
    return () => {
      clearInterval(timer)
      console.log("bye func")
    }
  }, [])
  return (
    <>
      {console.log("child func render " + props.name)}

      <div> ""</div>
      <div>hello {props.name} start</div>
      <div>Searchchild+{props.name}</div>
      <div>  hello {props.name} end</div>
      <div> ""</div>
    </>
  )
}
)



export default Funcchild;