
/*
const Maptoto = [
    { title: 'Chou', id: 1 },
    { title: 'Ail', id: 2 },
    { title: 'Pomme', id: 3 },
  ];

  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );
*/
  const ProductsList = ({children, toto}) => {
    return (
      <span style={{color: toto}}>{children}</span>
    ) 
  }

  export default ProductsList 