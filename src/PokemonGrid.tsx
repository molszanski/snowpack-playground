import React from 'react'
import { useInView } from 'react-intersection-observer'
import s from './PokemonGrid.module.css'

type PokeType = {
  id: number | string
  name: string
}
// public / pokemon - icons / simple - svg / (001).svg

export function PokeCard({ id, name }: PokeType) {
  const padNum = id.toString().padStart(3, '0')
  return (
    <div className={s.pokeCard}>
      <div className={s.image}>
        <figure>
          <svg>
            <image xlinkHref={`pokemon-icons/simple-svg/${padNum}.svg`} />
          </svg>
        </figure>
      </div>
      <h3>{name}</h3>
      <p>#{padNum}</p>
    </div>
  )
}

export function DummyCard() {
  return (
    <div className={`${s.pokeCard} ${s.virtual}`}>
      <div className={s.image}></div>
    </div>
  )
}

export function VirtualCard(props: PokeType) {
  const [ref, inView, entry] = useInView({
    threshold: 0,
  })
  return <div ref={ref}>{inView ? <PokeCard {...props} /> : <DummyCard />}</div>
}

export function PokemonGrid({}) {
  const a = Array.from({ length: 550 }, (v, k) => k + 1)
  return (
    <div className={s.pokeGrid}>
      {a.map((v) => (
        <VirtualCard key={v} id={v} name="PokeName" />
      ))}
    </div>
  )
}
const share = 30
export function PokemonGridDouble() {
  const b = Array.from({ length: 550 }, (v, k) => k + 1)
  const c = b.slice(0, 550).reverse()

  return (
    <div className={s.pocketGrid}>
      <div className={s.pokeGrid}>
        {b.map((v) => (
          <VirtualCard key={v} id={v} name="PokeName" />
        ))}
      </div>
      <div className={s.pokeGrid}>
        {c.map((v) => (
          <VirtualCard key={v} id={v} name="PokeName" />
        ))}
      </div>
    </div>
  )
}
