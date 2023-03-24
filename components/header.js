import React, { useState } from "react";

export default function Profile(props) {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <header className=" h-20 md:h-10 flex justify-between items-center w-full px-10">
        <h2 className='text-2xl uppercase'>maya</h2>

        <nav className={`${isActive ? "opacity-0 invisible" : "rounded-bl-lg visible bg-gray-600 text-white"} md:opacity-100 transition ease-in-out duration-400 absolute md:relative md:visible right-0 top-0 p-8 md:p-0`}>
          <button onClick={handleToggle} className="md:hidden absolute top-2 right-5">X</button>
          <ul className='text-base flex flex-col md:flex-row uppercase'>
            {/* Loop out navbar links */}
            {props.navLinks.map((text, index) => (
              <li className='hover:underline text-1xl cursor-pointer mx-4' key={index}>
                <a>{text}</a>
                </li>
            ))}
          </ul>
        </nav>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="cursor-pointer h-5 w-5 hidden md:block">
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd" />
        </svg>

        <svg onClick={handleToggle} className='h-6 block md:hidden' viewBox="0 0 100 80" width="40" height="40">
          <rect x="10" width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect x="10" y="60" width="100" height="10"></rect>
        </svg>
      </header>
    </>
  )
}