import React from 'react'
import profilepic from '../assests/profilepic.jpg'
import dashboardicon from '../assests/dashboardicon.png'
import perksicon from '../assests/perksicon.png'
import addonicon from '../assests/addonicon.webp'
import faqicon from '../assests/faqicon.png'
import supporticon from '../assests/supporticon.webp'
import shutdownicon from '../assests/shutdownicon.png'



function Sidebar() {
  return (
    <aside id='sidebar'>
      <div className='sidebar-title'>
        <div className='sidebar-details'>
          <img className='profilepic' src={profilepic} alt="profilepic" />
          <h3 style={{ fontWeight: '800', color: 'black', fontSize: '1.2rem' }}>Ram Mohan <span className='arrow'><i class="fa-solid fa-angle-right"></i></span></h3>
          <h4>rammohan2@gmail.com</h4>
        </div>

        {/* list of items */}
        <ul className='sidebar-list' style={{ listStyle: 'none', padding: 0 }}>
          <li className='sidebar-list-item' style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
            <a className='iconanchor' href="">
              <img className='icon' width={'40px'} src={dashboardicon}alt="" />
              <span style={{ marginLeft: '10px' }}>Dashboard</span>
            </a>
          </li>
          <li className='sidebar-list-item' style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
            <a className='iconanchor' href="">
              <img className='icon' width={'28px'} src={perksicon} alt="" />
              <span style={{ marginLeft: '20px' }}>Perks</span>
            </a>
          </li>
          <li className='sidebar-list-item' style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
            <a className='iconanchor' href="">
              <img className='icon' width={'32px'} src={addonicon} alt="" />
              <span style={{ marginLeft: '15px' }}>Addons</span>
            </a>
          </li>
          <li className='sidebar-list-item' style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
            <a className='iconanchor' href="">
              <img className='icon-faq' width={'58px'} src={faqicon} alt="" />
              <span style={{ marginLeft: '15px' }}>FAQ</span>
            </a>
          </li>
          <li className='sidebar-list-item' style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
            <a className='iconanchor' href="">
              <img className='icon' width={'32px'} src={supporticon} alt="" />
              <span style={{ marginLeft: '14px' }}>Support</span>
            </a>
          </li>
        </ul>



      </div>
      <div>
        <ul>
          <li className='sidebar-list-item' style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
          <a className='iconanchor' href="">
            <span style={{ marginLeft: '55px',marginRight:'10px' }}>Logout</span>
            <img width={'15px'} src={shutdownicon} alt="" />
          </a>
          </li>
        </ul>
      </div>

    </aside>
  )
}

export default Sidebar