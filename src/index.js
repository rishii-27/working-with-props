import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
    {
        id: 1,
        title: "Ikigai",
        author: "Héctor García",
        img: "https://images-eu.ssl-images-amazon.com/images/I/814L+vq01mL._AC_UL600_SR600,400_.jpg"
    },
    {
        id: 2,
        title: "Indian Polity",
        author: "M. Lakshmikant",
        img: "https://images-eu.ssl-images-amazon.com/images/I/71ePXM6nOdL._AC_UL600_SR600,400_.jpg"
    },
    {
        id: 3,
        title: "Life's Amazing Secrets",
        author: "Gaur Gopal Das",
        img: "https://images-eu.ssl-images-amazon.com/images/I/81N7FmJhbhL._AC_UL600_SR600,400_.jpg"
    }
]


function BookList() {
    return (
        <section className="bookList">
            {books.map((book) => {
                const { id } = book;
                return <Book key={id} book={book} /> //(...book)
            })
            }
        </section>
    );
}

const Book = (props) => {

    const handleClick = (e) => {
        console.log(e);
        // console.log(e.target);
        alert('You clicked a botton')
    }

    const complexExample = (author, title) => {
        alert(author)
        alert(title)
    }
    const { title, author, img } = props.book

    return <article className="book" onMouseOver={() => console.log(author)}>
        <img src={img} alt="" />
        <h1 onClick={() => console.log(title)}>{title}</h1>
        <h3>{author}</h3>
        <button type="button" onClick={handleClick} className="clickme">Click Me!</button><br />
        <button type="button" onClick={() => complexExample(author, title)} className="giveAuthorName">Give Author Name</button>
    </article>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
