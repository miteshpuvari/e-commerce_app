import React, { useEffect } from "react";
import Router from "./router/router";
import { useDispatch } from "react-redux";
import { fetchUserData } from "./redux/productReducer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);
  return (
    <>
      <Router />
      <ToastContainer />
    </>
  );
}

export default App;
