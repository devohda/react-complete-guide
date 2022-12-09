import {useParams} from 'react-router-dom';

interface ProductDetailParams {
  productId: string;
}

const ProductDetail = () => {
  const params = useParams<ProductDetailParams>();

  return (
    <div>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </div>
  );
};

export default ProductDetail;
