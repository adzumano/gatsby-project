import classNames from 'classnames'
import React from 'react'

import { CategoryList } from '../../../../features'
import { CategoryHead } from '../CategoryHead/CategoryHead'
import { category } from './ProductCategory.module.scss'

export const ProductCategory = () => {
    return (
        <section className={classNames(category)}>
            <CategoryHead />
            <CategoryList />
        </section>
    )
}
