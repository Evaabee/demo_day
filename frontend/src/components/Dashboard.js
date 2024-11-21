// src/components/Dashboard.js
import React from 'react';
import '../styles/Dashboard.css';
import NotificationForm from './NotificationForm';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="news-column">
          <h2>Crypto News</h2>
          <div className="news-feed">
            <div className="news-item">
              <h3>CoinGecko Unveils Enhanced Crypto API</h3>
              <p>Integration of on-chain DEX data with 2.2M tokens and 2.5M liquidity pools</p>
            </div>
            {/* Add more news items */}
          </div>
        </div>
        <div className="form-column">
          <NotificationForm />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;