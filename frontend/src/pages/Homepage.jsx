import { VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Books from "../components/Books";
import { getAllBooks } from "../modules/fetch";
import { prisma } from "../utils/prisma";

// server side props ( fetch in server)

export async function getServerSideProps() {
  try {
    const books = await prisma.book.findMany({
     orderBy: {
    title: "asc",
     },
    });
  return {
    props: {
      books:booksJson.books
    },
  }
} catch (err){
  console.log(err);
  return resizeBy.status(400).json({message: "something went wrong"});
}
}


export default function Homepage() {
  const [books, setBooks] = useState([]);
  // useEffect(() => {
  //   const fetchBooks = async () => {
  //     const books = await getAllBooks();
  //     setBooks(books);
  //   };
  //   fetchBooks();
  // }, []);

  return (
    <VStack w="100vw">
      {books?.books?.map((book) => (
        <Books key={`${book.id} ${book.title}`} {...book} />
      ))}
    </VStack>
  );
}
