import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/leaderboard.css";
import ScoreboardAnimation from "../Animation";
import axios from "axios";

class Overall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      hostel: "",
      hostelData: [],
      first: [],
      second: [],
      third: [], // Initialize the state variable to store hostel data
    };
    this.config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + "3af5accdebeb5b899e6f9197b0b822f657af008f",
        // Add any other custom headers here
      },
    };
  }

  handleClick = (hostel) => {
    this.setState({ hostel });
    console.log("Selected hostel:", hostel);
    // this.props.navigation.navigate("/Dashboard", {hostel: hostel});
  };

  componentDidMount() {
    // Fetch data for leaderboard
    axios
      .get("http://localhost:8000/genregenre3/", this.config)
      .then((res) => {
        const data = res.data;
        console.log(data);
        this.setState({
          details: data,
          first: data[0],
          second: data[1],
          third: data[2],
        });
      })
      .catch((err) => {
        console.error(err);
      });

    // Fetch data for hostel images and names
    axios
      .get("http://localhost:8000/hostels/", this.config) // Replace the URL with the actual API endpoint for hostel data
      .then((res) => {
        const hostelData = res.data;
        console.log(hostelData);
        this.setState({
          hostelData,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { hostelData, first, second, third } = this.state;

    const firstdata = hostelData.find(
      (firstdata) => firstdata.name === first.name
    );
    const seconddata = hostelData.find(
      (seconddata) => seconddata.name === second.name
    );
    const thirddata = hostelData.find(
      (thirddata) => thirddata.name === third.name
    );
    return (
      <div className="bg">
        <div className="leaderboard_heading">
          <h2 data-text="Leaderboards">Leaderboards</h2>
        </div>
        <div className="animation">
          <div className="list">
            <ul className="listing">
              <li className="list_items button-2">
                <Link to="/Overall">Overall</Link>
              </li>
              <li className="list_item_on button-2">
                <Link to="/Genre1">Genre1</Link>
              </li>
              <li className="list_items button-2">
                <Link to="/Genre2">Genre2</Link>
              </li>
              <li className="list_items button-1">
                <Link to="/Genre3">Genre3</Link>
              </li>
            </ul>
          </div>
        </div>
        <dir className="leaderboard-cards-container">
          <Link to={`/dashboard/${first.name}`} className="leaderboard-items">
            <div className="leaderboard-cards leaderboard-card-first">
              <div className="leaderboard-card_heading">
                <div className="image">
                  <img src={firstdata?.image} alt="Hostel Image" />
                </div>
                <div className="card-contents">
                  <div className="numberds">{first.name}</div>
                  <div className="nameds">{firstdata?.tittle}</div>
                </div>
              </div>
              <div className="leaderboard-card_heading">
                <div className="card-contents">
                  <div className="numberds">1st</div>
                  <div className="nameds">Rank</div>
                </div>
                <div className="card-contents">
                  <div className="numberds">{first.total_score}</div>
                  <div className="nameds">Total Score</div>
                </div>
              </div>
            </div>
          </Link>
          <Link to={`/dashboard/${second.name}`} className="leaderboard-items">
            <div className="leaderboard-cards leaderboard-card-second">
              <div className="leaderboard-card_heading">
                <div className="image">
                  <img src={seconddata?.image} alt="Hostel Image" />
                </div>
                <div className="card-contents">
                  <div className="numberds">{second.name}</div>
                  <div className="nameds">{seconddata?.tittle}</div>
                </div>
              </div>
              <div className="leaderboard-card_heading">
                <div className="card-contents">
                  <div className="numberds">2nd</div>
                  <div className="nameds">Rank</div>
                </div>
                <div className="card-contents">
                  <div className="numberds">{second.total_score}</div>
                  <div className="nameds">Total Score</div>
                </div>
              </div>
            </div>
          </Link>
          <Link to={`/dashboard/${third.name}`} className="leaderboard-items">
            <div className="leaderboard-cards leaderboard-card-third">
              <div className="leaderboard-card_heading">
                <div className="image">
                  <img src={thirddata?.image} alt="Hostel Image" />
                </div>
                <div className="card-contents">
                  <div className="numberds">{third.name}</div>
                  <div className="nameds">{thirddata?.tittle}</div>
                </div>
              </div>
              <div className="leaderboard-card_heading">
                <div className="card-contents">
                  <div className="numberds">3rd</div>
                  <div className="nameds">Rank</div>
                </div>
                <div className="card-contents">
                  <div className="numberds">{third.total_score}</div>
                  <div className="nameds">Total Score</div>
                </div>
              </div>
            </div>
          </Link>
        </dir>
        {this.state.details.map((output, id) => {
          if (id == 0 || id == 1 || id == 2) {
            return null;
          }
          // Find the corresponding hostel data based on hostel name
          const hostelInfo = hostelData.find(
            (hostelInfo) => hostelInfo.name === output.name
          );
          return (
            <Link to={`/dashboard/${output.name}`} key={id}>
              <div>
                <ScoreboardAnimation id={output.rank}>
                  <div className={output.rank}>
                    <div className="position" style={{ width: 20 }}>
                      <h4>{output.rank}</h4>
                    </div>
                    <div className="hello">
                      <div className="image_leaderboard">
                        {/* Render hostel image */}
                        <img src={hostelInfo?.image} alt="img_hostel" />
                      </div>
                      <div className="name" style={{ width: 240 }}>
                        <h3 className="name text-dark" style={{ margin: 0 }}>
                          {output.name}-{hostelInfo?.tittle}
                        </h3>
                        {/* <div className="span"></div> */}
                      </div>
                    </div>

                    <div className="score">
                      <span>{output.total_score}</span>
                    </div>
                  </div>
                </ScoreboardAnimation>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Overall;
