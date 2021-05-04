import React from "react";

import "./BookList.css";

const books = [
  {
    id: 0,
    title: "Harry Potter and the Philosphers Stoner",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51PmRlJ8mjL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    author: "J.K.Rowling",
    description:
      "HARRY POTTER doesn't know the first thing about Hogwarts when the LETTERS start dropping onto the doormat at number four, Privet Drive. The letters, written in GREEN ink on YELLOW parchment with a PURPLE seal, are taken off him by his AWFUL aunt and GRUMPY uncle. Then, on Harry's eleventh birthday, a great GIANT with curly hair called RUBEUS HAGRID barges into his life with some ASTOUNDING news: Harry Potter is a wizard, and he has a place at HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY. ",
  },
  {
    id: 1,
    title: "The Wings of a Falcon",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51PMKZTXFRL._SX298_BO1,204,203,200_.jpg",
    author: "Cynthia Voigt",
    description:
      "Oriel, a strong and remarkable young boy taken into captivity as an infant by a cruel man, decides to escape from his life of hardship and betrayal and takes Griff, his loyal companion, with him. Reprint.",
  },
  {
    id: 2,
    title: "Jackaroo",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51G5Z1DY4VL._SX281_BO1,204,203,200_.jpg",
    author: "Cynthia Voigt",
    description:
      "Gwyn, a young woman, uncovers the myth of a legendary outlaw, Jackaroo, and becomes inspired to take on persona of her sword-wielding and cape-clad hero. By the Newbery Award-winning author of Dicey's Song. Reissue.",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { image, author, title, description } = props;
  return (
    <article className="book">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
      <h4>{author}</h4>
    </article>
  );
};

export default BookList;
