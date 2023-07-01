import classNames from 'classnames'
import React from 'react'

import { Header } from '../../widgets'
import { layout } from './Layout.module.scss'

export const Layout = ({ children }) => {
    return (
        <div className={classNames(layout)}>
            <Header />
            {children}
        </div>
    )
}
