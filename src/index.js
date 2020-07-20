//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading"style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

const d = new Date();
const t = d.getHours();

let heading ; 
const style = {
  color: ""
}

if(t < 12){
heading = "Good morning";
style.color="red";
} else if(t<18){
heading = "Good afternoon";
style.color="green";
} else{
heading = "Good night";
style.color="blue";
}


ReactDom.render(
<h1 className="heading" style={style}>{heading}</h1>,
document.getElementById("root")
);
