// PreferencesForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PreferencesForm = ({ preferences, updatePreferences }) => {
  const [selectedPreferences, setSelectedPreferences] = useState(preferences);
  const [availableSources, setAvailableSources] = useState([]);
  const [availableAuthors, setAvailableAuthors] = useState([]);

  useEffect(() => {
    fetchSources();
    fetchAuthors();
  }, []);

  const fetchSources = async () => {
    const apiKey = '82b58fc58a7c4f10bf88c0ffd9de04a2'; // Replace with your actual API key
    const sourcesUrl = `https://newsapi.org/v2/sources?apiKey=${apiKey}`;

    try {
      const response = await axios.get(sourcesUrl);
      setAvailableSources(response.data.sources);
    } catch (error) {
      console.error('Error fetching sources:', error);
    }
  };


  const fetchAuthors = async () => {
    const apiKey = '82b58fc58a7c4f10bf88c0ffd9de04a2'; // Replace with your actual API key
    const authorsUrl = `https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}`;

    try {
      const response = await axios.get(authorsUrl);
      const uniqueAuthors = Array.from(new Set(response.data.articles.map((article) => article.author)));
      setAvailableAuthors(uniqueAuthors.filter((author) => author)); // Filter out null or undefined values
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };

  const handleInputChange = (type, value) => {
    setSelectedPreferences((prevPreferences) => ({
      ...prevPreferences,
      [type]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePreferences(selectedPreferences);
  };

  return (
    <form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>
          Select Preferred Sources:
          <select
            value={selectedPreferences.sources}
            onChange={(e) => handleInputChange('sources', e.target.value)}
          >
            <option value="">-- Select a source --</option>
            {availableSources.map((source) => (
              <option key={source.id} value={source.id}>
                {source.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="mb-3">
        <label>
          Select Preferred Category:
          <select
            value={selectedPreferences.category}
            onChange={(e) => handleInputChange('category', e.target.value)}
          >
            <option value="">-- Select a category --</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="general">General</option>
            {/* Add more categories as needed */}
          </select>
        </label>
      </div>
      <div className="mb-3">
        <label>
          Select Preferred Author:
            <select
            value={selectedPreferences.author}
            onChange={(e) => handleInputChange('author', e.target.value)}
          >
            <option value="">-- Select an author --</option>
            {availableAuthors.map((author) => (
              <option key={author} value={author}>
                {author}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button type="submit">Update Preferences</button>
    </form>
  );
};

export default PreferencesForm;
