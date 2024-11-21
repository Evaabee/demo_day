// src/App.js
import React, { useState, useEffect, useCallback } from "react";
import './styles/App.css';
import NotificationForm from "./components/NotificationForm";
import Confirmation from "./components/Confirmation";
import Header from "./components/Header";  
import axios from "axios";

function App() {
  const [alertData, setAlertData] = useState(null);
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8000";

  const fetchCryptocurrencies = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/cryptocurrencies/`);
      setCryptocurrencies(response.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching cryptocurrencies:", err);
      setError("Failed to fetch cryptocurrencies.");
    } finally {
      setLoading(false);
    }
  }, [API_URL]);

  useEffect(() => {
    fetchCryptocurrencies();
  }, [fetchCryptocurrencies]);

  const handleSubmit = (data) => {
    setAlertData(data);
    console.log("Alert Data:", data);
  };

  return (
    <div className="App">
      <Header />
      {error && <p className="error-message">{error}</p>}
      {!loading && (
        <NotificationForm
          onSubmit={handleSubmit}
          cryptocurrencies={cryptocurrencies}
        />
      )}
      {alertData && (
        <Confirmation
          alertData={alertData}
          onModify={() => setAlertData(null)}
          onClose={() => setAlertData(null)}
        />
      )}
    </div>
  );
}


export default App;