import React from 'react'
import NowPlaying from './components/NowPlaying'
import Popular from './components/Popular'

const App = () => {
  return (
    <>
      <h2>now playing </h2>
      <NowPlaying />

      <h2>Popular Movies</h2>
      <Popular />
    </>
  )
}

export default App