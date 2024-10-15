import React, { useState, useEffect } from "react";
import "./hostel1.css";
import axios from "axios";
import Card2 from "./Card2";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const GC_Genre2 = () => {
  const [Mydata, setMydata] = useState([]);

  useEffect(() => {
    axios
      .get("https://gc.tech-iitb.org/gcbackend/gc/genre2/")
      .then((res) => {
        setMydata(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

    // Other side effects can be added here if needed

  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="backgroundhs">
      <div className="sidebarhs">
        <ul id="ul">
          <li>
            <div className="display">
              <a href="/Genre1">
                <button className="titles .btnhs">Genre 1</button>
              </a>
            </div>
          </li>
          <li>
            <div className="display">
              <a href="/Genre2">
                <button className="titles">Genre 2</button>
              </a>
            </div>
          </li>
          <li>
            <div className="display">
              <a href="/Genre3">
                <button className="titles">Genre 3</button>
              </a>
            </div>
          </li>
        </ul>
      </div>

      <Carousel responsive={responsive} showDots={true} keyBoardControl={true}>
        {Mydata.map((post) => {
          const { id, name, description } = post;
          return (
            <Link to={`/GC/${name}`} key={id}>
              <Card2 id={id} name={name} description={description} />
            </Link>
          );
        })}
      </Carousel>
    </div>
  );
}

export default GC_Genre2;
