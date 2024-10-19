import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Rest Parameter {carIds} in JS
function sendCars(days, ...carIds){
  carIds.forEach((id)=>console.log(id));
  console.log(days);
  
}
sendCars('thursdays',100,200,333,454);

// destructuring arrays in JS
let carIds = [12,34,56];
let [car1,car2,car3]= carIds;                       //or first initialize and then assign eg. let car1,car2,car3; [car1,car2,car3]=carIds;
console.log("array: " ,carIds);
console.log("destructured array: " ,car1,car2,car3);

// use rest parameter with destructing
let [car11,...remainingCars]= carIds;               //or first initialize and then assign eg. let car11,remainingCars; [car11,...remainingCars]=carIds;
console.log(car11, remainingCars);

// 
let [...remainingCars1]= carIds;  //enter all elements
console.log(remainingCars1);
let [,...remainingCars2]= carIds; //skips 1st element
console.log(remainingCars2);

//console logging various console msgs with various commands 
var name = "Alex";
var arr = [1, 2, 3];
var obj = { a:1, b:2, c:3 };
var hello = function(msg){alert(msg);};
console.log("Name: ", name);
console.log("Window Debug: ", window);
console.error("Some error happened");
console.warn("Ahh... Warning", arr, obj);
console.log("more parameters: ", arr, obj, hello);

// destructuring objects in JS
 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
