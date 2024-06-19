import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/auth";
import Navbar from "../Navbar/Navbar";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const { handleSearch } = useContext(AuthContext);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchClick = (e) => {
    e.preventDefault();
    handleSearch(searchValue);
    window.scrollTo(0, 665);
  };

  return (
    <div>
      <Navbar />
      <section className="w-full">
        <div className="w-full h-screen bg-[url('https://images.unsplash.com/photo-1625758215109-cdb9ffe2594a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center ">
          <div>
            <h1 className="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-semibold bg-gray-800 p-2 bg-opacity-40 rounded-sm">
              Welcome to 100<span className=" text-sky-400">acres</span>
            </h1>
            <div className="text-white text-center xl:text-3xl lg:text-4xl md:text-2xl sm:text-1xl xs:text-0.5xl font-semibold rounded-sm font-custom">
              Find a home you'll{" "}
              <span className="text-red-600 italic font-black font-mono">
                love
              </span>
            </div>
          </div>

          {/* <div class="relative flex h-10 w-full min-w-[200px] max-w-[24rem]">
            <button
              class="!absolute right-1 top-1 z-10 select-none rounded bg-sky-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              <FaSearch />
            </button>
            <input
              type="email"
              class="peer h-full w-full rounded-[7px] border border-white bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-white"
              placeholder=" "
              required
            />
            <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-white before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-white after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-white peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-white">
              Search By Location
            </label>
          </div> */}

          {/* <div className="w-full mx-auto"> */}
            {/* <form>
              <div className="xl:w-1/2 lg:w-[60%] md:w-[70%] sm:w-[70%] xs:w-[90%] mx-auto flex gap-2 md:mt-6 xs:mt-4 px-4">
                <input
                  type="text"
                  className="border border-gray-400 w-full p-2 rounded-md text-xl pl-2"
                  placeholder="Search by Location"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  spellCheck="false"
                />
                <button
                  onClick={handleSearchClick}
                  type="submit"
                  className="px-[10px] p-[10px] bg-blue-500 text-lg text-white rounded-md font-semibold"
                >
                  Search
                </button>
              </div>
            </form> */}


<div class="max-w-[480px] w-full px-4 mx-auto mt-8">
   <button class="py-2.5 px-6 text-sm font-medium bg-white text-black border-none">BUY</button>
   {<Link to={"/admin/dashboard"}><button class="py-2.5 px-6 text-sm font-medium text-white bg-sky-500">SELL</button></Link>} 
</div>
  <form action="/search" className="max-w-[480px] w-full px-4 mx-auto">
    <div className="relative">
      <input
      onChange={(e) => setSearchValue(e.target.value)}
      autoComplete="off"
        type="text"
        name="q"
        className="w-full h-12 shadow p-4 border-none"
        placeholder="Search by Location"
        spellCheck="false"
      />
      <button type="submit" onClick={handleSearchClick}>
      
        <svg
          className="text-sky-500 h-5 w-5 absolute top-3.5 right-3 fill-current dark:text-teal-300"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          style={{ enableBackground: "new 0 0 56.966 56.966" }}
          xmlSpace="preserve"
        >
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path>
        </svg>
      </button>
    </div>
  </form>
          </div>
        {/* </div> */}
      </section>
    </div>
  );
};

export default Hero;
