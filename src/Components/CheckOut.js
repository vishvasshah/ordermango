import React, { useState } from "react";
import './App.css';


function Checkout() {
	h3>BILLING ADDRESS</h3>
	<form>
		Full name
		<input type="text" name="" placeholder="Enter name">
		<div id="zip">
			
			<label>
			Contact number
			<input type="number" name="" placeholder="mobile number">
		</label>
	</div>

		Address
		<input type="text" name="" placeholder="Enter address">
		
		City
		<input type="text" name="" placeholder="Enter City">
		
		<input type="submit" name="" value="Proceed to Checkout">
	</form>

}
export default Checkout;