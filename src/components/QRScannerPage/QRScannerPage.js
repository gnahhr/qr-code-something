import React, {useState} from 'react'
import Camera from './Camera.js';

const QRScannerPage = () => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
    
    const changeInputs = {
      username: setName,
      contact: setContact,
      address: setAddress
    }
  
    const onChangeText = (e) => {
      var value = e.target.value;
      var name = e.target.name;
  
      changeInputs[name](value);
    }
  
    return (
      <div className="QRScannerPage">
        <label htmlFor="username">Name:</label> <br />
        <input type="text" name="username" id="username" onChange={(e) => onChangeText(e)} /> <br />
        <label htmlFor="contact">Contact:</label> <br />
        <input type="tel" name="contact" id="contact" onChange={(e) => onChangeText(e)} /> <br />
        <label htmlFor="address">Address:</label> <br />
        <input type="text" name="address" id="address" onChange={(e) => onChangeText(e)} /> <br />
        
        <Camera name={name} contact={contact} address={address} />
      </div>
    );
}

export default QRScannerPage