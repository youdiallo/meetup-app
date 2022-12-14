
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes  from './MainNavigation.module.css';
import FavoritesConext from '../../store/favorites-context';

function MainNavigation() {

    const favoriteCxt = useContext(FavoritesConext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meet Up</div>
      <nav>
        <ul>
          <li>
            <Link to ='/'>All Meetups</Link>
          </li>
          <li>
            <Link to ='/new-meetup'>Add New Meetup</Link>
          </li>
          <li>
            <Link to ='/favorites'>
                My Favorites
                <span className={classes.badge}>{favoriteCxt.totalFavorates}</span>
                </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
