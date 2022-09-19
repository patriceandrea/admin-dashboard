import React from 'react'
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>lamadmin</span>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <li>
            <PersonOutlineIcon />
            <span>Users</span>
          </li>
          <li>
            <StoreIcon />
            <span>Products </span>
          </li>
          <li>
            <PaymentIcon />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon />
            <span>Delivery</span>
          </li>
          <li>
            <BarChartIcon />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon />
            <span>Notifications</span>
          </li>
          <li>
            <SettingsSystemDaydreamIcon />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon />
            <span>Settings</span>
          </li>
          <li>
            <AccountCircleIcon />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>color options</div>
    </div>
  )
}

export default Sidebar; 
