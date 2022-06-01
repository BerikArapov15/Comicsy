import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";
import SideBarSort from "./SidebarSort";

import SearchIcon from "@mui/icons-material/Search";
import { useProducts } from "../../contexts/CrudContextProvider";

const SideBar = () => {
  const [state, setState] = React.useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const { searchFilter, fetchByParams } = useProducts();

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          fullWidth
          id="input-with-icon-textfield"
          label="Search..."
          // value={search}

          onChange={(e) => searchFilter(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ cursor: "pointer" }}>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />

        <SideBarSort state={state} />
      </Box>
    </>
  );
};

export default SideBar;
