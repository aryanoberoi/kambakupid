import React, { useState } from "react";
import axios from "axios";
import { Heart } from "lucide-react";
import "./matchmaking.css"; // Import the cute CSS file 💕

const FORMSPREE_URL = "https://formspree.io/f/mwpvqwpr"; // Replace with your Formspree form URL

export default function Matchmaking() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    pronouns: "",
    datingPreference: "",
    agePreference: "",
    contact: "",
    favoriteMusicGenre: "",
    favoriteFood: "",
    friendsCharacter: "",
    friendGroupRole: "",
    favoriteCollegeSpot: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post(FORMSPREE_URL, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setShowPopup(true);
    } catch (error) {
      console.error("Error submitting form:", error);
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

        {/* New Questions */}
        <div className="question">
          <label>1. What is your favorite music genre?</label>
          <select name="favoriteMusicGenre" className="input-field" onChange={handleInputChange}>
            <option value="">Select an option</option>
            <option value="pop">Pop</option>
            <option value="hip-hop">Hip Hop</option>
            <option value="r&b">R&B</option>
            <option value="old-bollywood">Old Bollywood</option>
          </select>
        </div>

        <div className="question">
          <label>2. Pick a food:</label>
          <select name="favoriteFood" className="input-field" onChange={handleInputChange}>
            <option value="">Select an option</option>
            <option value="ice-cream">Ice Cream</option>
            <option value="pizza">Pizza</option>
            <option value="biryani">Biryani</option>
            <option value="sushi">Sushi</option>
          </select>
        </div>

        <div className="question">
          <label>3. Which Friends character do you relate most with?</label>
          <select name="friendsCharacter" className="input-field" onChange={handleInputChange}>
            <option value="">Select an option</option>
            <option value="joey">Joey</option>
            <option value="pheobe">Pheobe</option>
            <option value="rachel">Rachel</option>
            <option value="chandler">Chandler</option>
            <option value="monica">Monica</option>
            <option value="ross">Ross</option>
          </select>
        </div>

        <div className="question">
          <label>4. Pick your role in a friend group:</label>
          <select name="friendGroupRole" className="input-field" onChange={handleInputChange}>
            <option value="">Select an option</option>
            <option value="the-parent">The Parent</option>
            <option value="the-wild-child">The Wild Child</option>
            <option value="the-introvert">The Introvert</option>
            <option value="the-hopeless-romantic">The Hopeless Romantic</option>
          </select>
        </div>

        <div className="question">
          <label>5. What is your favorite college spot?</label>
          <select name="favoriteCollegeSpot" className="input-field" onChange={handleInputChange}>
            <option value="">Select an option</option>
            <option value="tea-series-cafe">Tea Series Cafe (Chai Sutta)</option>
            <option value="coe-steps">COE Steps</option>
            <option value="stadium">Stadium</option>
            <option value="the-cafeteria">The Cafeteria</option>
          </select>
        </div>

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