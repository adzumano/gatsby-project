import classNames from 'classnames'
import React, { FC } from 'react'

import { typography } from './Typography.module.scss'

interface ITypographyProps {
    className?: string
    variant: string
    text: string
}
export const Typography: FC<ITypographyProps> = (props) => {
    const { variant, text, className } = props
    const Component = variant

    return <Component className={classNames(className, typography)}>{text}</Component>
}
