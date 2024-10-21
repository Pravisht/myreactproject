import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { type } from '@testing-library/user-event/dist/type';

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
 let car= {id: 5000,style: 'converible'};
 let id,style;        // or just assign without declaration eg. let {id,style}=car 
 ({id, style} = car); 
 //  error ===> {id,style} = car;
 console.log(id,style);

//  spread syntax reverse for rest parameter
function startCar(car1,car2,car3){
  console.log("cars: ",car1,car2,car3);
}
startCar(...carIds);

let carCodes='abcd';
startCar(...carCodes);
// can use spread and rest at same time eg function startCar(car1,car2,...rest){  and startCar(...carIds);

// typeof() built in function 

console.log(typeof(null)+", "+typeof(true) +", " + typeof(function startCar(car1,car2,car3){
  console.log("cars: ",car1,car2,car3);
}));

var foo=45;
console.log(typeof(foo.toString())+" == "+ foo.toString());
console.log(Number.parseInt('89'));

//block scope
let message = "outside and inside";
if(5===5){
  let message = "inside only";
  console.log(message);
  var constantmsg = "behave like declared top of file";
  console.log(constantmsg);
} 
console.log(message);
console.log(constantmsg);

// IIFE (Immediately Invoked Function Expression)
let app = (function(){
  let carId= 123;
  console.log('Inside IIFE');
  return{};
})();
console.log('assigning a function to a variabel and immediately invoking it with IIFE ',app);

// closures
let app1=(function(){
  let carId=1234;
  let getId=function(){
    return carId;
  };
  return {
    getId: getId     //closure 
  };
})();
console.log('use IIFE and closure to get value inside a function',app1.getId());

// the this keyword
let o={
  carId : 123,
  getId : function(){
    console.log('using this keyword inside the function --> ',this);
    return this.carId;
  }
};
console.log('using this keyword to access objs --> ',o.getId());

// call to give diff context object
let newCar={carId:456};
console.log('using call with a function --> ',o.getId.call(newCar));

// using apply to pass arguments too
let o1={
  carId : 123,
  getId : function(prefix,p2){
    return prefix+p2+this.carId;
  }
};

let newCar1={carId:1089};
console.log('using apply with a function --> ',o1.getId.apply(newCar1,['ID: ','as it is '])); 

// using bind to get a copy of a particular function along with diff context obj
let newCar2={carId:3487};
let newFn = o.getId.bind(newCar2);
console.log('using bind with a function --> ',newFn());

// Arrow Function
let arrow1=()=>123;
console.log('sample arrow function --> ',arrow1());

let arrow4= _ =>123;
console.log('sample arrow function with _ istead of () --> ',arrow4());

let arrow2=prefix=>prefix+123;                      //no need of () if arguments is 1
console.log('arrow function with 1 parameter --> ',arrow2('pre '));

let arrow3=(prefix,suffix)=>{return prefix+123+suffix;};         //need return if {} are used
console.log('arrow function with 2 parameter --> ',arrow3('pre ',' suff'));

// default parameters
let trackCar = function(carId,city='NY'){
  return `Tracking ${carId} in ${city}.`; 
};
console.log('using default city parameter --> ',trackCar(123));
console.log('providing all parameters --> ',trackCar(4657,'LA'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
