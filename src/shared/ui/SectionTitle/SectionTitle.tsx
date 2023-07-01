import React, { FC } from 'react'

import { Heading } from '../Heading/Heading'
import { title } from './SectionTitle.module.scss'

interface ISectionTitleProps {
    text: string
}
export const SectionTitle: FC<ISectionTitleProps> = ({ text }) => {
    return <Heading className={title} level={2} text={text} />
}
