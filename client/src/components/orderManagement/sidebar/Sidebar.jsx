import React from 'react'
import '../../../App.css'
import navList from './navItem';




const Sidebar = () => {
  return (
    <div>
      <aside id='sidebar' className='sidebar'>

        <ul className="sidebar-nav" id='sidebar-nav'>

            <li className='nav-item'>
                <a className='nav-link' href='/OMDashboard'>
                    <i className='bi bi-grid'></i>
                    <span>Dashboard</span>
                </a>
            </li>

            <li className='nav-item'>
                <a className='nav-link ' href='/OMDashboard/QualityList'>
                    <i className='bi bi-menu-button-wide'></i>
                    <span>Quality Control</span>
                </a>
            </li>

            <li className='nav-item'>
                <a className='nav-link collapsed' data-bs-target='#forms-nav' data-bs-toggle='collapse' href='Orders'>
                    <i className='bi bi-journal-text'></i>
                    <span>Orders</span>
                    <i className='bi bi-chevron-down ms-auto'></i>
                </a>

                <ul id='forms-nav' className='nav-content collapse' data-bs-parent='#sidebar-nav'>
                    
                    <li>
                        <a href='/OMDashboard/RequestedOrderList'>
                            <i className='bi bi-circle'>
                                <span>Requested Orders</span>
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href='/OMDashboard/AssignedOrderList'>
                            <i className='bi bi-circle'>
                                <span>Assigned Orders</span>
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href='/OMDashboard/CompletedOrderList'>
                            <i className='bi bi-circle'>
                                <span>Completed Orders</span>
                            </i>
                        </a>
                    </li>

                </ul>
            </li>

            <li className='nav-item'>
                <a className='nav-link collapsed' data-bs-target='#tables-nav' data-bs-toggle='collapse' href='#'>
                    <i className='bi bi-layout-text-window-reverse'></i>
                    <span>Suppliers</span>
                    <i className='bi bi-chevron-down ms-auto'></i>
                </a>

                <ul id='tables-nav' className='nav-content collapse' data-bs-parent='#sidebar-nav'>
                    
                    <li>
                        <a href='#'>
                            <i className='bi bi-circle'>
                                <span>#</span>
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <i className='bi bi-circle'>
                                <span>#</span>
                            </i>
                        </a>
                    </li>
                   

                </ul>
            </li>

            <li className='nav-heading'>Pages</li>
            <div className='navList'>
                {navList.map(nav => (
                    <li className='nav-item' key={nav._id}>
                    <a className='nav-link collapsed' href ={'/login'}>
                        <i className={nav.icon}></i>
                        <span>{nav.name}</span>
                    </a>
                </li>
                ))}
            </div>
            

        </ul>
      </aside>
    </div>
  )
}

export default Sidebar
