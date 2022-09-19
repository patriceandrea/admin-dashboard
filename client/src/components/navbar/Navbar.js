import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type="text" placeholder='Search...' />
          <SearchOutlinedIcon />
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageOutlinedIcon />
            English
          </div>
          <div className='item'>
            <DarkModeOutlinedIcon />
          </div>
          <div className='item'>
            <FullscreenOutlinedIcon />
          </div>
          <div className='item'>
            <NotificationsNoneOutlinedIcon />
          </div>
          <div className='item'>
            <ChatBubbleOutlineOutlinedIcon />
          </div>
          <div className='item'>
            <ListOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar; 
