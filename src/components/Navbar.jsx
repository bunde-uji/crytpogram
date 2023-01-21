import {Link} from 'react-router-dom';
import React, {useRef, useContext} from 'react';
import coinIcon from '../assets/coin-brown-small.png';
import { AppContext } from '../App';


function Navbar() {
    function handleSearch(e) {
        e.preventDefault();
    }

    const searchRef = useRef();
    const {dark, setDark} = useContext(AppContext);
    const logoColor = dark ? '#F5CE85' : '#987C46';
    const testColor = 'red'

    return (  
        <nav className={`flex justify-between items-center px-3 py-4 text-grey-800 border-b border-b-gray-200 ${dark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
            <Link to='/'><h3 className={`text-2xl font-bold ${dark ? 'text-[#F5CE85]' : 'text-[#987C46]'}`}>Crypt<img src={coinIcon} className='inline m-0 h-6' alt="" />gram</h3></Link>

            <div className='flex w-[35%] justify-between items-center'>
                <i className={`fa-solid fa-${dark ? 'sun' : 'moon'} text-xl cursor-pointer text-gray-70`} onClick={()=>setDark(!dark)}></i>
                <form className="border border-gray-300 rounded-md overflow-hidden py-1" onSubmit={handleSearch}>
                    <input type="text" placeholder='Search' ref={searchRef} className='outline-none px-2 bg-inherit' />
                    <button type='submit' className='search-submit' >
                        <i className="fa-solid fa-magnifying-glass text-gray-400 px-2"></i>
                    </button>
                </form>
                <Link to='/watchlist' className='font-semibold'>
                    <i className="fa-regular fa-star mr-1"></i>
                    Watchlist
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
