import React from 'react'
import styled from 'styled-components'

type HeaderProps = {
    name: string
}

const Header: React.FC<HeaderProps> = ({ name }) => (
    <HeaderWrap>
        <h1>Hello, {name}</h1>
        <nav>
            <Gnb>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </Gnb>
        </nav>
    </HeaderWrap>
)

const HeaderWrap = styled.header`
    display: flex;
    justify-content: space-between;
`

const Gnb = styled.ul`
    display: flex;
    gap: 10px;
    list-style: none;
`

export default Header
