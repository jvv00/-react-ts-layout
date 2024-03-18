import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Layout: React.FC = () => (
    <LayoutWrap>
        <Header name="Layout" />
        <main id="main">
            <Outlet />
        </main>
        <Footer />
    </LayoutWrap>
)

const LayoutWrap = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    #main {
        flex: 1;
    }
`

export default Layout
