import React from 'react';
import './Sidebar.css';
import { useState } from 'react';

export const Sidebar = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)

  return (
    <div className='sidebar-container'>
      <div className={`icon-sidebar-container ${ isSidebarExpanded && 'active'}`}>
        <div className="sidebar-icon-element dashboard">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">
            </path>
          </svg>
          <div className="sidebar-value-element">Dashboard</div>
        </div>
        <div className="sidebar-icon-element account">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z">
            </path>
          </svg>
          <div className="sidebar-value-element">Account</div>
        </div>
        <div className="sidebar-icon-element">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z">
            </path>
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z">
            </path>
          </svg>
          <div className="sidebar-value-element">Stats</div>
        </div>
        <div className="sidebar-icon-element">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z">
            </path>
          </svg>
          <div className="sidebar-value-element">Store</div>
        </div>
        <div className="sidebar-icon-element">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z">
            </path>
          </svg>
          <div className="sidebar-value-element">Status</div>
        </div>
      </div>
      <div className='sidebar-expander' onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 96" width="13" height="96" fill="#0d0d0d" class="IrLwCg">
          <path class="TjrBvg" d="M0,0 c0,20,12,12,12,32 v32 c0,20,-12,12,-12,32">
          </path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 12 12" className={`arrow ${!isSidebarExpanded && 'reversed'}`}>
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.25" d="M7 3.17 4.88 5.3a1 1 0 0 0 0 1.42L7 8.83"></path>
        </svg>
      </div>
    </div>
  )
}
