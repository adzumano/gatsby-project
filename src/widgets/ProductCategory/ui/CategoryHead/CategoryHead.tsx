import React from 'react'

import { SectionTitle, SeeLink } from '../../../../shared/ui'
import { header } from './CategoryHead.module.scss'

export const CategoryHead = () => {
    return (
        <header className={header}>
            <SectionTitle text={'Browse the category'} />
            <SeeLink to={'/md'} text={'see all category'} />
        </header>
    )
}
