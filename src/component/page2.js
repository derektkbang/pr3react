import React from "react"
import ReactDOM from "react-dom"
import "./style.css";

function Imagedata() {
    var img = require("./seb.png")
    return (
        <div>
<body>
        <div>
            <h1>Image</h1>
            <img src ={img.default}/>
        </div>


</body>
</div>
    )
}

export default Imagedata