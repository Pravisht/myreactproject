import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
function SignUp() {

const[user,setUser]=useState({
  email:"",
  password:"",
  address:"",
  city:"",
  zip:""
})
 

let name,value;
const handleValue=(e)=>{
  
  name=e.target.name;
  value=e.target.value;
  setUser({...user,
   [name]:value
  })
//  console.log(e);
//  console.log(user);
//  console.log(value);
}

const {email,password,address,city,zip}=user;

const submitUserInfo=async(e)=>{
 
  e.preventDefault();
  
      try {
          // Sign up the user with email and password
          const auth = getAuth();
          await createUserWithEmailAndPassword(auth,email, password);
          alert("User created successfully!");
        const res=await fetch("https://dolu1169-default-rtdb.firebaseio.com/dolu_user.json",
          {
            method: "POST",
            header:
            {
                "Content-Type": "application/json",        // We are sending JSON data
                // "Authorization": "Bearer AIzaSyDVd58dSBt37cmyxBK2E7kaR57suzwPNnI", // Include your access token for authentication
                "Accept": "application/json" // We expect the response to be in JSON format
            },
            body:JSON.stringify({
              email,password,address,city,zip
            })
          }
         );
         console.log(res);
      } catch (error) {
        console.log(error.message)
      }
     
// const goToLogin=()=>{
//   return;
// }
     
     
       
}


  return (
    <div className='outer-div'>
        <form className="row g-3">
                <div className="col-md-6">
        <label className="form-label">Email</label>
        <input type="email" name="email" className="form-control" id="inputEmail4" value={user.email} onChange={handleValue}></input>
      </div>
      <div className="col-md-6">
        <label  className="form-label" color='white'>Password</label>
        <input type="password" name="password" className="form-control" id="inputPassword4" value={user.password} onChange={handleValue}></input>
      </div>
      <div className="col-12">
        <label  className="form-label">Address</label>
        <input type="text" name="address" className="form-control" id="inputAddress" placeholder="1234 Main St" value={user.address} onChange={handleValue}></input>
      </div>
      <div className="col-md-6">
        <label  className="form-label">City</label>
        <input type="text" name="city" className="form-control" id="inputCity" value={user.city} onChange={handleValue}></input>
      </div>
    
      <div className="col-md-6">
        <label className="form-label">Zip</label>
        <input type="text" name="zip" className="form-control" id="inputZip" value={user.zip} onChange={handleValue}></input>
      </div>
      <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck"></input>
            <label className="form-check-label" >
              Check me out
            </label>
        </div>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary" onClick={submitUserInfo}>Sign in</button>
      </div>
      <div className="col-12">
        <Link to={'/login'}>
        <button className="btn btn-primary" >Login in</button>
        </Link>
      </div>
      <div><Outlet/></div>
      </form>

    </div>
  )
}

export default SignUp