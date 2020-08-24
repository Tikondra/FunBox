import React, {useState} from 'react'

const getBonusMouse = (bonusMouse) => {
  if (bonusMouse === 1) {
    return <li className="card__option">мышь в подарок</li>;
  }

  if (bonusMouse > 1 && bonusMouse < 5) {
    return <li className="card__option"><span>{bonusMouse}</span> мыши в подарок</li>;
  }

  if (bonusMouse >= 5) {
    return <li className="card__option"><span>{bonusMouse}</span> мышей в подарок</li>;
  }

  return '';
};
const getBonus = (bonus) => bonus.length > 0 ? bonus.map((it, i) => <li className="card__option" key={i}>{it}</li>) : '';
const getDescription = (isSelected, isAvailable, description, type, onSelected) => {
  if (!isAvailable) {
    return <p>Печалька, {type} закончился.</p>
  }

  if (isSelected) {
    return <p>{description}</p>
  }

  return <p>Чего сидишь? Порадуй котэ, <a onClick={onSelected}>купи.</a></p>;
};

const Card = ({card: {typeCard, title, type, description, weight, count, bonusMouse, isAvailable, bonus}}) => {
  const [selected, setSelected] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isFirstHover, setIsFirstHover] = useState(true);
  const disabledClass = isAvailable ? ` card--active` : ``;
  const selectedClass = selected ? ` card--selected` : ``;
  const onSelected = () => {
    if (isAvailable && selected) {
      setSelected(false);
      setIsFirstHover(true);
      setIsHover(false)
    } else if (isAvailable && !selected) {
      setSelected(true);
    }
  };
  const onCardOver = () => {
    if (isAvailable && selected && !isFirstHover) {
      setIsHover(true);
    }
  };
  const onCardOut = () => {
    if (isAvailable && selected && isFirstHover) {
      setIsFirstHover(false);
    } else if (isAvailable && selected && !isFirstHover) {
      setIsHover(false);
    }
  };

  return (
    <li className={`catalog__item card${disabledClass}${selectedClass}`}>
      <p className="card__type">{selected && isHover ? `котэ не одобряет?` : typeCard}</p>
      <h2 className="card__title">{title}</h2>
      <p className="card__subtitle">{type}</p>
      <ul className="card__option-list">
        <li className="card__option"><span>{count}</span> порций</li>
        {getBonusMouse(bonusMouse)}
        {getBonus(bonus)}
      </ul>
      <div className="card__weight"><span>{weight}</span> кг</div>
      <div className="card__description">
        {getDescription(selected, isAvailable, description, type, onSelected)}
      </div>
      <div
        className="card__target"
        onClick={onSelected}
        onMouseOver={onCardOver}
        onMouseOut={onCardOut}
        />
    </li>
  )
};

export default Card;
