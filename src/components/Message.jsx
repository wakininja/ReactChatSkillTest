import React from 'react'

const Message = () => {
  return (
    <div className='message'>
      <div className="messsageInfo">
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <span>just now</span>
      </div>
      <div className="messsageContent">
        <p>hello</p>
        {/* <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" /> */}
      </div>
    </div>
  )
}

export default Message
