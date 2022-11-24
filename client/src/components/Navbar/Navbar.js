import React, { useState } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'
import { BiTask } from 'react-icons/bi'
import { GrGroup } from 'react-icons/gr'
import { FaBriefcase } from 'react-icons/fa'
import { FaUserMd } from 'react-icons/fa'
import { HiBuildingOffice2, HiOutlineUserGroup } from 'react-icons/hi2'
import { TbReportAnalytics } from 'react-icons/tb'
import { BsCalendarWeek } from 'react-icons/bs'

function Navbar() {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    
    const extendElement = () =>{

        dropdown ? setDropdown(false) : setDropdown(true);
      }
      
    
    const onMouseEnter =() => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }

    const onMouseLeave =() => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    MS
                </Link>
    
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/tasks' className='nav-links' onClick = {closeMobileMenu}>
                            Tasks <BiTask/>
                        </Link>
                        
                    </li>
                    <li className='nav-item'>
                        <Link to='/clients' className='nav-links' onClick = {closeMobileMenu}>
                            Clients <HiOutlineUserGroup />
                        </Link>
                        
                    </li>
                    <li className='nav-item'>
                        <Link to='/advocate' className='nav-links' onClick = {closeMobileMenu}>
                            Advocate <FaBriefcase />
                        </Link>
                        
                    </li>
                    <li className='nav-item'>
                        <Link to='/coworkers' className='nav-links' onClick = {closeMobileMenu}>
                            Coworkers <FaUserMd />
                        </Link>
                        
                    </li>
                    <li className='nav-item'>
                        <Link to='/companies' className='nav-links' onClick = {closeMobileMenu}>
                            Companies <HiBuildingOffice2 />
                        </Link>
                        
                    </li>
                    <li className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        onClick={extendElement} 
                    >
                        <Link className='nav-links' to='/reports'>
                            Reports <i className='fas fa-caret-down' /> <TbReportAnalytics />
                        </Link>
                        
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/schedule' className='nav-links' onClick = {closeMobileMenu}>
                            Schedule <BsCalendarWeek />
                        </Link>
                        
                    </li>
                    <li className='nav-item'>
                        <Link to='/login' className='nav-links-mobile' onClick = {closeMobileMenu}>
                            Login
                        </Link>
                    </li>

                </ul>
                <Button className='butoni'/>
            </nav>

        </>
    )
}

export default Navbar