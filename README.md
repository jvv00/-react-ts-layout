# 리액트 타입스크립트를 이용한 레이아웃 구성 & Route 설정

## 1. 프로젝트 생성

```bash
npx create-react-app react-ts-layout --typescript
cd react-ts-layout
npm start
```

### - 패키지 설치

#### 라우터 설치

```bash
npm i react-dom
npm i react-router-dom
npm i @types/react-dom


yarn add react-dom
yarn add react-router-dom
yarn add @types/react-dom
```

#### styled-components 설치

```bash
yarn add styled-components
npm i styled-components
```

#### typescript 설치

TypeScript는 주로 개발 중에 TypeScript 코드를 유형 확인하고 JavaScript로 컴파일하는 데 사용되는 도구이기 때문에 TypeScript를 개발 종속성(--dev)으로 설치하는 것이 일반적인 관행입니다.

```bash
yarn add typescript --dev
npm i typescript --dev
```

## 2. 컴포넌트(Components) 생성

### - Header 컴포넌트 생성

-   `src/components/layout` 디렉토리에 `Header.tsx` 파일을 생성한다.

```tsx
// src/components/layout/Header.tsx
import React from 'react'

type HeaderProps = {
    name: string
}

const Header: React.FC<HeaderProps> = ({ name }) => <div>Hello, {name}</div>

export default Header
```

### - Footer 컴포넌트 생성

-   `src/components/layout` 디렉토리에 `Footer.tsx` 파일을 생성한다.

```tsx
// src/components/layout/Footer.tsx
import React from 'react'

const Footer: React.FC = () => <div>Footer</div>

export default Footer
```

### - Layout 컴포넌트 생성

-   `src/components/layout` 디렉토리에 `Layout.tsx` 파일을 생성한다.

```tsx
// src/components/layout/Layout.tsx
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => (
    <div>
        <Header name="Layout" />
        <main id="main">
            <Outlet />
        </main>
        <Footer />
    </div>
)

export default Layout
```

### - Home 컴포넌트 생성

-   `src/views` 디렉토리에 `Home.tsx` 파일을 생성한다.

```tsx
// src/views/Home.tsx
import React from 'react'

const Home: React.FC = () => <div>Home</div>

export default Home
```

### - About 컴포넌트 생성

-   `src/views` 디렉토리에 `About.tsx` 파일을 생성한다.

```tsx
// src/views/About.tsx
import React from 'react'

const About: React.FC = () => <div>About</div>

export default About
```

## 3. 라우트 설정

### - Router.tsx 파일 수정

-   `src` 디렉토리에 `Router.tsx` 파일을 생성한다.

```tsx
// src/Router.tsx
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './views/Home'
import About from './views/About'

const Router: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Router
```

### - App.tsx 파일 수정

-   `src` 디렉토리에 `App.tsx` 파일을 수정한다.

```tsx
// src/App.tsx
import React from 'react'
import Routers from './Routers'

const App: React.FC = () => <Routers />

export default App
```

### - index.tsx 파일 수정

-   `src` 디렉토리에 `index.tsx` 파일을 수정한다.

```tsx
// src/index.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)

reportWebVitals()
```

## Chakra UI 설치

```bash
yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

### - Chakra UI Provider 설정

-   `src` 디렉토리에 `ChakraProvider.tsx` 파일을 생성한다.

```tsx
// src/theme/theme.ts
import { extendTheme } from '@chakra-ui/react'
import { globalStyles } from './styles'

export default extendTheme(globalStyles)
```

-   `src` 디렉토리에 `styles.ts` 파일을 생성한다.

```tsx
import { mode } from '@chakra-ui/theme-tools'

export const globalStyles = {
    color: {
        primary: {
            100: '#f7fafc',
            900: '#1a202c',
        },
    },
    styles: {
        global: (props: any) => ({
            body: {
                bg: mode('gray.50', 'gray.800')(props),
                color: mode('gray.800', 'gray.50')(props),
            },
        }),
    },
}
```

### - App.tsx 파일 수정

-   `src` 디렉토리에 `App.tsx` 파일을 수정한다.

```tsx
// src/App.tsx
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
```
