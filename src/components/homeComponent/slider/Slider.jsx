import { Link } from "react-router-dom"
import bg from "../../../assets/landing_bg.jpg"
import barbel from "../../../assets/babel-and-boys.png"
import bullet from "../../../assets/echoes_of_bullet.png"
import invisible from "../../../assets/echoes_of_the_invisible.png"
// importing swiper kits
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 10000 }} 
      >
      <SwiperSlide>
        <div className="relative w-full h-[80vh] lg:h-[100vh] bg-[#222]">
          <img src={bg} alt="" className="w-full h-full object-cover opacity-10 md:opacity-40"/>
          <div className="absolute top-0 left-0 bottom-0 right-0 flex flex-col md:flex-row justify-center gap-4 lg:justify-around items-center">

            <img src={invisible} alt="" className="w-[200px] md:w-[250px] h-[250px] md:h-[70vh] shadow-lg"/>
            <div>
              <div className="mx-4 md:mx-0 md:w-[300px] lg:w-[500px] grid items-center gap-4 md:gap-10 lg:gap-24">
                <div className="px-4 py-6 bg-gray-500 bg-opacity-50 shadow-md rounded-md">
                  <p className="text-xl md:text-2xl font-bold text-white uppercase mb-4 text-center">Echoes of the Invisible</p>
                  <p className="text-sm md:text-xl text-white">In the dark room of life we hear important echo messages coming from an unknown source, so difficult to decipher, echoes of the invisible...</p>
                </div>
                <div className="flex gap-4 md:gap-8 items-center justify-center">
                  <Link to='/books/1'>
                    <button className="text-xl font-semibold w-[150px] py-2 bg-[#4c9e9e] text-white border-[#4c9e9e] transition-all duration-300 rounded-md">Read More</button>
                  </Link>
                  <button className="text-xl font-semibold w-[150px] py-2 bg-white text-[#222] border-white transition-all duration-300 rounded-md">
                    <a target="_blank" href="https://www.amazon.in/Echoes-Bullets-Leonard-Ugwu-ebook/dp/B09V329BCG">Buy</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-[80vh] lg:h-[100vh] bg-[#222]">
          <img src={bg} alt="" className="w-full h-full object-cover opacity-10 md:opacity-40" />
          <div className="absolute top-0 left-0 bottom-0 right-0 flex flex-col md:flex-row justify-center gap-4 lg:justify-around items-center">

            <img src={bullet} alt="" className="w-[200px] md:w-[250px] h-[250px] md:h-[70vh] shadow-lg"/>
            <div>
              <div className="mx-4 md:mx-0 md:w-[300px] lg:w-[500px] grid items-center gap-4 md:gap-10 lg:gap-24">
                <div className="px-4 py-6 bg-gray-500 bg-opacity-50 shadow-md rounded-md">
                  <p className="text-xl md:text-2xl font-bold text-white uppercase mb-4 text-center">Echoes of Bullets</p>
                  <p className="text-sm md:text-xl text-white">Echoes of Bullets is a poetry collection that range from the causes of war; to war and the aftermaths of war...</p>
                </div>
                <div className="flex gap-4 md:gap-8 items-center justify-center">
                  <Link to='/books/2'>
                    <button className="text-xl font-semibold w-[150px] py-2 bg-[#4c9e9e] text-white border-[#4c9e9e] transition-all duration-300 rounded-md">Read More</button>
                  </Link>
                  <button className="text-xl font-semibold w-[150px] py-2 bg-white text-[#222] border-white transition-all duration-300 rounded-md">
                    <a target="_blank" href="https://www.amazon.in/Echoes-Bullets-Leonard-Ugwu-ebook/dp/B09V329BCG">Buy</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-[80vh] lg:h-[100vh] bg-[#222]">
          <img src={bg} alt="" className="w-full h-full object-cover opacity-10 md:opacity-50"/>
          <div className="absolute top-0 left-0 bottom-0 right-0 flex flex-col md:flex-row justify-center gap-4 lg:justify-around items-center">

            <img src={barbel} alt="" className="w-[220px] md:w-[250px] h-[250px] md:h-[70vh] shadow-lg"/>
            <div>
              <div className="mx-4 md:mx-0 md:w-[300px] lg:w-[500px] grid items-center gap-4 md:gap-10 lg:gap-24">
                <div className="px-4 py-6 bg-gray-500 bg-opacity-50 shadow-md rounded-md">
                  <p className="text-xl md:text-2xl font-bold text-white uppercase mb-4 text-center">Babel and Boys</p>
                  <p className="text-sm md:text-xl text-white">Tunde and Babel are best of friends, yet Tunde assassinates Babel’s father in his presence and fakes disappearance out of the country...</p>
                </div>
                <div className="flex gap-4 md:gap-8 items-center justify-center">
                  <Link to='/books/3'>
                    <button className="text-xl font-semibold w-[150px] py-2 bg-[#4c9e9e] text-white border-[#4c9e9e] transition-all duration-300 rounded-md">Read More</button>
                  </Link>
                  <button className="text-xl font-semibold w-[150px] py-2 bg-white text-[#222] border-white transition-all duration-300 rounded-md">
                    <a target="_blank" href= "https://www.amazon.com/BABEL-BOYS-Leonard-Ugwu-ebook/dp/B0BW838W1T/ref=mp_s_a_1_1?keywords=babel+and+boys+by+leonard+ugwu&qid=1678439196&sr=8-1">Buy</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
