import React from 'react'
import IconButton from '../../atoms/Buttons/iconButton'

function NavTopRight() {
    return (
        <ul className='list'>
            <li className='item'>
                <IconButton iconUrl={'/navBar/Img-1.png'} height={30} width={30}/>
            </li>
            <li className='item'></li>
            <li className='item'></li>
            <li className='item'></li>
            <li className='item'></li>
            <li className='item'></li>
            <li className='item'></li>
        </ul>
    )
}

export default NavTopRight
