

const Product = ({brand, name, id, product}) => {
  return (
    <div>
      <h4>Product</h4>
      <h2> {brand} </h2>
      <h2> {name} </h2>
      <h2> {id} </h2>
      <h2> {product} </h2>
    </div>
  );
}

export default Product