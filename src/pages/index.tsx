import * as React from 'react'

import { Layout } from '../components/Layout/Layout'

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <h1 className={'text-heading1'}>Heading 1</h1>
        </Layout>
    )
}
export const Head = () => <title>Home Page</title>

export default IndexPage
