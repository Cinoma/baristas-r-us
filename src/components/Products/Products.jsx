import React from "react";
import { Grid } from "@mui/material";

import Product from "./Product/Product";
import useStyles from "./styles";

// Manual dummy items aranged in a list
//
// const products = [
//     { id: 1, name: 'Kettle', description: 'Electric Kettle', price: '$149', image: 'https://cdn.shopify.com/s/files/1/0057/6235/1219/products/Fellow__0000s_0006_Stagg-EKG-hero-shotOptimized_600x.png?v=1630682423'},
//     { id: 2, name: 'Coffee Maker', description: 'Pour-over coffee maker', price: '$115', image: 'https://store.chemexcoffeemaker.com/media/catalog/product/c/h/chemex-classic-6cup-detail_1.png'},
//     { id: 3, name: 'Scale', description: 'Digital Scale', price: '$150', image: 'https://cdn11.bigcommerce.com/s-6h7ychjk4/images/stencil/2560w/products/8708/90976/acaia-pearl-white-wbg-WeB__54992.1600697596.jpg?c=1'},
//     { id: 4, name: 'Grinder', description: 'Burr Grinder', price: '$300', image: 'https://cdn.shopify.com/s/files/1/1952/5621/products/Grinder_HeroImage_PureFront_900x_4418c47d-a2b2-470e-b3f6-25a5918cf0cf_530x@2x.png?v=1614131831'},
// ];

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
