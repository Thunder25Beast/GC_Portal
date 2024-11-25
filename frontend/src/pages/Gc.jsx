import React from "react";
import "../assets/css/gc.css";
import axios from "axios";
import { motion } from 'framer-motion'

class Gc extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scoresdata: [],
            gcdata: [],
            maxscore: []
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
        const link_url = window.location.href; // Get the current URL
        const gc_id = link_url.split('/'); // Retrieve the hostel value from navigation param
        const id = gc_id[gc_id.length - 1]; // Check the value of hostel
        axios
            .get(`https://gcbackend.tech-iitb.org/GC${id}/`, this.config)
            .then((res) => {
                const { gc, scores } = res.data;
                this.setState({
                    gcdata: gc[0],
                    scoresdata: scores,
                    maxscore: scores[0]
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }

    render() {
        const { gcdata, scoresdata, maxscore } = this.state;
        const imgurl = "https://gcbackend.tech-iitb.org" + gcdata.poster
        console.log(imgurl)
        return (
            <div className="gc body">
                <div className="main">
                    <div className="left">
                        <div className="left-top card">
                            <div className="container">
                                <div className="title">
                                    {gcdata.name}</div>
                                <hr />
                                <div className="discription-container">
                                    <div className="regdate">Registration Deadline: {new Date(gcdata.end_timeline).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                                    <div className="description p-text">
                                        <p>
                                            {gcdata.description}
                                        </p>
                                    </div>
                                    <div className="submmitionlink">
                                        <a href={gcdata.link} target="_blank" rel="noopener noreferrer"> Rulebook</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="left-bottom card">
                            <div className="container">
                                <div className="scoreboard"><h3>Score Board</h3></div>
                                <hr />
                                <div className="hl"></div>
                                <table className="hostel-score">
                                    {scoresdata.map((output, id) => (
                                        <tr className="hostel hd2" key={id}>
                                            <td className="hostname"> {output.hostel_name}</td>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: output.score * 65 / (maxscore.score) + "%" }}
                                                transition={{ duration: output.score * 2 / (maxscore.score) }}
                                                className="hosteldata"
                                            ></motion.div>
                                            <div className="hostelscore">{output.score}</div>
                                        </tr>
                                    ))}
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="right card">
                        <img src={imgurl} alt="" srcSet="" />
                        <div className="gc-details p-text">
                            <ul>
                                <li><span>{gcdata.club}</span></li>
                                <li>{gcdata.prep}</li>
                                <li>{gcdata.gc_genre}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Gc;