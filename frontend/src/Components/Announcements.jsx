// Announcements.jsx
import React, { useEffect, useState } from "react";
// import axios from "axios";

import "../assets/css/announcements.css"; 


// const Announcements = () => {
//   const [announcements, setAnnouncements] = useState([]);

//   useEffect(() => {
//     // Polling every 30 seconds; or use websockets for real-time updates
//     const fetchAnnouncements = () => {
//       axios.get("https://gcbackend.tech-iitb.org/announcements/")
//         .then(res => setAnnouncements(res.data))
//         .catch(err => console.error(err));
//     };

//     fetchAnnouncements();
//     const interval = setInterval(fetchAnnouncements, 30000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="announcements">
//       {announcements.map((ann, idx) => (
//         <div key={idx} className="announcement">
//           {ann.message}
//         </div>
//       ))}
//     </div>
//   );
// };
const Announcements = () => {
    // Hardcoded sample announcements data
    const sampleAnnouncements = [
      { id: 1, message: "New event coming soon! Check out the schedule." },
      { id: 2, message: "Leaderboard updates every hour. Stay tuned!" },
      { id: 3, message: "Welcome to our new participants!" },
      { id: 4, message: "Welcome to our new participants!" },
    ];
  
    // State to hold announcements
    const [announcements, setAnnouncements] = useState(sampleAnnouncements);
  
    // Simulate periodic updates (in a real app, this could be replaced by WebSockets or polling)
    useEffect(() => {
      const timer = setInterval(() => {
        // For now, we’re not changing data – simply re-setting it.
        setAnnouncements([...sampleAnnouncements]);
      }, 30000); // every 30 seconds
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div className="announcements" style={{ padding: "1rem", backgroundColor: "#f9f9f9" }}>
        <h3 style={{ textAlign: "center" }}>Announcements</h3>
        {announcements.map((ann) => (
          <div key={ann.id} className="announcement" style={{ margin: "0.5rem", padding: "0.5rem", borderBottom: "1px solid #ccc" }}>
            {ann.message}
          </div>
        ))}
      </div>
    );
  };
  
export default Announcements;
