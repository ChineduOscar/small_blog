import { Link } from "react-router-dom";
import barbel from "../../assets/babel-and-boys.png";
import bullet from "../../assets/echoes_of_bullet.png";
import invisible from "../../assets/echoes_of_the_invisible.png";

const booksData = [
  {
    id: 1,
    title: "Echoes of the Invisible",
    src: invisible,
    overview: "In the dark room of life we hear important echo messages coming from an unknown source, so difficult to decipher, echoes of the invisible, a poetry collection of solutions, light and revelations. In the book, the poet stretched his hands wide in discussing virtually all angles of human life, emotional, social, moral, and economical aspects of life. Echoes of the invisible; the writer used himself as a point of contact to people out there. It is magical in the sense that whoever picks this book must find a poem that resolves, discusses, consoles and confirms his current situation. He calls it the healing poem or the poems of revival. The wordings in a way tried to reconcile the vices in the society; it is a book for all, as it is more than just a poetic work of art."
  },
  {
    id: 2,
    title: "Echoes of Bullets",
    src: bullet,
    overview: "Echoes of Bullets is a poetry collection that range from the causes of war; to war and the aftermaths of war. Coming when the country combats terrible challenges, this collection echoes the voice of the new generation who did not face the horrible experience of the past civil war. Through this book, this new generation is placed at the middle of war and dispassionately pictured through a pair of lenses: the “good” and “bad” of war."
  },
  {
    id: 3,
    title: "Babel and Boys",
    src: barbel,
    overview: "Tunde and Babel are best of friends, yet Tunde assassinates Babel’s father in his presence and fakes disappearance out of the country. Years later, he finds himself in Lagos overwhelmed by love and self-discovery. Why did Tunde commit such an atrocity? How long will it take karma to strike? A tale full of modern motifs of love, reunion, revenge, betrayal, disappointment, uncertainty, self-discovery, shame and many more. Babel and Boys is a reflection of the African society. One for teens; one for youths; one for family; and one for all."
  }
];

const BooksAd = () => {
  const truncate = (input) => {
    if (input?.length > 100) {
      return input?.substring(0, 100) + '...';
    }
    return input;
  };

  return (
    <div className="relative px-12">
      <p className="text-center text-3xl text-[#222] font-bold uppercase my-4 md:my-10">...</p>
      <div className="absolute top-0 left-0 right-0 uppercase text-center text-xl md:text-3xl bg-[#4c9e9e] text-white font-bold w-full p-2">Books by Ugwu Leonard,Jr</div>
      <div className="flex md:flex-row flex-col justify-center md:justify-between items-center gap-4">
        {booksData.map((book) => (
          <Link to={`/books/${book.id}`} key={book.id}>
            <div key={book.id} className="flex flex-col items-center shadow-lg p-4 gap-4 rounded-md cursor-pointer">
              <img src={book.src} alt={book.title} className="h-[400px] w-[250px] md:w-[300px]" />
              <div className="flex flex-col items-center w-[250px] md:w-[300px] gap-4">
                <p className="text-xl md:text-2xl font-bold text-[#222]">{book.title}</p>
                <p className="text-[16px] md:text-xl font-medium text-[#222] text-center">{truncate(book.overview)}</p>
                <button className="text-xl font-semibold w-[150px] py-2 bg-[#4c9e9e] text-white border-[#4c9e9e] rounded-md">Read More</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BooksAd;
