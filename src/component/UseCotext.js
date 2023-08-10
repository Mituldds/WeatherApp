import React from "react";
import MyContex from "./MyContext";

const MyContext = React.createContext();

const UseCotext = () => {
  const dataValue = {
    id: "1",
    name: "joy",
    job: "It",
  };

  return;

  <>
    <MyContex.Provider value={dataValue}>
      <ParentComp />
    </MyContex.Provider>
  </>;
};

const ParentComp = () => {
  return (
    <>
      <h2>i am parent component.</h2>;
      <childA />
    </>
  );
};

const childA = () => {
  return (
    <>
      <h2>i am childA component.</h2>;
    </>
  )
}

const childB = () => {
    return (
      <>
        <h2>i am childB component.</h2>;
      </>
    )
  }

  const childC = () => {
    return (
      <>
        <h2>i am childC component.</h2>;
      </>
    )
  }

  const childD = () => {
    return (
      <>
        <h2>i am childD component.</h2>;
      </>
    )
  }


export default UseCotext;
