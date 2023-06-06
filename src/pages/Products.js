import ProductsList from '../components/Products/ProductsList';
import Container from '@mui/material/Container';

const ProductsPage = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md" data-testid="list">
      <ProductsList />
    </Container>
  );
};

export default ProductsPage;
