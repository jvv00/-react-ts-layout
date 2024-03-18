import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout: React.FC = () => (
    <div>
        <Header name="가을이 홈페이지" />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
)

export default Layout
