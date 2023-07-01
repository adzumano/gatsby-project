import classNames from 'classnames'
import React, { FC } from 'react'

import { heading } from './Heading.module.scss'

interface IHeadingProps {
    className?: string
    level: number
    text: string
}
export const Heading: FC<IHeadingProps> = (props) => {
    const { level = 1, text, className } = props
    const Component = `h${level}`

    return (
        <Component className={classNames(heading, `text-heading${level}`, className)}>
            {text}
        </Component>
    )
}
