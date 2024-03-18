import React from 'react'
import Routers from './Routers'
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from 'styled-components'
import theme from './theme/theme'

const App: React.FC = () => (
    <ChakraProvider theme={theme}>
        <ThemeProvider theme={theme}>
            <Routers />
        </ThemeProvider>
    </ChakraProvider>
)

export default App
