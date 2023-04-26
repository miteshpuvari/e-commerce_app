import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import "./ItemCardStyles.scss";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { addTocart } from "../../redux/productReducer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

const ItemCard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCart = (data) => {
    dispatch(addTocart(data));
    toast.success('Successfully added', {
        position: toast.POSITION.TOP_RIGHT
    });
    navigate('cart')
  };

  return (
    <Item>
      <Typography sx={{ fontWeight: "bold" }} variant="subtitle1">
        {props?.data?.title}
      </Typography>
      <Box className="image-view">
        <img
          src={props?.data?.thumbnail}
          style={{ height: 150, width: 150, resizeMode: "cover" }}
        />
      </Box>
      <Box>
        <Typography sx={{ fontWeight: "bold" }}>
          Price: {props?.data?.price}
        </Typography>
        <Typography>{props?.data?.description}</Typography>
      </Box>
      <Box
        onClick={() => addToCart(props?.data)}
        className="add-tocart-view mt-2"
      >
        <AddIcon />
        <Typography>Add To cart</Typography>
      </Box>
    </Item>
  );
};

export default ItemCard;
