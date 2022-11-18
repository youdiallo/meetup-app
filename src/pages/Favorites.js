import { useContext } from 'react';
import FavoritesConext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {

    const favoriteCxt = useContext(FavoritesConext); 

    let content;

    if(favoriteCxt.totalFavorates === 0) {
        content = <p>You got no favorites yet. Start adding some?</p>
    } else {
        content = <MeetupList meetups={favoriteCxt.favorites} />
    }

    return (
        <section>
            <h1>My Favorites Meetups</h1>
            { content }
        </section>
    );
}

export default FavoritesPage;