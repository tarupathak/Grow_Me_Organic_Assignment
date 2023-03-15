import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Second Page/SeconPage.css";

function SecondPage() {
  const name = localStorage.getItem("name") || "";
  const email = localStorage.getItem("email") || "";
  const number = localStorage.getItem("number") || "";
  const navHandler = useNavigate();

  

  return (
    <div>
      <div id="details">
        <p>
          <b>Name :</b> {name}
        </p>
        <p>
          <b>Number :</b> {number}
        </p>
        <p>
          <b>Email :</b> {email}
        </p>
      </div>
    </div>
  );
}

export default SecondPage;
