import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
  const { spots } = props
  const formatSpots = (spots) => {
    if (spots === 1) {
      return `${spots} spot remaining`
    } else if (spots > 1) {
      return `${spots} spots remaining`
    } else {
      return `no spots remaining`
    }
  }

  const remainingSpots = formatSpots(spots);

  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)} selected={props.selected}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{remainingSpots}</h3>
    </li>
  );
}