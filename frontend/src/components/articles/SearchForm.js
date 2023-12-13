import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchForm = ({ searchParams, updateSearchParams }) => {
  const [inputParams, setInputParams] = useState(searchParams);
  const [availableKeywords, setAvailableKeywords] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [availableSources, setAvailableSources] = useState([]);

  useEffect(() => {
    fetchAvailableOptions();
  }, []);

  const fetchAvailableOptions = async () => {
    const apiKey = 'a1pXIMPK3dSeyPCV7LPqwwEkHUnu5Vts'; // Replace with your actual API key

    // Fetch available keywords
    const keywordsUrl = `https://api.nytimes.com/svc/suggest/v1/timestags?q=politics&api-key=${apiKey}`;
    try {
      const keywordsResponse = await axios.get(keywordsUrl);
      setAvailableKeywords(keywordsResponse.data.terms);
    } catch (error) {
      console.error('Error fetching keywords:', error);
    }

    // Fetch available categories
    const categoriesUrl = `https://api.nytimes.com/svc/timeswire/v3/contentsectionList.json?api-key=${apiKey}`;
    try {
      const categoriesResponse = await axios.get(categoriesUrl);
      setAvailableCategories(categoriesResponse.data.results);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }

    // Fetch available sources
    const sourcesUrl = `https://api.nytimes.com/svc/news/v3/content/all/sources?api-key=${apiKey}`;
    try {
      const sourcesResponse = await axios.get(sourcesUrl);
      setAvailableSources(sourcesResponse.data.results);
    } catch (error) {
      console.error('Error fetching sources:', error);
    }
  };

  const handleInputChange = (type, value) => {
    setInputParams((prevParams) => ({
      ...prevParams,
      [type]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSearchParams(inputParams);
  };
  return (
    <form onSubmit={handleSubmit}>
        <label>
            Select Keyword:
            <select
            value={inputParams.keyword}
            onChange={(e) => handleInputChange('keyword', e.target.value)}
            >
            <option value="">-- Select a keyword --</option>
            {availableKeywords.map((keyword) => (
                <option key={keyword} value={keyword}>
                {keyword}
                </option>
            ))}
            </select>
        </label>
        <label>
            Start Date:
            <input
            type="date"
            value={inputParams.startDate}
            onChange={(e) => handleInputChange('startDate', e.target.value)}
            />
        </label>
        <label>
            End Date:
            <input
            type="date"
            value={inputParams.endDate}
            onChange={(e) => handleInputChange('endDate', e.target.value)}
            />
        </label>
        <label>
            Select Category:
            <select
            value={inputParams.category}
            onChange={(e) => handleInputChange('category', e.target.value)}
            >
            <option value="">-- Select a category --</option>
            {availableCategories.map((category) => (
                <option key={category.section} value={category.section}>
                {category.section}
                </option>
            ))}
            </select>
        </label>
        <label>
            Select Source:
            <select
            value={inputParams.source}
            onChange={(e) => handleInputChange('source', e.target.value)}
            >
            <option value="">-- Select a source --</option>
            {availableSources.map((source) => (
                <option key={source.source_id} value={source.source_id}>
                {source.source_name}
                </option>
            ))}
            </select>
        </label>
        <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
