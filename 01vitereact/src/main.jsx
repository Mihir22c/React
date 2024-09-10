import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App | MB</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://www.google.com',
//     target: '_blank',
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://www.google.com" target="_blank">Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank',
  },
  'Click me to visit google',
  anotherElement
)


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <App />
  // </StrictMode>
  // MyApp() // can be written like this but against the standards of React
  // <MyApp />
  // anotherElement
  // reactElement

)
