import React from 'react'
import QRCode from 'qrcode'

const QRGeneratorPage = () => {
    var canvas = document.getElementById('canvas')

    QRCode.toCanvas(canvas, 'sample text', function (error) {
        if (error) console.error(error)
        console.log('success!');
    })
  return (
    <div>
        <canvas id="canvas"></canvas>
    </div>
  )
}

export default QRGeneratorPage