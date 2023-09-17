import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./MovieDetails.css"

function MovieDetails() {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
      axios
        .get(`https://api.themoviedb.org/3/movie/${id}`, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGYxNWRjNzY1Y2NkZWE4ZDg4NWUwYTJjNmMzZmJmNyIsInN1YiI6IjY1MDJjYTlkZWZlYTdhMDBmZDFjOGU3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qJCZPhVnxCU6k4jQwK3egtp2kdo50sydV-ZhqsvB9IM'
              },
        })
        .then((response) => {
          setMovieDetails(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, [id]);
  
    if (!movieDetails) {
      return <div>Loading...</div>;
    }
  
  return (
    <Container className="movie-details-container">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
          </Card>
        </Col>
        <Col md={8}>
          <h1 className="movie-title">{movieDetails.title}</h1>
          <p className="text-muted">
            Release Date: {movieDetails.release_date}
          </p>
          <div className="mb-3">
            {movieDetails.genres.map((genre) => (
              <Badge key={genre.id} variant="secondary" className="mr-2">
                {genre.name}
              </Badge>
            ))}
          </div>
          <p className="movie-overview">{movieDetails.overview}</p>
          <div className="movie-details-grid">
            <div className="movie-detail-item">
              <strong>Language:</strong> {movieDetails.original_language.toUpperCase()}
            </div>
            <div className="movie-detail-item">
              <strong>Popularity:</strong> {movieDetails.popularity}
            </div>
            <div className="movie-detail-item">
              <strong>Vote Average:</strong> {movieDetails.vote_average}
            </div>
            <div className="movie-detail-item">
              <strong>Vote Count:</strong> {movieDetails.vote_count}
            </div>
            <div className="movie-detail-item">
              <strong>Origin Country:</strong> {movieDetails.production_countries[0]?.name}
            </div>
            <div className="movie-detail-item">
              <strong>Budget:</strong> ${movieDetails.budget.toLocaleString()}
            </div>
            <div className="movie-detail-item">
              <strong>Revenue:</strong> ${movieDetails.revenue.toLocaleString()}
            </div>
          </div>
          <Button
            variant="primary"
            href={movieDetails.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3"
          >
            Visit Homepage
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetails;
