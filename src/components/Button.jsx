const Button = (props) =>{
    return ( 
        
        <button onClick={props.onClick}
        className="m-1 border border-slate-500"> 
            {props.name}</button>
            
     );
}

export default Button;