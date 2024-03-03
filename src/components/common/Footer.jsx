import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import medium from "../../assets/medium.png"
import twitter from "../../assets/twitter.png"


const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center bg-black text-white p-8 w-full">
        <div className="flex gap-10">
          <a target="_blank" href='https://www.facebook.com/xcshertchgxdfas'>
            <img src={facebook} alt="" className="w-8 h-8" />
          </a>
          <a target="_blank" href='https://instagram.com/ugwuleonardelvis?igshid=bu7r0457z8ry'>
            <img src={instagram} alt="" className="w-8 h-8" />
          </a>
          <a target="_blank" href='https://twitter.com/UgwuJr1?t=w4fXGCbkmV0TMYo0hC-V9w&s=08'>
            <img src={twitter} className="w-8 h-8" />
          </a>
          <a target="_blank" href='https://medium.com/@leonardugwujr/'>
            <img src={medium} alt="" className="w-12 h-12" />
          </a>
        </div>
        <h4 className="text-xl font-medium">© 2023 Ugwu Leonard.Jr</h4>
    </footer>
  )
}

export default Footer
