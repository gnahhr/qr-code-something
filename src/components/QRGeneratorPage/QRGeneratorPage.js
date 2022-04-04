import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import './QRGeneratorPage.css';

const QRGeneratorPage = (props) => {
    const[canvas, setCanvas] = useState('');

    useEffect(()=> {
        setCanvas(document.getElementById('canvas'));
    }, [])

    QRCode.toCanvas(canvas, props.location, function (error) {
        if (error) console.error(error)
        console.log('success!');
    })
  return (
    <div>
        <h1>{props.location} QR Code</h1>
        <canvas id="canvas" style={{width:"500", height:"500"}}></canvas>
    </div>
  )
}

export default QRGeneratorPage