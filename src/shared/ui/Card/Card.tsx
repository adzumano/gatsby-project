import classNames from 'classnames'
import React, { FC, ReactNode } from 'react'

import { card, hovering, large, small } from './Card.module.scss'

export enum CardSize {
    SMALL = 'small',
    LARGE = 'large'
}

interface ICardProps {
    className?: string
    children: ReactNode
    size?: CardSize
    isHovering?: boolean
}

export const Card: FC<ICardProps> = (props) => {
    const { className, children, size = CardSize.SMALL, isHovering = false } = props
    return (
        <div
            className={classNames(card, className, {
                [small]: size === CardSize.SMALL,
                [large]: size === CardSize.LARGE,
                [hovering]: isHovering
            })}
        >
            {children}
        </div>
    )
}
