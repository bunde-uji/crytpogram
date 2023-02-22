import { Link } from "react-router-dom";
import React, { useRef, useContext, useState, useEffect } from "react";
import coinIcon from "../assets/coin-brown-small.png";
import { AppContext } from "../App";
import SearchWidget from "./SearchWidget";
import { FaStar } from "react-icons/fa";


function Navbar() {
  // function handleSearch(e) {
  //     e.preventDefault();
  // }

  const searchRef = useRef();
  const searchRefMobile = useRef();
  const { dark, setDark, coins } = useContext(AppContext);
  let searchedCoin = undefined;
  const [searchResults, setSearchResults] = useState([]);
  const [searchShow, setSearchShow] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  function handleSearch() {
    searchedCoin = searchRef.current.value.trim() || searchRefMobile.current.value.trim();
    setSearchResults(
      searchedCoin
        ? coins.filter(
            (c) =>
              c.name.toLowerCase().includes(searchedCoin.toLowerCase()) ||
              c.symbol.toLowerCase().includes(searchedCoin.toLowerCase())
          )
        : []
    );
    setSearchShow(true);
    console.log(searchResults)
  }

  function handleNoFocus() {
    searchRef.current.value = "";
    searchRefMobile.current.value = "";
    searchedCoin = undefined;
    // setSearchResults(searchedCoin ? coins.filter(c =>
    //     c.name.toLowerCase().includes(searchedCoin.toLowerCase()) || c.symbol.toLowerCase().includes(searchedCoin.toLowerCase())): [])
  }

  useEffect(() => {
    document.addEventListener("mouseup", (e) => {
      if (!searchRef.current?.contains(e.target)) {
        setSearchShow(false);
      }
    });
  });

  

  return (
    <nav
      className={`flex flex-col sm:flex-row justify-between items-center px-3 py-4 text-grey-800 border-b ${
        dark ? "border-b-gray-500" : "border-b-gray-200"
      } ${dark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} min-h-[12vh] relative`}
    >
      <div className="flex justify-between items-center w-full">
      <Link className='flex sm:hidden' to='/watchlist'>
        <FaStar className="text-2xl" color="gold"/>
      </Link>

      <Link to="/">
        <h3
          className={`text-2xl font-bold ${
            dark ? "text-[#F5CE85]" : "text-[#987C46]"
          }`}
        >
          Crypt
          <img src={coinIcon} className="inline m-0 h-6" alt="" />
          gram
        </h3>
      </Link>

      <button className="sm:hidden">
        <i
          className={`fa-solid fa-${
            dark ? "sun" : "moon"
          } text-xl cursor-pointer text-gray-70`}
          onClick={() => setDark(!dark)}
        ></i>
      </button>

      <div className="hidden sm:flex justify-between items-center min-w-[35%]">
        <i
          className={`fa-solid fa-${
            dark ? "sun" : "moon"
          } text-xl cursor-pointer text-gray-70`}
          onClick={() => setDark(!dark)}
        ></i>

        <div className="w-[15rem] relative flex flex-col items-center">
          <form className="border border-gray-300 w-full rounded-md overflow-hidden py-1 mx-5" onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              placeholder="Search"
              ref={searchRef}
              className="outline-none px-2 bg-inherit"
              onChange={handleSearch}
              onBlur={() => handleNoFocus()}
            />
            <button type="submit" className="search-submit">
              <i className="fa-solid fa-magnifying-glass text-gray-400 px-2"></i>
            </button>
          </form>

          <SearchWidget
            content={searchResults.map((c) => {
              return (
                <Link
                  to={`/coin/${c.id}`}
                  className="w-full text-black p-3 hover:bg-gray-200 cursor-pointer"
                  onMouseUp={() => setSearchShow(false)}
                >
                  {c.name}
                </Link>
              );
            })}
            visible={searchShow ? true : false}
          />
        </div>

        <Link to="/watchlist" className="font-semibold">
          <i className="fa-regular fa-star mr-1"></i>
          Watchlist
        </Link>
      </div>
      </div>

      <div className="w-[15rem] relative flex sm:hidden flex-col items-center mt-3">
          <form className="border border-gray-300 w-full rounded-md overflow-hidden py-1 mx-5">
            <input
              type="text"
              placeholder="Search"
              ref={searchRefMobile}
              className="outline-none px-2 bg-inherit"
              onChange={handleSearch}
              onBlur={() => handleNoFocus()}
            />
            <button type="submit" className="search-submit">
              <i className="fa-solid fa-magnifying-glass text-gray-400 px-2"></i>
            </button>
          </form>

          <SearchWidget
            content={searchResults.map((c) => {
              return (
                <Link
                  to={`/coin/${c.id}`}
                  className="w-full text-black p-3 hover:bg-gray-200 cursor-pointer"
                  onMouseUp={() => setSearchShow(false)}
                >
                  {c.name}
                </Link>
              );
            })}
            visible={searchShow ? true : false}
          />
        </div>

    </nav>
  );
}

export default Navbar;
