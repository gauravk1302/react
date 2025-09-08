import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// function MyApp(){
//   return (
//     <div>
//       <h1>Custom App!!</h1>
//     </div>
//   )
// }

/*
const ReactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}
*/

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "chaia aur code"


const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target:'_blank'},
  'Click me to visit google',
  anotherUser
)
//here things are accoding to react only then rendering process is going to takes place otherwise not 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

    {reactElement}


    {anotherElement}
  </StrictMode>,
)
