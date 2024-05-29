const Product = ({params}) => {
  
  const id = params.id;

  return (
    <div>
      <h1>Product {id}</h1>
    </div>
  )
}

export default Product;