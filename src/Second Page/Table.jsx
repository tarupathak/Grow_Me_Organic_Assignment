import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Second Page/SeconPage.css";

function Tab() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        alert("Something went wrong.");
      });
  },[]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>USER ID</th>
            <th>ID</th>
            <th>TITLE</th>
            <th>BODY</th>
          </tr>
        </thead>
        {data.map((item) => {
          return (
            <tbody>
              <tr>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Tab;
