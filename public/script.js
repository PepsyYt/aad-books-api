const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const bookList = document.getElementById('bookList');
const modalContainer = document.querySelector('.modal-container');
const bookCloseBtn = document.getElementById('bookCloseBtn');
const bookDetailsContent = document.querySelector('.book-details-content');

// Fetch books by title
const fetchBooks = async (title) => {
    try {
        const response = await fetch(`/api/books?title=${title}`);
        const data = await response.json();
        displayBooks(data.books);
    } catch (error) {
        console.error('Error fetching books:', error);
    }
};

// Display books in the list
const displayBooks = (books) => {
    bookList.innerHTML = '';
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
            <img src="${book.thumbnail}" alt="${book.title}">
            <h3>${book.title}</h3>
        `;
        bookItem.addEventListener('click', () => showBookDetails(book.id));
        bookList.appendChild(bookItem);
    });
};

// Show book details in the modal
const showBookDetails = async (id) => {
    try {
        const response = await fetch(`/api/book?id=${id}`);
        const data = await response.json();
        const book = data.book;
        bookDetailsContent.innerHTML = `
           
            <div class="book-img"><img src="${book.thumbnail}" alt="${book.title}"></div>
            <div class="book-title">${book.title}</div>
            <div class="book-author">${book.author}</div>
            <div class="book-description">
                <h3>Description</h3>
                <p>${book.description}</p>
            </div>
            <div class="book-download">
                <a href="${book.downloadLink}" target="_blank">Download PDF</a>
            </div>
        `;
        modalContainer.style.display = 'block';
    } catch (error) {
        console.error('Error fetching book details:', error);
    }
};

// Close modal
bookCloseBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none';
});

// Search button click event
searchButton.addEventListener('click', () => {
    const title = searchInput.value;
    fetchBooks(title);
});

// Fetch all books initially
fetchBooks('');
