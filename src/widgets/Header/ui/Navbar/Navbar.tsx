import React from 'react'

import { Heading, List } from '../../../../shared/ui'
import { list, navbar } from './Navbar.module.scss'

const navs = [{ text: 'Home' }, { text: 'Category' }, { text: 'About Me' }, { text: 'Search' }]

export const Navbar = () => {
    return (
        <nav className={navbar}>
            <List
                className={list}
                items={navs}
                renderItem={(i, idx) => (
                    <li key={idx}>
                        <Heading level={3} text={i.text} />
                    </li>
                )}
            />
        </nav>
    )
}
