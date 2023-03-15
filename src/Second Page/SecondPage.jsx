import React from "react";
import "../Second Page/SeconPage.css";
import Table from "./Table";

function SecondPage() {
  const name = localStorage.getItem("name") || "";
  const email = localStorage.getItem("email") || "";
  const number = localStorage.getItem("number") || "";

  

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
      <Table />
    </div>
  );
}

export default SecondPage;