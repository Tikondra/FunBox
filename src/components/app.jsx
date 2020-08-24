import React from 'react'
import Card from "./card.jsx";

const App = ({cards}) => {
  return (
    <section className="catalog">
      <h1 className="catalog__title">Ты сегодня покормил кота?</h1>
      <ul className="catalog__list">
        {cards.map((card, i) => {
          return (
            <Card
              key = {i}
              card= {card}
            />
          )
        })}
      </ul>
    </section>
  )
};

export default App;
