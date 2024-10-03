import React from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "../assets/css/hostellist.css";
import { Link } from "react-router-dom";

class Hostlellist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.config = {
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Token ' + '3af5accdebeb5b899e6f9197b0b822f657af008f'
        // Add any other custom headers here
      },
    };
  }

  componentDidMount() {
    axios
      .get(`http://gcbackend.tech-iitb.org/hostels/`, this.config)
      .then((res) => {
        const data = res.data;
        console.log(data);
        this.setState({
          data: data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="hostellist">
        <div className="heading">Hostel</div>
        <div className="cards-container">
          {data.map((output, id) => (
            <motion.div
              key={id}
              className="cards"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 2, opacity: 0 }}
              transition={{
                duration: 0.3,
              }}
            >
              <Link to={`/dashboard/${output.name}`}>
                <img src={output.image} alt="" />
                <div className="hostel_ids">
                  <span className="hostelname">{output.name}</span>
                  <br />
                  <span className="hosteltittle">{output.tittle}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
}
export default Hostlellist;
