import { useState } from "react";
import Message from "./List";
import List from "./List";
import Button from "./Button";
import Delete from "./Delete";


function App(){
const [inputText, setInputText] = useState("")
const [items, setItems] = useState([])
const [istoggle, setisToggle] = useState(false)
function handleChange(event){
  setInputText(event.target.value)

}
function addItem(){
  setItems((prevItems)=>{
    return [...prevItems, inputText]
  })
  setInputText("")

}
 
function handleToggle(){
  setisToggle((prev)=>{
    return !prev
  })

}
function deleteItem(id){
  setItems((prevItems)=>{
    return prevItems.filter((item, index)=>{
      return index != id
    })
  })

}



  return <div>
   <div className="container" style={{backgroundColor: istoggle? "goldenrod" : "lightgreen"}}>
    <div className="my-heading">
      <h1>To-Do List</h1>
      <button onClick={handleToggle}>Toggle</button>
    </div>
    <div className="heading">
    <input type="text" placeholder="Enter Task" value={inputText} onChange={handleChange}/>
    <button onClick={addItem}><Button click = "Add"/></button>
    </div>
    <ul>
      {items.map((todoitem, index)=>{
        return <div className="my-button">
           <List text ={todoitem}/>
           <Delete del = "Delete"
           onChecked = {deleteItem}
           key = {index}
           id = {index}
           
           />
           
        </div>
      })}
      
      </ul>
   </div>
  </div>
}

export default App;