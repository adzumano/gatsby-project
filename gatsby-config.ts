import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Dasteen Blog`,
        siteUrl: `https://www.yourdomain.tld`
    },
    graphqlTypegen: true,
    plugins: [
        'gatsby-plugin-sass',
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        'gatsby-transformer-sharp',
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/
                }
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `products`,
                path: `${__dirname}/src/features/CategoryList/lib/md/`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `products-img`,
                path: `${__dirname}/src/features/CategoryList/lib/images/`
            }
        }
    ]
}

export default config
