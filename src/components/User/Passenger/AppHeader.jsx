import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const AppHeader = () => {
  const navigate = useNavigate();

  const handleUserClick = async () => {
    try {
      const response = await fetch("https://your-api.com/api/user"); // ✅ เปลี่ยนเป็น API จริงของคุณ

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("User data:", data);

      // ตัวอย่างการเก็บข้อมูลผู้ใช้ (สามารถใช้ context ได้)
      // localStorage.setItem("user", JSON.stringify(data));

      navigate("/profile"); 
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#ECBD35" }}>
        <Toolbar sx={{ minHeight: 80 }}>
          {/* โลโก้ Thunder Ride */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              component="span"
              sx={{
                color: "#ECBD35",
                WebkitTextStroke: "1px black",
                fontWeight: "bold",
                fontSize: 24,
                mr: 1,
              }}
            >
              THUNDER
            </Box>
            <Box component="span" sx={{ color: "black" ,fontSize: 24}}>
              RIDE
            </Box>
          </Typography>

          {/* ปุ่ม USER */}
          <Button
            variant="outlined"
            onClick={handleUserClick}
            sx={{
              color: "black",
              borderColor: "white",
              borderRadius: "20px",
              backgroundColor: "white",
              textTransform: "none",
              fontWeight: "bold",
              px: 2,
              py: 0.5,
            }}
          >
            USER
          </Button>

          {/* ปุ่มเมนู (Menu Icon) */}
          <IconButton
            size="large"
            edge="end"
            onClick={() => navigate("/menu")}
            aria-label="menu"
            sx={{ ml: 1, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppHeader;
