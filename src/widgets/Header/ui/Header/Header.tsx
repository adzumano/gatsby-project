import classNames from 'classnames'
import React from 'react'

import { Logo } from '../Logo/Logo'
import { Navbar } from '../Navbar/Navbar'
import { header } from './Header.module.scss'

export const Header = () => {
    return (
        <header className={classNames(header, '[1440px]:container')}>
            <Logo />
            <Navbar />
        </header>
    )
}
