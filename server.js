const express = require('express');
const app = express();
const port = 3000;

// Sample data for books
const books = [
    {
        id: '1',
        title: 'Python Handwritten Notes',
        author: 'Mitti Mai Milla Denge',
        description: `
            <b>1. Introduction of Python</b>
            <br>
            ➯An overview of Python, its history, and its applications. Introduction to its syntax and key features.
            <br>
            <b>2. Installation</b>
            <br>
            ➯Step-by-step guide on how to install Python on different operating systems. Setting up the development environment.
            <br>
            <b>3. Modules</b>
            <br>
            ➯Explanation of Python modules, how to import and use them. Introduction to standard library modules.
            <br>
            <b>4. Comment & Pip</b>
            <br>
            ➯How to write single-line and multi-line comments in Python. Introduction to pip, the Python package installer, and how to use it to manage packages.
            <br>
            <b>5. Variables in Python</b>
            <br>
            ➯Explanation of variables, how to declare and use them. Understanding variable scope and lifetime.
            <br>
            <b>6. Datatypes in Python</b>
            <br>
            ➯Overview of different data types in Python such as integers, floats, strings, and booleans. How to work with each datatype.
            <br>
            <b>7. Keyword in Python</b>
            <br>
            ➯List of reserved keywords in Python. Understanding their usage and significance.
            <br>
            <b>8. Operator in Python</b>
            <br>
            ➯Detailed explanation of different types of operators: arithmetic, comparison, logical, bitwise, assignment, and identity operators.
            <br>
            <b>9. List, Tuples, Set, Dictionary</b>
            <br>
            ➯Comprehensive guide on Python's core data structures. How to create, access, and manipulate lists, tuples, sets, and dictionaries.
            <br>
            <b>10. Type Conversion</b>
            <br>
            ➯How to convert between different data types using built-in functions. Understanding implicit and explicit type conversion.
            <br>
            <b>11. Flow Control</b>
            <br>
            ➯Overview of flow control statements such as if, else, elif. How to control the flow of a Python program based on conditions.
            <br>
            <b>12. Loops</b>
            <br>
            ➯Detailed explanation of loop constructs in Python, including for and while loops. How to use break and continue statements.
            <br>
            <b>13. Strings</b>
            <br>
            ➯Working with strings in Python. String methods, formatting, and operations.
            <br>
            <b>14. Functions</b>
            <br>
            ➯Understanding functions, how to define and call them. Explanation of function arguments, return values, and scope.
            <br>
            These topics provide a comprehensive foundation for anyone looking to learn Python programming. Each section builds on the previous ones, ensuring a solid understanding of Python basics and beyond.
        `,
        thumbnail: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZnFjfj128t-5OaY-qx3MXsGGMZtT9nUAYywgT8Q-atXpIJ8EOvZlfT6j8EmwaydYELXRTDp4vUOp9JsBlLSTURKvB4FDrq03WenqBHcBQG-MPD7zl_jZaWgJryHZe0KwVnin8UK8C2j-2IUHK8zzc42R8l2y4Zwu8Nl5hhc1ICcxb9tVz6A7KdCN8yZM/s320/Black%20and%20Green%20Modern%20Company%20Book%20Cover.png',
        downloadLink: 'https://drive.google.com/file/d/177RFn-UgKSKxKRR3r1lvNI2oIzvUDtb9/view?usp=drive_link'
    },
    {
        id: '2',
        title: 'Java Handwritten Notes',
        author: 'Mitti Mai Milla Denge',
        description: `
            Welcome to our ultimate guide on Java programming, designed to take you from the basics to advanced concepts with ease. This e-book is meticulously crafted to provide a thorough understanding of Java, catering to both beginners and experienced programmers. Here’s what you can expect to learn:
            <b>1. Java & Its History:</b>
            <br>
            ➯Delve into the origins of Java, understanding its evolution and the principles that make it a powerful and versatile programming language.
            <br>
            <b>2. Variables & Data Types:</b>
            <br>
            ➯Learn about the various data types in Java and how to declare and use variables efficiently.
            <br>
            <b>3. Declaring Variables:</b>
            <br>
            ➯Master the syntax and best practices for declaring variables in your Java programs.
            <br>
            <b>4. Comments:</b>
            <br>
            ➯Understand the importance of comments and how to use them to make your code more readable and maintainable.
            <br>
            <b>5. Operators & Expressions:</b>
            <br>
            ➯Explore the different operators in Java and how to construct expressions for performing calculations and operations.
            <br>
            <b>6. Strings:</b>
            <br>
            ➯Get to know the String class and how to work with text in Java.
            <br>
            <b>7. Useful String Methods:</b>
            <br>
            ➯Discover the essential methods provided by the String class to manipulate and manage strings effectively.
            <br>
            <b>8. Conditionals in Java:</b>
            <br>
            ➯Learn about conditional statements and how to control the flow of your program using if-else and switch-case constructs.
            <br>
            <b>9. Loop Control Instructions:</b>
            <br>
            ➯Master loop constructs like for, while, and do-while loops to execute code repeatedly based on conditions.
            <br>
            <b>10. Arrays:</b>
            <br>
            ➯Understand arrays, their declaration, initialization, and how to use them to store multiple values.
            <br>
            <b>11. The Array Class:</b>
            <br>
            ➯Dive deeper into the Array class and its methods for handling array operations.
            <br>
            <b>12. Multi-dimensional Arrays:</b>
            <br>
            ➯Explore multi-dimensional arrays for handling complex data structures.
            <br>
            <b>13. Methods in Java:</b>
            <br>
            ➯Learn about methods, their declaration, and how to create reusable blocks of code.
            <br>
            <b>14. Introduction to OOP:</b>
            <br>
            ➯Get introduced to Object-Oriented Programming (OOP) concepts and how they form the backbone of Java.
            <br>
            <b>15. Access Modifiers:</b>
            <br>
            ➯Control visibility and accessibility of classes, methods, and variables.
            <br>
            <b>16. Constructors:</b>
            <br>
            ➯Initialize objects when they are created.
            <br>
            <b>17. Inheritance:</b>
            <br>
            ➯Create new classes based on existing ones.
            <br>
            <b>18. Abstract Classes & Interfaces:</b>
            <br>
            ➯Define abstract concepts and support multiple inheritances.
            <br>
            <b>19. Polymorphism:</b>
            <br>
            ➯Use one interface for multiple actions.
            <br>
            <b>20. Packages:</b>
            <br>
            ➯Organize Java classes and interfaces for better management.
            <br>
            <b>21. Multithreading:</b>
            <br>
            ➯Perform multiple tasks simultaneously in applications.
            <br>
            <b>22. Errors & Exceptions:</b>
            <br>
            ➯Handle runtime errors to enhance program robustness.
        `,
        thumbnail: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5XB6RnZUzgi-MNRmQvmH3ie0z3RLRr6-6lA6sbt74kHv9_t4_LWHJrEjvRKn3Gaa4JtrbO0vflobc2SuBm6nr2qcoO-d1vL9Mn8UwS0ZXlHDrj4R0uipgpOPQqJxaMXVqBZ0u1pHUyLy6Yt3htAVAOU28HQkvzIC-SnHkQzs4SnD4l86YSw8-JzY3Ubk/w201-h320/Dark%20Photo%20Horror%20Mystery%20Book%20Cover.jpg',
        downloadLink: 'https://drive.google.com/file/d/1LW86NB6lZntA61i4fbMq3QYSpR_QF-vy/view?usp=drive_link'
    }
    // Add more book objects here...
];

// Serve static files from the "public" directory
app.use(express.static('public'));

// Endpoint to get books by title
app.get('/api/books', (req, res) => {
    const title = req.query.title;
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    res.json({ books: filteredBooks });
});

// Endpoint to get book details by ID
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
