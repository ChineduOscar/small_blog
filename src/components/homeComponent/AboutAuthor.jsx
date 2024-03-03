import { Link } from "react-router-dom"
import author from "../../assets/bio.jpg"

const AboutAuthor = () => {
  return (
    <div className="relative mt-12 bg-[#525151] text-white px-6 md:px-12 pb-6">
        <p className="text-center text-3xl text-[#222] font-bold uppercase my-12">...</p>
        <div className="absolute top-2 left-0 right-0 uppercase text-center text-xl md:text-3xl bg-white text-[#4c9e9e] font-bold w-full p-2">About author</div>
        <p className="font-bold text-2xl md:text-3xl my-10 uppercase">Ugwu Leonard,Jr</p>
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-10 items-center">
            <img src={author} alt="" className="w-[500px] h-[300px] md:h-[500px] rounded-xl" loading="lazy" />
            <div className="flex flex-col gap-4 md:gap-6">
                <p className="font-semibold text-[16px] md:text-xl leading-6 md:leading-8 text-justify">
                    It all became a flickering light when Leonard Jr. won the best poet
                    of the year twice in 2012 and 2013 from the Caritas University
                    Literary and Arts Association (CAULAA). During his first Degree in
                    Caritas University Enugu, his name echoed all over the Institution
                    because of his poetry renditions in notable events and festivals
                    hosted around the school, they gave him a name &rsquo;Leonard is
                    Back&rsquo;...
                </p>
                <div className="flex gap-4 md:gap-8 items-center justify-center">
                  <Link to="/about">
                    <button className="text-xl font-semibold px-4 py-2 bg-[#4c9e9e] text-white border-[#4c9e9e] rounded-md">Read More</button>
                  </Link>
                  <Link to="/books">
                    <button className="text-xl font-semibold px-4 py-2 bg-white text-[#222] border-white rounded-md">All Books</button>
                  </ Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutAuthor
