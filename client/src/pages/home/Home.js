import React from 'react';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widget/Widgets';
import Tables from '../../components/table/Table';
import './home.scss'

const Home = ({ aspect }) => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className='charts'>
          <Featured />
          <Chart title="last 6 months (Revenue)" aspect={2 / 1} />
        </div>
        <div className='listContainer'>
          <div className='listTitle'>Latest Transactions</div>
          <Tables />
        </div>
      </div>
    </div>
  )
}

export default Home; 
