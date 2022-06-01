// import { Button, TextField } from "@mui/material";
// import { Box } from "@mui/system";
// import React from "react";
// import { useState } from "react";
// import { useAuth } from "../../contexts/AuthContextProvider";

// const Verify = () => {
//   const { handleCode } = useAuth();
//   const [code, setCode] = useState("");

//   return (
//     <div>
//       <Box>
//         <TextField
//           className="user-box"
//           margin="normal"
//           required
//           fullWidth
//           id="code"
//           label="Code"
//           name="code"
//           autoComplete="code"
//           autoFocus
//           onChange={(e) => setCode(e.target.value)}
//           value={code}
//         />
//         <Button
//           //   type="submit"
//           fullWidth
//           className="btn-box"
//           sx={{ mt: 3, mb: 2, backgroundColor: "black", color: "white" }}
//           onClick={() => handleCode(code)}
//         >
//           Send code
//         </Button>
//       </Box>
//     </div>
//   );
// };

// export default Verify;
