import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import classes from './ProductsList.module.css';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState([]);

  useEffect(() => {
    setIsLoadingProducts(true);
    const fetchProducts = async () => {
      const response = await fetch('https://dummyjson.com/products?limit=6');

      const responseData = await response.json();

      const loadedProducts = responseData.products;

      const transformedProducts = [];

      for (const key in loadedProducts) {
        transformedProducts.push({
          id: loadedProducts[key].id,
          title: loadedProducts[key].title,
          description: loadedProducts[key].description,
          image: loadedProducts[key].images[0],
        });
      }
      setProducts(transformedProducts);
      setIsLoadingProducts(false);
      return transformedProducts;
    };
    fetchProducts();
  }, []);

  if (isLoadingProducts) {
    return (
      <section className={classes.loading}>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <Grid container spacing={4} data-testid="products-list">
      {products.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardMedia
              component="img"
              sx={{
                // 16:9
                pt: '56.25%',
              }}
              image={item.image}
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography>{item.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsList;
