import React from "react";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


function App() {
    const myStyles = {
        width: '50%',
        // backgroundColor:'red',
        // height:'400px',
        margin: '0 auto'
    }
  return (
    <div style={myStyles}>
        <Header height = "100px" image = "./banner.jpg"/>
        <Content />
        <Footer />
    </div>
  )
}

export default App;
