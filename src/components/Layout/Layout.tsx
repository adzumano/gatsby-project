import * as React from 'react'

export const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}
