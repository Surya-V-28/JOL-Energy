// LoadingPage.js
import React, { useState, useEffect } from 'react';
import './LoadingPage.css';

const LoadingPage = ({ onLoadingComplete }) => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercentage((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          onLoadingComplete();
          return 100;
        }
      });
    }, 25); // Adjust speed if needed

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="loading-page">
      <div className="loading-bar">
        <div
          className="loading-progress"
          style={{ width: `${loadingPercentage}%` }}
        ></div>
      </div>
      <div className="loading-text">{loadingPercentage}</div>
    </div>
  );
};

export default LoadingPage;
