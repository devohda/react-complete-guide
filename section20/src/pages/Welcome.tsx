import {Route} from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <h1>The welcome page</h1>
      <div>
        <Route path="/welcome/new-user">
          <div>welcome, new user</div>
        </Route>
      </div>
    </section>
  );
};

export default Welcome;
