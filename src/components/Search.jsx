import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400" alt='pic'/>
        <div className="userChatInfo" >
          <span>Wakil</span>
        </div>
      </div>
    </div>
  )
}

export default Search
