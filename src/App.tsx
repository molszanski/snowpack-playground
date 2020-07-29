import React, { useState } from 'react'
import { PokemonGrid, PokemonGridDouble } from './PokemonGrid'
import styles from './App.module.css'
interface AppProps {}

function App({}: AppProps) {
  const [full, setFull] = useState(true)

  return (
    <>
      <header className={styles.App}>Pokemon</header>
      <main>
        <h1>Virtual Pokemon</h1>
        <div className={styles.controls}>
          <button
            className={full && styles.active}
            onClick={() => {
              setFull(true)
            }}
          >
            Full
          </button>
          <button
            className={!full && styles.active}
            onClick={() => {
              setFull(false)
            }}
          >
            Windowed
          </button>
        </div>

        {full && <PokemonGrid />}
        {!full && <PokemonGridDouble />}
      </main>
    </>
  )
}

export default App
