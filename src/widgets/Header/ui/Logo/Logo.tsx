import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export const Logo = () => {
    return (
        <StaticImage
            src={'../../../../shared/assets/images/logo.png'}
            alt="logo"
            placeholder="blurred"
            layout="fixed"
            width={194}
            height={45}
        />
    )
}
