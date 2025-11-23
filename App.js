{
  /* <div>
  <div id="heading1">hi</div>
  <div id="heading2">bye</div>
</div>; */
}

// Question 1: Nested Sections
// Create a parent <div> with id="main". Inside it, add two children:

// First child: <div> with id="header" and text "This is header".

// Second child: <div> with id="footer" and text "This is footer".

// 1 ans

// const heading = React.createElement("div", {id:'main'}, [
//   React.createElement("div", {id:'header'}, "This is header"),
//   React.createElement("div", {id:'footer'}, "This is footer"),
// ]);

//2
// 🔹 Question 2: Three-Level Nesting
// Make a parent <div> with id="outer". Inside it:

// A child <div> with id="middle".

// Inside middle, nest another <div> with id="inner" and text "Deep inside".

// const heading = React.createElement("div", {id:'outer'}, [
//   React.createElement("div", {id:'middle'}, [
//     React.createElement("div", {id:'inner'}, "Deep inside"),

//   ]),
// ]);

//3
// Question 3: Multiple Children with Attributes
// Create a parent <div> with id="container". Inside it:

// A <div> with className="left" and text "Left side".

// A <div> with className="right" and text "Right side".

// Each of those should also contain a nested <div> with text "Nested here".

// const heading = React.createElement("div", { id: "container" }, [
//   React.createElement("div", { className: "left" }, [
//     React.createElement("div", {}, "Left side"),
//     React.createElement("div", {}, "Nested here"),
//   ]),
//   React.createElement("div", { className: "right" }, [
//     React.createElement("div", {}, "Right side"),
//     React.createElement("div", {}, "Nested here"),
//   ]),
// ]);

//4

// Question 4: Dynamic IDs
// Build a parent <div> with three children:

// Each child should have an id like "box1", "box2", "box3".

// Each child should contain another <div> with text "Inside boxX".

// const heading = React.createElement("div", {id:'main'}, [
//   React.createElement("div", {id:'box1'}, React.createElement("div", {}, "Inside Box1"),),
//   React.createElement("div", {id:'box2'}, React.createElement("div", {}, "Inside Box2")),
//    React.createElement("div", {id:'box3'}, React.createElement("div", {}, "Inside Box3")),
// ]);

//5
// Question 5: Challenge — Mixed Nesting
// Create a parent <div> with id="page". Inside it:

// A <div> with id="nav" containing two nested <div> items: "Home" and "About".

// A <div> with id="content" containing one nested <div> with text "Main Content".

// A <div> with id="sidebar" containing one nested <div> with text "Links".

// const heading = React.createElement("div", { id: "page" }, [
//   React.createElement("div", { id: "nav" }, [
//     React.createElement("div", { id: "home" }, "home"),
//     React.createElement("div", { id: "about" }, "about")
//   ]),
//   React.createElement("div", { id: "content" }, [
//     React.createElement("div", { id: "main" }, "Main Content")
//   ]),
//   React.createElement("div", { id: "sidebar" }, [
//     React.createElement("div", { id: "links" }, "links")
//   ]),
// ]);

// document.getElementById('root').innerHTML = '<h1>Hello, World!</h1>';

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", {}, 'hi');
// console.log(heading);

// jsx (transpiled before reaching to browser)  - parcel - babel

// jsx --> bebel transpiled --> react.createElement --> object --> html dom

//if multiple lines are there in jsx then we have to use ( ) paranthesis


//react element
const jsxHeading = (<div>
  hello jsx

</div>);

//react component

const TitleComponent = () => {
  return(
    <h1>hello from TitleComponent</h1>
  );
}

//component composition
const HeadingComponent = () => {
  return(<><h1>hello from component</h1>
  <TitleComponent />
  </>);
}

// const HeadingComponent2 = () => (
//   <h1>hello from component</h1>
// )

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingComponent />);
