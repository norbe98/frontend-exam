import { useState, useEffect } from 'react';
import { Accordion, Container, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    async function load() {
      try {
        const response = await fetch("/api/books");
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Cannot fetch", error);
      }
    }
    load();
  }, []);

  const filteredBooks = books.filter(book => {
    if (filter === 'BC') return book.releaseYear <= 0;
    if (filter === 'AC') return book.releaseYear > 0;
    return true;
  });

  return (
    <Container className="py-4">
      <h1>Books</h1>

      <div className="my-4">
        {['BC', 'AC', 'All'].map((option) => (
          <Form.Check
            inline
            key={option}
            type="radio"
            label={option}
            name="filterRadio"
            id={`radio-${option}`}
            checked={filter === option}
            onChange={() => setFilter(option)}
          />
        ))}
      </div>

      <Accordion>
        {filteredBooks.map((book) => (
          <Accordion.Item eventKey={book.id} key={book.id}>
            <Accordion.Header>{book.title}</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Author: {book.author}</li>
                <li>Pages: {book.pages}</li>
                <li>Release Year: {book.releaseYear}</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}
