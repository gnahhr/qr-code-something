import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode'

const QRGeneratorPage = (props) => {
    const[canvas, setCanvas] = useState('');

    useEffect(()=> {
        setCanvas(document.getElementById('canvas'));
        console.log(props.location);
    }, [])

    QRCode.toCanvas(canvas, props.location, function (error) {
        if (error) console.error(error)
        console.log('success!');
    })
  return (
    <div>
        <h1>QR: {props.location}</h1>
        <canvas id="canvas"></canvas>
    </div>
  )
}

export default QRGeneratorPage