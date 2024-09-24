import { useNavigate } from "react-router-dom";
import CurrencyStore from "../../Store/CurrencyStore";
import SearchBox from "../SearchBox/SearchBox";
import { useState } from "react";
import SwapThemeBtn from "../SwapThemeBtn/SwapThemeBtn";

function Navbar(){
  const {setCurrency} = CurrencyStore()
  const navigate = useNavigate();
  const [searchBox ,setSearchBox] = useState(false);

  function goToHome() {
    navigate("/")
  }





  return (
        <div className="navbar bg-base-100">
   <div className="navbar-start flex gap-3">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a onClick={() => setCurrency('inr')}>INR</a></li>
        <li><a onClick={() => setCurrency('usd')}>USD</a></li>
      </ul>
    </div>
    <SwapThemeBtn />
  </div>
  <div onClick={ goToHome } className="navbar-center">
    <a className="btn btn-ghost text-xl">Coin Tracker</a>
  </div>
  <div className="navbar-end flex gap-1 md:gap-4">
            {searchBox && <SearchBox/>}
                <button className="btn btn-ghost btn-circle" onClick={()=> {setSearchBox(!searchBox)}}>
                    {!searchBox ? <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    : <svg className="h-[60%] w-[60%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#fff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                    }
                </button>
    </div>
</div>

    )
}

export default Navbar;