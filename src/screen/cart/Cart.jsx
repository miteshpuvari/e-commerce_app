import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import "./CartStyles.scss";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../redux/productReducer";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const [cartData, setCartData] = useState();
  const data = useSelector((state) => state?.product?.cartData);

  useEffect(() => {
    setCartData(data);
  }, [data]);

  const deleteItem = (data) => {
    const deleted = cartData?.filter(
      (allCartData) => allCartData?.id !== data?.id
    );
    dispatch(deleteFromCart(deleted));
    setCartData(deleted);
    toast.error("Successfully Deleted", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <Box className="cart-container mt-2">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Typography variant="h4">Cart List</Typography>
      </Box>
      {cartData?.length < 1 && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: 5
          }}
        >
          <Typography>No data available</Typography>
        </Box>
      )}
      {cartData?.map((data) => {
        return (
          <Box sx={{ flexGrow: 1, m: 2 }}>
            <Paper>
              <Grid container sx={{ p: 2 }}>
                <Grid item xs={3}>
                  <img
                    src={data?.thumbnail}
                    style={{ height: 150, width: 150, resizeMode: "cover" }}
                  />
                </Grid>
                <Grid item xs={9}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {data?.title}
                  </Typography>
                  <Typography>{data?.brand}</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Price: {data?.price}
                  </Typography>
                  <Typography>{data?.description}</Typography>
                </Grid>
              </Grid>
              <Stack
                spacing={2}
                direction="row"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "flex-end",
                  p: 5,
                }}
              >
                <Button
                  onClick={() => deleteItem(data)}
                  variant="outlined"
                  color="error"
                >
                  Delete
                </Button>
                <Button variant="contained" color="success">
                  PLACE ORDER
                </Button>
              </Stack>
            </Paper>
          </Box>
        );
      })}
    </Box>
  );
};

export default Cart;
