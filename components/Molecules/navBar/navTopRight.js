import React from 'react'
import IconButton from '../../atoms/Buttons/iconButton'
import './navTopRight.css'

function NavTopRight() {
    return (
        <ul className='icon-list'>
            <li className='icon-item search'>
                <IconButton iconUrl={'/navBar/Img-5.png'} height={30} width={30}/>
                <div className='search-dropdown'>
                    <input type='text' placeholder='Search'/>
                </div>
            </li>
            <li className='icon-item'>
            <IconButton iconUrl={'/navBar/Img-1.png'} height={30} width={30}/>
            </li>
            <li className='icon-item'>
            <IconButton iconUrl={'/navBar/Img-6.png'} height={30} width={30}/>
            </li>
            <li className='icon-item'>
            <IconButton iconUrl={'/navBar/Img-4.png'} height={30} width={30}/>
            </li>
            <li className='icon-item'>
            <IconButton iconUrl={'/navBar/Img-2.png'} height={30} width={30}/>
            </li>
            <li className='icon-item'>
            <IconButton iconUrl={'/navBar/Img-3.png'} height={30} width={30}/>
            </li>
            <li className='icon-item'>
            <IconButton iconUrl={'/navBar/Img-7.png'} height={30} width={30}/>
            </li>
        </ul>
    )
}

export default NavTopRight
