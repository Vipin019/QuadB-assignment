import "./Bookcard.css";
import React, { useState } from "react";

const Bookcard = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: name,
      email: email,
      phoneNo: phoneNo,
    };
    localStorage.setItem(userData.name, JSON.stringify(userData));

    alert("Data saved");
  };
  return (
    <div className="bookCard">
      <h1>Book Movie</h1>
      <div className="bookCard__form">
        <form onSubmit={handleOnSubmit}>
          <input
            type="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Enter Your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="tel"
            placeholder="Enter Your Phone Number"
            value={phoneNo}
            onChange={(e) => {
              setPhoneNo(e.target.value);
            }}
          />
          <input type="submit" value="Book Now" className="btn btn-l" />
        </form>
      </div>
    </div>
  );
};

export default Bookcard;
