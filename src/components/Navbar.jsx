import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
     <span className='logo'>ReactChat</span>
     <div className="user">
      <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
      <span>Wakil</span>
      <button>Log out</button>
     </div>
    </div>
  )
}

export default Navbar;
