import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "../layout/Layout";
import barbel from "../assets/babel-and-boys.png";
import bullet from "../assets/echoes_of_bullet.png";
import invisible from "../assets/echoes_of_the_invisible.png";

const booksData = [
  {
    id: 1,
    title: "Echoes of the Invisible",
    src: invisible,
  },
  {
    id: 2,
    title: "Echoes of Bullets",
    src: bullet,
  },
  {
    id: 3,
    title: "Babel and Boys",
    src: barbel,
  }
];

const Books = () => {
  return (
    <Layout>
      <Helmet>
            <title>Book of Ugwu Leonard,Jr</title>
            <meta
            name="description"
            content="Interesting books, great books"
            />
      </Helmet>
      <div className="relative px-4 md:px-12 mb-8">
        <p className="text-center text-3xl text-[#222] font-bold uppercase my-4 md:my-10">...</p>
        <div className="absolute top-0 left-0 right-0 uppercase text-center text-xl md:text-3xl bg-[#4c9e9e] text-white font-bold w-full p-2">All books</div>
        <div className="flex md:flex-row flex-col justify-center md:justify-between items-center gap-4">
          {booksData.map((book) => (
            <Link to={`/books/${book.id}`} key={book.id}>
                <div className="flex flex-col items-center shadow-lg p-6 gap-4 rounded-md cursor-pointer">
                    <img src={book.src} alt={book.title} className="h-[400px] w-[250px] md:w-[300px]" loading="lazy" />
                    <div className="flex flex-col items-center w-[250px] md:w-[300px] gap-4">
                        <p className="text-xl md:text-2xl font-bold text-[#222]">{book.title}</p>
                        <button className="text-xl font-semibold w-[150px] py-2 bg-[#4c9e9e] text-white border-[#4c9e9e] rounded-md">Read More</button>
                    </div>
                </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Books;
