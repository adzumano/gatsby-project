import { Link } from 'gatsby'
import React, { FC } from 'react'

import ArrowRightIcon from '../../assets/svg/arrow-right.svg'
import { Heading } from '../Heading/Heading'
import { arrow, link } from './SeeLink.module.scss'

interface ISeeLinkProps {
    to: string
    text: string
}
export const SeeLink: FC<ISeeLinkProps> = ({ to, text }) => {
    return (
        <Link className={link} to={to}>
            <Heading level={3} text={text} />
            <ArrowRightIcon className={arrow} />
        </Link>
    )
}
