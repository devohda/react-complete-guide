import {PropsWithChildren} from 'react';

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

const Layout = ({children}: PropsWithChildren) => {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default Layout;
