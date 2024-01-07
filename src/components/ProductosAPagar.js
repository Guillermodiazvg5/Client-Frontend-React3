import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ProductosAPagar({ allProducts }) {
  useEffect(
    () => {
      const sendState = async () => {
        try {
          const response = await axios.post(
            "http://localhost:7000/my-endpoint",
            { allProducts }
          );
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };

      sendState();
    },
    [allProducts ]
  );

  return <div></div>;
}
