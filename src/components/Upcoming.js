import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Badge, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Upcoming() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/movie/upcoming', {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGYxNWRjNzY1Y2NkZWE4ZDg4NWUwYTJjNmMzZmJmNyIsInN1YiI6IjY1MDJjYTlkZWZlYTdhMDBmZDFjOGU3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qJCZPhVnxCU6k4jQwK3egtp2kdo50sydV-ZhqsvB9IM'
          },
      })
      .then((response) => {
        setPopularMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <Container className="mt-4">
      <h2>Upcoming Movies</h2>
      <Row>
        {popularMovies.map((movie) => (
          <Col key={movie.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text className="flex-grow-1">
                  {`${movie.overview.substring(0, 150)}...`}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <Badge variant="primary">{movie.vote_average}</Badge>
                  <Link to={`/movie/${movie.id}`} className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Upcoming;
