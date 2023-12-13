// App.js
import React, { useState, useEffect } from 'react';
import PreferencesForm from './PreferencesForm';
import NewsFeed from './NewsFeed';
import axios from 'axios';
import Home from '../Home/home'
import Sidenavbar from '../header/sidebar'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Viewnews = () => {
  const [preferences, setPreferences] = useState({
    sources: '',
    category: '',
    author: '',
  });

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, [preferences]);

  const fetchNews = async () => {
    const { sources, category, author } = preferences;
    const apiKey = '82b58fc58a7c4f10bf88c0ffd9de04a2'; // Replace with your actual API key
  
    let apiUrl = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}`;
  
    if (sources) {
      apiUrl += `&sources=${sources}`;
    } else {
      // Set default values for category and country if sources is not provided
      const defaultCategory = 'general'; // You can change this to your preferred default category
      const defaultCountry = 'us'; // You can change this to your preferred default country
      apiUrl += `&category=${category || defaultCategory}&country=${defaultCountry}`;
    }
  
    try {
      const response = await axios.get(apiUrl);
      setNews(response.data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };
  

  // const fetchNews = async () => {
  //   const { sources, category, author } = preferences;
  //   const apiKey = '82b58fc58a7c4f10bf88c0ffd9de04a2'; // Replace with your actual API key
  
  //   // Set default values for parameters to avoid the "required parameters are missing" error
  //   const defaultSources = 'bbc-news'; // You can change this to your preferred default source
  //   const defaultCategory = 'general'; // You can change this to your preferred default category
  
  //   const apiUrl = `https://newsapi.org/v2/top-headlines?sources=${sources || defaultSources}&category=${category || defaultCategory}&author=${author}&apiKey=${apiKey}`;
  
  //   try {
  //     const response = await axios.get(apiUrl);
  //     setNews(response.data.articles);
  //   } catch (error) {
  //     console.error('Error fetching news:', error);
  //   }
  // };
  

  // const fetchNews = async () => {
  //   const { sources, category, author } = preferences;
  //   const apiKey = '82b58fc58a7c4f10bf88c0ffd9de04a2'; // Replace with your actual API key
  //   const apiUrl = `https://newsapi.org/v2/top-headlines?sources=${sources}&category=${category}&author=${author}&apiKey=${apiKey}`;

  //   try {
  //     const response = await axios.get(apiUrl);
  //     setNews(response.data.articles);
  //   } catch (error) {
  //     console.error('Error fetching news:', error);
  //   }
  // };

  const updatePreferences = (newPreferences) => {
    setPreferences(newPreferences);
  };

  return (
    <div>
      <Home/>
      <Sidenavbar/>
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={12}>
            <h1>Personalized News Feed</h1>
              <PreferencesForm preferences={preferences} updatePreferences={updatePreferences} />
              <NewsFeed news={news} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Viewnews;
