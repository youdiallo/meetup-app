import { useContext } from "react";

import Card from "../ui/Card";
import classes  from './MeetupItem.module.css';
import FavoritesConext from "../../store/favorites-context";

function MeetupItem(props) {

    const favoriteCtx = useContext(FavoritesConext);

    const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if(itemIsFavorite) {
            favoriteCtx.removeFavorite(props.id);
        } else {
            favoriteCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            });
        }
    }

  return (
    <li className={classes.item}>
        <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div onClick={toggleFavoriteStatusHandler} className={classes.actions}>
                <button>
                    {itemIsFavorite ? "Remove from favorites" : "Add to favorites"}
                </button>
            </div>
        </Card>
    </li>
  );
}

export default MeetupItem;
