import { createContext, useState } from "react";

const FavoritesConext = createContext({
    favorites: [],
    totalFavorates: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetumId) => {},
    itemIsFavorite: (meetumId) => {},
});

export function FavoritesConextProvider(props) {

    const [ userFavorites, setUserFavorites ] = useState([]);

    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorates: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    }

    return (
        <FavoritesConext.Provider value={context}>
            {props.children}
        </FavoritesConext.Provider>
    )
}

export default FavoritesConext;