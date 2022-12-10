import {Link} from 'react-router-dom';

const Products = () => {
  return (
    <section>
      <h1>The products page</h1>
      <ul>
        <li>
          <Link to="/products/1">product 1</Link>
        </li>
        <li>
          <Link to="/products/2">product 2</Link>
        </li>
        <li>
          <Link to="/products/3">product 3</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
