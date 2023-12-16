import React, { useState, useEffect } from 'react';
import "./Header.scss";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import ContentWrapper from "../content_wrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
      window.scrollTo(0,0)
    },[location])

    const controlNavbar = () => {
      if(window.scrollY > 200)
      {
        if(window.scrollY > lastScrollY && !mobileMenu)
        {
          setShow("hide")
        }
        else
        {
          setShow("show")
        }
      }
      else{
        setShow("top")
      }
      setLastScrollY(window.scrollY)
    }

    useEffect(()=>{
      window.addEventListener("scroll", controlNavbar)
      return ()=> {
        removeEventListener("scroll",controlNavbar)
      }
    },[lastScrollY])

    const openMobileMenu = () =>{
      setMobileMenu(true);
      setShowSearch(false);
    }

    const openSearch = () =>{
      setMobileMenu(false);
      setShowSearch(true);
    }

    const searchQueryHandler = (event) => {
      if (event.key === "Enter" && query.length > 0) {
          navigate(`/search/${query}`);
          setTimeout(()=>{
            setShowSearch(false);
          },1000)
      }
  };

    return (
        <header className={`header ${mobileMenu ? 'mobileView':''} ${show}`}>
          <ContentWrapper>
            <div className='logo'>
              <img src={logo} alt='' onClick={()=> navigate('/')}/>
            </div>
            <ul className='menu-items'>
              <li className='menu-item' onClick={()=> {navigate('/explore/movie')
                                                        setMobileMenu(false)}}>Movies</li>
              <li className='menu-item' onClick={()=> {navigate('/explore/tv')
                                                        setMobileMenu(false)}}>TV Shows</li>
              <li className='menu-item'><HiOutlineSearch onClick={()=>setShowSearch(true)}/></li>
            </ul>
            <div className='mobile-menu-items'>
              <HiOutlineSearch onClick={openSearch} />
              {mobileMenu ?( <VscChromeClose onClick={()=>setMobileMenu(false)} /> ):( <SlMenu onClick={openMobileMenu}/>)}
            </div>
          </ContentWrapper>
          {showSearch && (<div className='searchBar'>
            <ContentWrapper>
              <div className="searchInput">
                <input
                    type="text"
                    placeholder="Search for a movie or tv show...."
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyUp={searchQueryHandler}
                />
              </div>
              <VscChromeClose onClick={()=>setShowSearch(false)} />
            </ContentWrapper>
          </div>)}
          
        </header>
    );
};

export default Header;