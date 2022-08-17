import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import QRcode from "react-qr-code"
import  QRcodeLink from "qrcode"

function App() {
  const [link, setLink] = useState("")
  const [qrcodeLink, setQrcodeLink] = useState("")

  function handleGenerate (link_url){
      QRcodeLink.toDataURL(link_url, {
        width: 300,
        margin: 3,
      }, function(err, url){
        setQrcodeLink(url)
      })
  }
  const save = (e)=>{
     on(e)
     handleGenerate(e.target.value)
  }
  const on = (e)=>{
    setLink(e.target.value)
  }

  return (
   <div className="App">

    <QRcode 
    value={link}
    />

    <input 
    placeholder="digite ser link"
    value={link}
    onChange={(e)=>save(e)}
     />
     <a href={qrcodeLink} download={`qrcode.png`}>baixar QRcode</a>
   </div>
  )
}

export default App
