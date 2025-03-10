// DashboardAnalytics.jsx
import React, { useEffect, useState } from "react";
// import axios from "axios";
import { Bar } from 'react-chartjs-2';
import "../assets/css/leaderboard.css";
import "../assets/css/analytics.css";

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);



// const DashboardAnalytics = () => {
//   const [chartData, setChartData] = useState({});

//   useEffect(() => {
//     axios.get("https://gcbackend.tech-iitb.org/analytics/")
//       .then(res => {
//         // Assume the API returns data formatted for your chart
//         setChartData({
//           labels: res.data.labels,
//           datasets: [{
//             label: 'User Engagement',
//             data: res.data.data,
//             backgroundColor: 'rgba(75,192,192,0.6)',
//           }],
//         });
//       })
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className="dashboard-analytics">
//       <h2>Dashboard Analytics</h2>
//       <Bar data={chartData} />
//     </div>
//   );
// };

const DashboardAnalytics = () => {
    // Hardcoded chart data for demonstration
    const [chartData, setChartData] = useState({
      labels: ["Hostel 1", "Hostel 2", "Hostel 3", "Hostel 4", "Hostel 5"],
      datasets: [
        {
          label: "Total Score",
          data: [150, 130, 110, 90, 80],
          backgroundColor: [
            "rgba(255, 206, 86, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 99, 132, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
          ],
        },
      ],
    });
  
    // (Optional) Simulate data fetch/update with useEffect
    useEffect(() => {
      // For now, we are using hardcoded data.
    }, []);
  
    return (
      <div className="dashboard-analytics" style={{ padding: "1rem" }}>
        <div className="analytics-container">
        <h2 style={{ textAlign: "center" }}>Dashboard Analytics</h2>
        <Bar data={chartData} />
      </div>
      </div>
    );
  };

  
export default DashboardAnalytics;
