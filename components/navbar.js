import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton */}
          {/* size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          > */}
          {/* <MenuIcon /> */}
          {/* </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HotDog News
          </Typography>
          <Button color="inherit" href="/">
            Home
          </Button>
          <Button color="inherit" href="/login">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// import Link from "next/link";

// export const Header = () => {
//   return (
//     <header>
//       <div>
//         <div className="topNav">
//           <nav>
//             <ul>
//               <li>
//                 <Link href="/">Home</Link>
//               </li>
//               <li>
//                 <Link href="/about-us">About us</Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//         <p className="title"> Sed ut perspiciatis unde omnis</p>
//       </div>
//     </header>
//   );
// };
