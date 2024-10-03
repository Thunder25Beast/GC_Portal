import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../assets/css/gc-list.css";
import { motion } from "framer-motion";

class GC_Genre1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Mydata: [],
    };
    this.config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + "3af5accdebeb5b899e6f9197b0b822f657af008f",
      },
    };
  }

  componentDidMount() {
    axios // loading backend data
      .get("http://localhost:8000/gc/genre1/", this.config)
      .then((res) => {
        this.setState({
          Mydata: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });

    import("../assets/js/gclist.js") //importing script
      .then((module) => {
        console.log("gclist.js loaded successfully");
      })
      .catch((error) => {
        console.error("Error loading gclist.js:", error);
      });
  }

  render() {
    const { Mydata } = this.state;
    console.log(Mydata);
    return (
      <div className="gclist">
        <div className="sidebarhs">
          <ul id="ul">
            <li id="active-genre-page">
              <div className="display">
                <Link to="/GC/Genre1">
                  <i className="fas fa-th-large"></i>
                  <button className="titles .btnhs">Genre 1 </button>
                </Link>
              </div>
            </li>
            <li>
              <div className="display">
                <Link to="/GC/Genre2">
                  <i className="fas fa-stethoscope"></i>
                  <button className="titles ">Genre 2</button>
                </Link>
              </div>
            </li>
            <li>
              <div className="display">
                <Link to="/GC/Genre3">
                  <i className="fas fa-user-md"></i>
                  <button className="titles">Genre 3</button>
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="wrapper">
          {/* <i id="left" className="fa-solid fa-angle-left"></i> */}
          <ul className="carousel">
            {Mydata.map((post) => {
              const { id, name, description, poster } = post;
              return (
                <motion.div
                  key={id}
                  className="card"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 2, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <li className="card" key={id}>
                    <div className="img">
                      <Link to={`/GC/Genre1/${id}`}>
                        <img
                          src={"http://127.0.0.1:8000" + poster}
                          alt="img"
                          draggable="false"
                        />
                      </Link>
                    </div>
                  </li>
                </motion.div>
              );
            })}
          </ul>
          {/* <i id="right" className="fa-solid fa-angle-right"></i> */}
        </div>
      </div>
    );
  }
}

class GC_Genre2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Mydata: [] };
    this.config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + "3af5accdebeb5b899e6f9197b0b822f657af008f",
      },
    };
  }

  componentDidMount() {
    axios // loading backend data
      .get("http://localhost:8000/gc/genre2/", this.config)
      .then((res) => {
        this.setState({
          Mydata: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });

    import("../assets/js/gclist.js") //importing script
      .then((module) => {
        console.log("gclist.js loaded successfully");
      })
      .catch((error) => {
        console.error("Error loading gclist.js:", error);
      });
  }
  render() {
    const { Mydata } = this.state;
    console.log(Mydata);
    return (
      <div className="gclist">
        <div className="sidebarhs">
          <ul id="ul">
            <li>
              <div className="display">
                <Link to="/GC/Genre1">
                  <i className="fas fa-th-large"></i>
                  <button className="titles .btnhs">Genre 1 </button>
                </Link>
              </div>
            </li>
            <li id="active-genre-page">
              <div className="display">
                <Link to="/GC/Genre2">
                  <i className="fas fa-stethoscope"></i>
                  <button className="titles ">Genre 2</button>
                </Link>
              </div>
            </li>
            <li>
              <div className="display">
                <Link to="/GC/Genre3">
                  <i className="fas fa-user-md"></i>
                  <button className="titles">Genre 3</button>
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="wrapper">
          {/* <i id="left" className="fa-solid fa-angle-left"></i> */}
          <ul className="carousel">
            {Mydata.map((post) => {
              const { id, name, description, poster } = post;
              return (
                // <li className="card" key={id}>
                  <motion.div
                    key={id}
                    className="card"
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 2, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <div className="img">
                      <Link to={`/GC/Genre1/${id}`}>
                        <img
                          src={"http://127.0.0.1:8000" + poster}
                          alt="img"
                          draggable="false"
                        />
                      </Link>
                    </div>
                  </motion.div>
                // </li>
              );
            })}
          </ul>
          {/* <i id="right" className="fa-solid fa-angle-right"></i> */}
        </div>
      </div>
    );
  }
}

class GC_Genre3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Mydata: [],
    };
    this.config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + "3af5accdebeb5b899e6f9197b0b822f657af008f",
      },
    };
  }

  componentDidMount() {
    axios // loading backend data
      .get("http://localhost:8000/gc/genre3/", this.config)
      .then((res) => {
        this.setState({
          Mydata: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });

    import("../assets/js/gclist.js") //importing script
      .then((module) => {
        console.log("gclist.js loaded successfully");
      })
      .catch((error) => {
        console.error("Error loading gclist.js:", error);
      });
  }
  render() {
    const { Mydata } = this.state;
    console.log(Mydata);
    return (
      <div className="gclist">
        <div className="sidebarhs">
          <ul id="ul">
            <li>
              <div className="display">
                <Link to="/GC/Genre1">
                  <i className="fas fa-th-large"></i>
                  <button className="titles .btnhs">Genre 1 </button>
                </Link>
              </div>
            </li>
            <li>
              <div className="display">
                <Link to="/GC/Genre2">
                  <i className="fas fa-stethoscope"></i>
                  <button className="titles ">Genre 2</button>
                </Link>
              </div>
            </li>
            <li id="active-genre-page">
              <div className="display">
                <Link to="/GC/Genre3">
                  <i className="fas fa-user-md"></i>
                  <button className="titles">Genre 3</button>
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="wrapper">
          {/* <i id="left" className="fa-solid fa-angle-left"></i> */}
          <ul className="carousel">
            {Mydata.map((post) => {
              const { id, name, description, poster } = post;
              return (
                <li className="card" key={id}>
                  {/* <motion.div
                    key={id}
                    className="cards"
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 2, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                    }}
                  > */}
                  <motion.div
                    className="img"
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 2, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <Link to={`/GC/Genre1/${id}`}>
                      <img
                        src={"http://127.0.0.1:8000" + poster}
                        alt="img"
                        draggable="false"
                      />
                    </Link>
                  </motion.div>
                  {/* </motion.div> */}
                </li>
              );
            })}
          </ul>
          {/* <i id="right" className="fa-solid fa-angle-right"></i> */}
        </div>
      </div>
    );
  }
}

export { GC_Genre1, GC_Genre2, GC_Genre3 };
