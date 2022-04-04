import React, { useEffect, useState } from 'react';
import QrScanner from 'qr-scanner';
import axios from 'axios';
import './QRScannerPage.css'
const Camera = ({ name, contact, address }) => {
  var qrs;
  const [videoElem, setVideoElem] = useState('');
  const [res, setRes] = useState('');

  const options = {
    returnDetailedScanResult: true,
  }

  const insertQuery = async (name, contact, address, location) => {
    await axios.post("https://4000-talyho-hackathonthree-g3f96dd6iu1.ws-us38.gitpod.io/", {
      name: name,
      contactNumber: contact,
      address: address,
      location: location
    })
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }

  if (videoElem) {
    qrs = new QrScanner(videoElem, async (result) => {
      setRes(result.data);
      console.log("Succesfully logged in");
      insertQuery(name, contact, address, res);
      qrs.stop();
    }, options);
  }

  useEffect(() => {
    setVideoElem(document.getElementById('scanVid'));
  }, [])

  const startCam = () => {
    qrs.start();
  }

  return (
    <header className="qr-scanner">
      <div className="video-container">
        <video id="scanVid" width="1000px" height="1000px"></video>
      </div>

      <button className="qr-scanner-button" onClick={startCam}>Scan QR</button>
    </header>
  )
}

export default Camera