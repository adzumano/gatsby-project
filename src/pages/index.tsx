import * as React from 'react'

import { Layout } from '../processes/layout/Layout'
import { ProductCategory } from '../widgets'

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <ProductCategory />
        </Layout>
    )
}
export const Head = () => <title>Home Page</title>

export default IndexPage
