import React from "react";
import { Box, Grid, Typography } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './HocStyles.scss';
import { useNavigate } from "react-router-dom";

const Hoc = (props) => {

    const navigate = useNavigate();

  return (
    <Box>
      <Grid>
        <Grid className="header-container mt-3" xs={12}>
          <Typography variant="h4"> Product List </Typography>
          <ShoppingCartIcon onClick={() => navigate('/cart')} fontSize="large" className="cart-icon" />
        </Grid>
        <Grid className="p-5" xs={12}>{props.children}</Grid>
      </Grid>
    </Box>
  );
};

export default Hoc;
