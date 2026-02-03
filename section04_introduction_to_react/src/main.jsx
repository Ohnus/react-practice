// ES Module 시스템으로 import!
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// App 컴포넌트로 import 해오고 있다.
import App from './App.jsx'

// createRoot: 인수로 전달받은 index.html 요소 root를 React의 root(뿌리)로 만들어준다.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* App을 렌더링 하겠다. */}
    {/* 여기서 < /> 문법은 컴포넌트를 렌더링하는 문법이다. */}
    {/* 즉, App 컴포넌트를 렌더링하고 있다. */}
    <App />
  </StrictMode>,
)
