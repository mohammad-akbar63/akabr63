import React, { useState } from 'react'
import Webmenu from '../cards/Webmenu'
import Mobmenu from '../cards/Mobmenu'
const Header = () => {

    return (
        <header className='header'>
            <Webmenu />
            <Mobmenu />
        </header >
    )
}

export default Header