import react from "react";


const Recipe = (props) => {
    return (
    
        <div className="container">
            <h1>{props.title} </h1>
            <p>{props.Id} </p>
        <img src={props.Img} alt="this is img" />
        
        </div>
            
    );

}

export default Recipe;
