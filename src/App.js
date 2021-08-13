import jsxLite from '@jsxLite'

const App = () => {
  const name = 'Javascript'

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p class="regular">This is pretty cool.</p>
      <button onclick={() => alert('Hello, world!')}>Click me!</button>
    </div>
  )
}

export default App
