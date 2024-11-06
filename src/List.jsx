import { useState } from "react";



function List(props){
const [isLineThrough, setisLineThrough] = useState(false)
function strike(){
    setisLineThrough((prevValue)=>{
        return !prevValue
    })

}
    return <div onClick={strike}>
         <li style={{textDecoration: isLineThrough? "line-through" : "none"}}>{props.text}</li>
    </div>
}

export default List;