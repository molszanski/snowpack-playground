# Virtual List with Intersection Observer

This is playground for:

- Interesection Observer as substitute `react-virtualized`
- Snowpack

## The Idea

Move all the heavy lifting to the browser

```tsx
const PokeCard = ({ id, name }) => (
  <div className="poke-card">
    {id}
    {name}
    {/** stuff*/}
  </div>
)

const DummyCard = () => <div className="dummy-card"></div>

export function VirtualCard(props: PokeType) {
  const [ref, inView] = useInView({
    threshold: 0,
  })
  return (
    <div ref={ref}>
      {inView && <PokeCard {...props} />}
      {!inView && <DummyCard />}
    </div>
  )
}

export function PokemonGrid({}) {
  const pokemons = Array.from({ length: 550 }, (v, k) => k + 1)
  return (
    <div className="poke-grid">
      {pokemons.map((v) => (
        <VirtualCard key={v} id={v} name="PokeName" />
      ))}
    </div>
  )
}
```

**Credits**

> Icons by [The Artificial](https://theartificial.github.io/pokemon-icons/)
> ✨ Bootstrapped with Create Snowpack App (CSA).

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm test

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like "@snowpack/plugin-webpack" or "@snowpack/plugin-parcel" to your `snowpack.config.json` config file.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.
