import { useState } from "react";

function Button(props){
    const [iscolor, setisColor] = useState(false)
    function hadleMouseOver(){
        setisColor(true)

    }
    function handleMouseOut(){
         setisColor(false)
    }
    return <div>
    <span onMouseOut={handleMouseOut} onMouseOver={hadleMouseOver} style={{color: iscolor? "blue" : "red"}}>{props.click}</span>
    </div>
}

export default Button;