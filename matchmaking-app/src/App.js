import React, { useState } from "react";
import axios from "axios";
import { Heart } from "lucide-react";
import "./matchmaking.css"; // Import the cute CSS file 💕

const API_URL = "https://data.mongodb-api.com/app/YOUR_APP_ID/endpoint/data/v1/action";
const API_KEY = "YOUR_API_KEY"; // Replace with your MongoDB API Key
const DATABASE_NAME = "matchmaking";
const COLLECTION_NAME = "users";

export default function Matchmaking() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    pronouns: "",
    datingPreference: "",
    agePreference: "",
    contact: "",
    responses: {},
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post(
        `${API_URL}/insertOne`,
        {
          collection: COLLECTION_NAME,
          database: DATABASE_NAME,
          dataSource: "Cluster0",
          document: formData,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": API_KEY,
          },
        }
      );
      setShowPopup(true);
    } catch (error) {
      console.error("Error submitting user:", error);
    }
  };

  return (
    <div className="matchmaking-container">
      <h1 className="title">💕 Find Your Match 💕</h1>
      <div className="form-box">
        <h2 className="subtitle">Tell us about yourself! 💖</h2>
        <input name="name" placeholder="💗 Name" className="input-field" onChange={handleInputChange} />
        <input name="age" placeholder="🎂 Age" className="input-field" onChange={handleInputChange} />
        <input name="pronouns" placeholder="🏳️‍🌈 Pronouns" className="input-field" onChange={handleInputChange} />
        <input name="datingPreference" placeholder="❤️ Dating Preference" className="input-field" onChange={handleInputChange} />
        <input name="agePreference" placeholder="📆 Age Preference" className="input-field" onChange={handleInputChange} />
        <input name="contact" placeholder="📞 Contact" className="input-field" onChange={handleInputChange} />
        <button className="submit-btn" onClick={handleSubmit}>💌 Send My Info!</button>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2 className="popup-title">💞 Thank You! 💞</h2>
            <p className="popup-text">We will get back to you soon! Stay cute! 💘</p>
            <button className="popup-btn" onClick={() => setShowPopup(false)}>Got it! 💕</button>
          </div>
        </div>
      )}
    </div>
  );
}
