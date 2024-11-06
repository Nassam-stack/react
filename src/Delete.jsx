function Delete(props){
    return <div onClick={()=>{
        return props.onChecked(props.id)
    }}>
     <button className="delete">{props.del}</button>
    </div>
}

export default Delete;