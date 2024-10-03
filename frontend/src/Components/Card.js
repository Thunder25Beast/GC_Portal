import React from 'react'
import hostel6 from "./hostel6.jpg";

class Card extends React.Component {
  
    
   

    render(){
        let{id,name,description}=this.props
  return (
    <>
    <label htmlFor={`s${id}`} id={`slide${id}`}>
                      <div className="card">
                        <div className="image">
                          <img src={hostel6} alt="hostel 6" />
                        </div>
                        <div className="infos">
                          <span className="lorem">
                             {name}
                          </span>
                          <span className="lorem" >
                             {description}
                          </span>
                        </div>
                     </div>
        </label>
       
    </>  
  )
}
}

export default Card;
