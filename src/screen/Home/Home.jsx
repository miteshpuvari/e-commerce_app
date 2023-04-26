import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import Hoc from "../../components/HOC/Hoc";
import ItemCard from "../../components/ItemCard/ItemCard";
import { Typography } from "@mui/material";

const Home = () => {
  const data = useSelector((state) => state?.product);

  return (
    <Hoc>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data?.productStatush === "Loading" && (
            <Typography>Loading...</Typography>
          )}
          {data?.productStatush === "Succeede" &&
            data?.productList?.products?.map((productData, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <ItemCard data={productData} />
              </Grid>
            ))}
          {data?.productStatush === "Failed" && <Typography sx={{color: 'red' }} >Something went wrong!!</Typography>}
        </Grid>
      </Box>
    </Hoc>
  );
};

export default Home;
