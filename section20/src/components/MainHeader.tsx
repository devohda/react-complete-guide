import {NavLink} from 'react-router-dom';

import classes from './MainHeader.module.scss';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/welcome"
              className={({isActive}) => (isActive ? classes.active : '')}
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({isActive}) => (isActive ? classes.active : '')}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
