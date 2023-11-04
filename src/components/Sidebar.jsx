import React from "react";
import { Stack, Button } from "@mui/material";
import { categories } from "./utils/contants";

const Sidebar = ({ ActiveCategory, setActiveCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { xs: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          className="category-btn"
          onClick={()=>{
            setActiveCategory(category.name);
          }}
          style={{
            background: category.name === ActiveCategory && "#FC1503",
            color: "white",
          }}
        >
          <span
            style={{
              color: category.name === ActiveCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{ opacity: category.name === ActiveCategory ? "1" : "8" }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
