const express = require('express');
const app = express();
const port = 3000;

// Sample data for books
const books = [
    {
        id: '1',
        title: 'Python Programming',
        author: 'Mitti Mai Milla Denge',
        description: `
            <b>1. Introduction to Python</b>
            <br>
            Overview of Python programming language, its history, and its uses.
            <br>
            ... (other details) ...
        `,
        thumbnail: 'https://example.com/path/to/thumbnail.png',
        downloadLink: 'https://drive.google.com/file/d/177RFn-UgKSKxKRR3r1lvNI2oIzvUDtb9/view?usp=drive_link'
    },
    {
        id: '2',
        title: 'Java Handwritten Notes',
        author: 'Mitti Mai Milla Denge',
        description: `
            Welcome to our ultimate guide on Java programming...
            <br>
            ... (other details) ...
        `,
        thumbnail: 'https://example.com/path/to/thumbnail.png',
        downloadLink: 'https://drive.google.com/file/d/1LW86NB6lZntA61i4fbMq3QYSpR_QF-vy/view?usp=drive_link'
    }
];

// Serve static files from the "public" directory
app.use(express.static('public'));

// Endpoint to get books by title
app.get('/api/books', (req, res) => {
    const title = req.query.title || '';
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    res.json({ books: filteredBooks });
});

// Endpoint to get a book by ID
app.get('/api/book', (req, res) => {
    const id = req.query.id;
    const book = books.find(book => book.id === id);
    if (book) {
        res.json({ book });
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
