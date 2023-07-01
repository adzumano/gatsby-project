import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import { List } from '../../../../shared/ui'
import { CategoryItem } from '../CategoryItem/CategoryItem'
import { list } from './CategoryList.module.scss'

export const CategoryList = () => {
    const {
        allMarkdownRemark: { nodes }
    } = useStaticQuery(graphql`
        query Products {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        image {
                            childImageSharp {
                                gatsbyImageData(
                                    width: 60
                                    height: 60
                                    formats: PNG
                                    placeholder: BLURRED
                                )
                            }
                        }
                        title
                    }
                    id
                }
            }
        }
    `)
    return (
        <List
            className={list}
            items={nodes}
            renderItem={({ frontmatter: { image, title }, id }) => (
                <CategoryItem key={id} image={image} title={title} />
            )}
        />
    )
}
