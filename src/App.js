import jsxLite from '@jsxLite'
import logoImage from './assets/logo.png'

import './App.css'

const App = () => {
  const appName = 'JSX Lite'

  return (
    <div class="main-container">
      <img src={logoImage} alt="Logo" />
      <h1>This is {appName}</h1>
      <p>A small package transpiler for a JSX app.</p>
    </div>
  )
}

export default App
