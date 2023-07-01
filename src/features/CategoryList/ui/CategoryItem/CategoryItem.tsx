import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image'
import React, { FC } from 'react'

import { Card, CardSize, Heading } from '../../../../shared/ui'

interface ICategoryItemProps {
    title: string
    image: ImageDataLike
}

export const CategoryItem: FC<ICategoryItemProps> = (props) => {
    const { title, image } = props
    const src = getImage(image)
    return (
        <li>
            <Card size={CardSize.SMALL} isHovering={false}>
                {src ? <GatsbyImage alt={title} image={src} /> : null}
                <Heading className={'mt-[30px]'} level={2} text={title} />
            </Card>
        </li>
    )
}
