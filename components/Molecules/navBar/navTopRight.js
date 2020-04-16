import React from 'react'
import IconButton from '../../atoms/Buttons/iconButton'
import './navTopRight.css'

function NavTopRight() {
    return (
        <ul className='icon-list'>
            <li className='icon-item search'>
                {/* <IconButton iconUrl={'/navBar/Img-5.png'} height={30} width={30}/>
                 */}
                 <i class="fas fa-search fa-lg"></i>
                <div className='search-dropdown'>
                    <input type='text' placeholder='Search' className='search-bar'/>
                </div>
            </li>
            <li className='icon-item'>
            {/* <IconButton iconUrl={'/navBar/Img-1.png'} height={30} width={30}/>
            <i class="far fa-bell"></i> */}
            <i class="fas fa-bell fa-lg"></i>
            </li>
            <li className='icon-item'>
            {/* <IconButton iconUrl={'/navBar/Img-6.png'} height={30} width={30}/> */}
            <i class="fas fa-shopping-cart fa-lg"></i>
            </li>
            <li className='icon-item'>
            {/* <IconButton iconUrl={'/navBar/Img-4.png'} height={30} width={30}/> */}
            <i class="fas fa-cog fa-lg"></i>
            </li>
            <li className='icon-item'>
            {/* <IconButton iconUrl={'/navBar/Img-2.png'} height={30} width={30}/> */}
            <i class="fas fa-columns fa-lg"></i>
            </li>
            <li className='icon-item'>
            {/* <IconButton iconUrl={'/navBar/Img-3.png'} height={30} width={30}/> */}
            <i class="fas fa-flag fa-lg"></i>
            </li>
            <li className='icon-item'>
            {/* <IconButton iconUrl={'/navBar/Img-7.png'} height={30} width={30}/> */}
            <i class="fas fa-user fa-lg"></i>
            </li>
        </ul>
    )
}

export default NavTopRight
