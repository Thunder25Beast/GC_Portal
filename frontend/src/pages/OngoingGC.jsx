import React from "react";
import { Link } from "react-router-dom";
import "../Gc_timeline.css";
import jhatkagc from "../assets/gc.png";

function Gctimeline() {
  return (
    <div className="bg">
      <ul className="timeline_list">
        <li class="timeline_list_items">
          <Link to="/OngoingGC">Past</Link>
        </li>
        <li class="timeline_list_items_on">
          <Link to="/OngoingGC">Ongoing</Link>
        </li>
        <li class="timeline_list_items">
          <Link to="/OngoingGC">Upcoming</Link>
        </li>
      </ul>
      
      <div class="container_GC">
        <div class="card_GC">
          <h3 class="title_GC">Card_timeline 1 </h3>
          <ul className="info_list_GC">
            <li className="info_GC">Info1</li>
            <li className="info_GC">Info2</li>
            <li className="info_GC">Info3</li>
          </ul>
          <div class="bar_card_GC">
            <div class="emptybar_GC"></div>
            <div class="filledbar_GC"></div>
          </div>
        </div>
        <div class="card_GC">
          <h3 class="title_GC">Card_timeline 1 </h3>
          <ul className="info_list_GC">
            <li className="info_GC">Info1</li>
            <li className="info_GC">Info2</li>
            <li className="info_GC">Info3</li>
          </ul>
          <div class="bar_card_GC">
            <div class="emptybar_GC"></div>
            <div class="filledbar_GC"></div>
          </div>
        </div>
        <div class="card_GC">
          <h3 class="title_GC">Jhatka GC</h3>
          <ul className="info_list_GC">
            <li className="info_GC">MnP Club</li>
            <li className="info_GC">High Prep</li>
            <li className="info_GC">28/04/2024</li>
          </ul>
          <div class="bar_card_GC">
            <div class="emptybar_GC"></div>
            <div class="filledbar_GC"></div>
          </div>
          <div>
            <img className="img_timeline" src={jhatkagc} alt="" />
          </div>
        </div>
        <div class="card_GC">
          <h3 class="title_GC">Card_timeline 1 </h3>
          <ul className="info_list_GC">
            <li className="info_GC">Info1</li>
            <li className="info_GC">Info2</li>
            <li className="info_GC">Info3</li>
          </ul>
          <div class="bar_card_GC">
            <div class="emptybar_GC"></div>
            <div class="filledbar_GC"></div>
          </div>
        </div>
        <div class="card_GC">
          <h3 class="title_GC">Card_timeline 1 </h3>
          <ul className="info_list_GC">
            <li className="info_GC">Info1</li>
            <li className="info_GC">Info2</li>
            <li className="info_GC">Info3</li>
          </ul>
          <div class="bar_card_GC">
            <div class="emptybar_GC"></div>
            <div class="filledbar_GC"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gctimeline;
