import React, {useState} from 'react';


const Checkout = () => {
    const [user,setUser]=useState({
        name:"",
        address:"",
        number:""});



    const [values, setValues] = React.useState({
      name: '',
      address:'',
      Number: ''
    })
   


    const [validations, setValidations] = React.useState({
      name: '',
      address:'',
      number: ''
    })
    
    const validateAll = () => {
      const { name, address,number } = values
      const validations = { name: '', address: '',number:'' }
      let isValid = true
      
      if (!name) {
        validations.name = 'Name is required'
        isValid = false
      }
      
      if (name && name.length < 3 || name.length > 50) {
        validations.name = 'Name must contain between 3 and 50 characters'
        isValid = false
      }
      
      if (!number) {
        validations.number = 'number is required'
        isValid = false
      }
       
      if (number && number.length < 10 || number.length > 11 ) {
        validations.number = 'enter valid number'
        isValid = false
      }
      if (!address) {
        validations.address = 'address is required'
        isValid = false
      }
    
      
      if (!isValid) {
        setValidations(validations)
      }
      
      return isValid
    }
  
    const validateOne = (e) => {
      const { name } = e.target
      const value = values[name]
      let message = ''
      
      if (!value) {
        message = `${name} is required`
      }
      
      if (value && name === 'name' && (value.length < 3 || value.length > 50)) {
        message = 'Name must contain between 3 and 50 characters'
      }
  
      
      
      setValidations({...validations, [name]: message })
    }
    
    const handleChange = (e) => {
      const { name, value } = e.target
      setValues({...values, [name]: value })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
  
      const isValid = validateAll()
      
      if (!isValid) {
        return false
      }
  
      alert(JSON.stringify(values))
    }
    
    const { name, address,number} = values
  
    const { 
      name: nameVal, 
      address:addressVal,
      number:numberVal
    } = validations
    
      return (
        <div>
           <h1>delivery form</h1>
           <form onSubmit={handleSubmit}>
            <div>
              <label>Name:
                <input 
                  type="text"
                  name="name"
                  placeholder="enter your name"
                  value={name} 
                  onChange={handleChange}
                  onBlur={validateOne}
                />
              </label>
              <div>{nameVal}</div>
            </div>
            
            <div>
              <label>Contact number:
                <input 
                  type="number"
                  name="number"
                  placeholder="enter your number"
                  value={number} 
                  onChange={handleChange}
                  onBlur={validateOne}
                />
              </label>
              <div>{numberVal}</div>
            </div>

            <div>
              <label>Delievery Address:
                <textarea 
                  type="address"
                  name="address"
                  placeholder="enter your address"
                  value={address} 
                  onChange={handleChange}
                  onBlur={validateOne}
                />
              </label>
              <div>{addressVal}</div>
            </div>
          </form>
        </div>
      )
  }
  

export default Checkout;