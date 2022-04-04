import React, { useState } from 'react'
import Camera from './Camera.js';
import './QRScannerPage.css'
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
      <Camera name={name} contact={contact} address={address} />
      <div className="QRScannerPage-input-container">
      <input type="text" name="username" id="username" placeholder="Username" onChange={(e) => onChangeText(e)} value={name} /> <br />
      <input type="tel" name="contact" id="contact" placeholder="Contact Number" onChange={(e) => onChangeText(e)} value={contact}/> <br />
      <input type="text" name="address" id="address" placeholder="Address" onChange={(e) => onChangeText(e)} value={address}/> <br />
      </div>
    </div>
  );
}

export default QRScannerPage