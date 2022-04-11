import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import swal from 'sweetalert';

const CheckOut = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [curr , setCurr] = useState(new Date());

  const [loader, setLoader] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        number: number,
        address: address,
        curr:  curr
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
    setCurr("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>delivery information</h3>

      <label>Name</label>
      <input
        placeholder="Name"  className="checkoutform"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label>number</label>
      <input
        placeholder="number" className="checkoutform"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        required
      />

      <label>Address</label>
      <textarea
        placeholder="Address"  className="checkoutform"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      ></textarea>
      <input
        placeholder="curr"
        value={curr}
        onChange={(e) => setCurr(e.target.value)} hidden
      />
      

      <button className="checkOut"
        type="submit"
        style={{ background: loader ? "#ccc" : " #f8901c" }}
      >
        Place your order
      </button>
    
    </form>
  );
};

export default CheckOut;