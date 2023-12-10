import React from "react"

const Header = () => {
  const menu = () => {
    // return (
    //   <div className="menu">
    //     <NavLink to="/">Home</NavLink>
    //     <NavLink to="/about">About</NavLink>
    //     <NavLink to="/contact">Contact</NavLink>
    //   </div>
    // )
  }
  return (
    <nav className="grid lg:grid-cols-3 grid-cols-2 h-24 items-center lg:px-20 px-6">
      <div className="bg-green-400 rounded-md px-9 py-4 flex w-max">
        <img
          src="/Vector.svg"
          alt="logo"
          height={15}
          width={35}
          className="mr-1"
        />
        <img src="/Talo.svg" alt="" height={35} width={35} />
      </div>
      <div
        onClick={menu}
        className="lg:hidden justify-self-end bg-blue-100 rounded-md px-2 py-2 flex w-max"
      >
        <img src="/Hamburger.svg" height={40} width={40} alt="menu" />
      </div>
      <div className="lg:flex lg:justify-around hidden">
        <a href="/" className="text-green-600 font-semibold">
          Home
        </a>
        <a href="#features" className="font-medium">
          About Us
        </a>
        <a href="#features" className="font-medium">
          What We Do
        </a>
        <a href="#features" className="font-medium">
          Talo Hr
        </a>
      </div>
      <div className="lg:flex justify-self-end hidden">
        <button className="bg-green-900 rounded-full w-max flex">
          <a href="/signup" className="text-green-50 px-16 py-3">
            Sign Up
          </a>
        </button>
      </div>
    </nav>
  )
}

export default Header
