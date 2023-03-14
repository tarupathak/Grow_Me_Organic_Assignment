import React, { useState, useEffect } from "react";
import "./FirstPage.css";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function Authentication() {
  const navHandler = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);

  function handleName(e) {
    if (/^[a-zA-Z ]*$/.test(e.target.value) || e.target.value == "") {
      setName(e.target.value);
      document.getElementById("invalidName").style.visibility = "hidden";
      document.getElementById("name").style.borderColor = "green";
    } else {
      setName("");
      document.getElementById("invalidName").style.visibility = "visible";
      document.getElementById("name").style.borderColor = "red";
    }
  }

  function handleEmail(e) {
    if (
      /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(e.target.value) ||
      e.target.value === ""
    ) {
      setEmail(e.target.value);
      document.getElementById("invalidEmail").style.visibility = "hidden";
      if (e.target.value === "") {
        document.getElementById("uname").style.borderColor = "#443C68";
      } else {
        document.getElementById("uname").style.borderColor = "green";
      }
    } else {
      document.getElementById("invalidEmail").style.visibility = "visible";
      document.getElementById("uname").style.borderColor = "red";
    }
  }

  function handlePhone(e) {
    if (/^[0-9]*$/.test(e.target.value)) {
      if (e.target.value >= 1000000000 && e.target.value <= 1000000000000) {
        setNumber(e.target.value);
        document.getElementById("invalidNum").style.visibility = "hidden";
        document.getElementById("phone").style.borderColor = "green";
      } else {
        setNumber(0);
        document.getElementById("phone").style.borderColor = "red";
        document.getElementById("invalidNum").style.visibility = "visible";
      }
    } else {
      setNumber(0);
      if (e.target.value === "" || e.target.value === undefined) {
        document.getElementById("invalidNum").style.visibility = "hidden";
        document.getElementById("phone").style.borderColor = "#443C68";
      } else {
        document.getElementById("invalidNum").style.visibility = "visible";
        document.getElementById("phone").style.borderColor = "red";
      }
    }
  }

  function handleSubmit() {
    if(name && email && number)
    {
      localStorage.setItem('name', name);
      localStorage.setItem('phoneNumber', number);
      localStorage.setItem('email', email);
      navHandler('');
    }
    else{
      toast.dismiss();
      toast.error('Enter your details correctly!');
    }
  }

  return (
    <div id="form">
      <div id="auth">
        <h1 id="heading">Enter Your Details</h1>
        <label className="lab">Name</label>
        <input
          className="box"
          placeholder="Name"
          id="name"
          onChange={handleName}
          required
        />
        <p className="valid" id="invalidName">
          Only alphabets are allowed.
        </p>
        <label className="lab">UserName</label>
        <input
          className="box"
          placeholder="Username"
          id="uname"
          onChange={handleEmail}
          required
        />
        <p className="valid" id="invalidEmail">
          Enter valid email address.
        </p>
        <label className="lab">Phone Number</label>
        <input
          className="box"
          placeholder="Phone number"
          id="phone"
          onChange={handlePhone}
          required
        />
        <p className="valid" id="invalidNum">
          Enter a valid phone number with 10 digits.
        </p>
        <button onClick={handleSubmit} id="submit">Submit</button>
      </div>
      <ToastContainer theme="light" position="top-right" />
    </div>
  );
}

export default Authentication;
