// App.js
import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import ArticleList from './ArticleList';
import axios from 'axios';
import Home from '../Home/home'
import Sidenavbar from '../header/sidebar'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Viewarticles = () => {
  const [searchParams, setSearchParams] = useState({
    keyword: '',
    startDate: '',
    endDate: '',
    category: '',
    source: '',
  });

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, [searchParams]);

  const fetchArticles = async () => {
    const { keyword, startDate, endDate, category, source } = searchParams;
    const apiKey = 'a1pXIMPK3dSeyPCV7LPqwwEkHUnu5Vts'; // Replace with your actual API key
    const apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&begin_date=${startDate}&end_date=${endDate}&fq=news_desk:("${category}")&source:("${source}")&api-key=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);
      setArticles(response.data.response.docs);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const updateSearchParams = (newSearchParams) => {
    setSearchParams(newSearchParams);
  };

  return (
    <div>
        <Home/>
        <Sidenavbar/>
        <Container>
            <Row className="justify-content-md-center">
                <Col lg={12}>
                    <h1>Article Search and Filtering</h1>
                    <SearchForm searchParams={searchParams} updateSearchParams={updateSearchParams} />
                    <ArticleList articles={articles} />
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default Viewarticles;
