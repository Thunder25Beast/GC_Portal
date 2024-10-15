import React from 'react';
import './Card2.css';

class Card2 extends React.Component {
  render() {
    let { id, name, description, image } = this.props;
    return (
      <>
        <div className="containercd">
          <div className="wrappercd">
            <div className="banner-imagecd">
              <figure>
                <img
                  className="imagecd"
                  src={"https://gcbackend.tech-iitb.org" + image}
                  alt="image"
                ></img>
              </figure>
            </div>
            <div className="box">
              <h1 className="h1cd">{name}</h1>
              <p className="pcd">{description.slice(0, 250)}...</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Card2;