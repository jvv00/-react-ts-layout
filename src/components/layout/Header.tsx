import React from 'react'

type HeaderProps = {
    name: string
}

const Header: React.FC<HeaderProps> = ({ name }) => <div>Hello, {name}</div>

export default Header
