import "./navbar.css"
import logo from "../../../assets/logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='nav_bar'>
      {/* <!-- LOGO --> */}
      <Link to='/' className='logo'>
        <div className='logos'>
          <div>
            <img alt='logo' src={logo} className='logo' />
          </div>
          <div className='logo_texts'>
            <div className='logo_text'>Ugwu Leonard, jr</div>
            <div className='logo_subtext'>Author</div>
          </div>
        </div>
      </Link>
      {/* <!-- NAVIGATION MENU --> */}
      <ul className='nav_links'>
        {/* <!-- USING CHECKBOX HACK --> */}
        <input type='checkbox' id='checkbox_toggle' />
        <label htmlFor='checkbox_toggle' className='hamburger'>
          &#9776;
        </label>
        {/* <!-- NAVIGATION MENUS --> */}
        <div className='menu'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/books'>Books</Link>
          </li>
          <li className='services'>
            <p>Writing</p>
            {/* <!-- DROPDOWN MENU --> */}
            <ul className='dropdown'>
              <li>
                <Link to='/'>Essay/Article</Link>
              </li>
              <li>
                <Link to='/'>Short Stories</Link>
              </li>
              <li>
                <Link to='/'>Poems</Link>
              </li>
              <li>
                <Link to='/'>Mini Play</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='/'>Events</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
