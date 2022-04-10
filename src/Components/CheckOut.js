import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import swal from 'sweetalert';

const CheckOut = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  const [loader, setLoader] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        number: number,
        address: address,
      })
      .then(() => {
        setLoader(false);
        swal("Good job!", "Your order placed successfully!!", "success");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setNumber("");
    setAddress("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>delivery information</h3>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label>number</label>
      <input
        placeholder="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        required
      />

      <label>Address</label>
      <textarea
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default CheckOut;