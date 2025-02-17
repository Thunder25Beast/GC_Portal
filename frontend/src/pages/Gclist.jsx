import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import "../assets/css/gc-list.css";
import { motion } from "framer-motion";

// Configuration for API requests
const API_CONFIG = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Token 3af5accdebeb5b899e6f9197b0b822f657af008f",
  },
};

// Utility function for prep type classification
const getPrepTypeClass = (prepType) => {
  switch (prepType) {
    case 'High Prep': return 'prep-high';
    case 'Medium Prep': return 'prep-medium';
    case 'Low Prep': return 'prep-low';
    default: return 'prep-default';
  }
};

// Sidebar component
const GenreSidebar = ({ currentGenre }) => {
  const genres = [
    { path: "/GC/Genre1", icon: "fas fa-th-large", title: "Software" },
    { path: "/GC/Genre2", icon: "fas fa-stethoscope", title: "Hardware" },
    { path: "/GC/Genre3", icon: "fas fa-user-md", title: "Pure Sciences" },
    { path: "/GC/Genre4", icon: "fas fa-user-md", title: "Non Core" }
  ];

  return (
    <div className="sidebarhs">
      <ul id="ul">
        {genres.map((genre) => (
          <li
            key={genre.path}
            id={genre.path === currentGenre ? "active-genre-page" : ""}
          >
            <div className="display">
              <Link to={genre.path}>
                <i className={genre.icon}></i>
                <button className={`titles ${genre.path === currentGenre ? '.btnhs' : ''}`}>
                  {genre.title}
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// GC Card component
const GCCard = ({ gc, genreName }) => {
  return (
    <motion.div
      className="gc-card"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link to={`/GC/Genre1/${gc.id}`} className="gc-card-link">
        <div className="gc-card-image">
          <img
            src={`https://gcbackend.tech-iitb.org${gc.poster}`}
            alt={gc.name}
            draggable="false"
          />
        </div>
        <div className="gc-card-details">
          <h3>{gc.name}</h3>
          <div className="gc-card-meta">
            <span className={`gc-card-genre ${getPrepTypeClass(gc.prep)}`}>
              {gc.prep}
            </span>
            <span className="gc-card-club">{gc.club}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

// Loading state component
const LoadingState = ({ genreName }) => (
  <div className="loading-container">
    <div className="spinner"></div>
    <p>Loading {genreName} GCs...</p>
  </div>
);

// Error state component
const ErrorState = ({ error, onRetry }) => (
  <div className="error-container">
    <h2>Error Loading GCs</h2>
    <p>{error}</p>
    <button onClick={onRetry}>Retry</button>
  </div>
);

// Empty state component
const EmptyState = ({ genreName }) => (
  <div className="empty-state">
    <h1>No GCs Available</h1>
    <p>There are currently no Group Challenges in the {genreName} category.</p>
  </div>
);

// Genre-specific configuration
const GENRE_CONFIG = {
  Genre1: {
    endpoint: 'genre1',
    name: 'Software',
    path: '/GC/Genre1'
  },
  Genre2: {
    endpoint: 'genre2',
    name: 'Hardware',
    path: '/GC/Genre2'
  },
  Genre3: {
    endpoint: 'genre3',
    name: 'Pure Sciences',
    path: '/GC/Genre3'
  },
  Genre4: {
    endpoint: 'genre4',
    name: 'Non Core',
    path: '/GC/Genre4'
  }
};

// Main Genre List Component
const GenreList = ({ genreKey }) => {
  const [state, setState] = useState({
    gcs: [],
    isLoading: true,
    error: null
  });

  const genreConfig = GENRE_CONFIG[genreKey];

  useEffect(() => {
    const fetchGCs = async () => {
      try {
        const response = await axios.get(
          `https://gcbackend.tech-iitb.org/gc/${genreConfig.endpoint}/`,
          API_CONFIG
        );

        setState({
          gcs: response.data,
          isLoading: false,
          error: null
        });
      } catch (error) {
        setState({
          gcs: [],
          isLoading: false,
          error: error.message
        });
      }
    };

    fetchGCs();
  }, [genreKey]);

  const handleRetry = () => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
  };

  return (
    <div className="gclist">
      <GenreSidebar currentGenre={genreConfig.path} />
      <div className="genre-content">
        {state.isLoading ? (
          <LoadingState genreName={genreConfig.name} />
        ) : state.error ? (
          <ErrorState
            error={state.error}
            onRetry={handleRetry}
          />
        ) : state.gcs.length === 0 ? (
          <EmptyState genreName={genreConfig.name} />
        ) : (
          <div className="gc-grid">
            {state.gcs.map(gc => (
              <GCCard
                key={gc.id}
                gc={gc}
                genreName={genreConfig.name}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Genre-specific components for routing
const GC_Genre1 = () => <GenreList genreKey="Genre1" />;
const GC_Genre2 = () => <GenreList genreKey="Genre2" />;
const GC_Genre3 = () => <GenreList genreKey="Genre3" />;
const GC_Genre4 = () => <GenreList genreKey="Genre4" />;

export { GC_Genre1, GC_Genre2, GC_Genre3, GC_Genre4 };
