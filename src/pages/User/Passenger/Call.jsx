import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Call = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bgcolor: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      {/* กล่องกลางหน้าจอ */}
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: 3,
          p: 3,
          width: 300,
          textAlign: "center",
        }}
      >
        {/* ภาพ call */}
        <Box
          component="img"
          src="/images/call.png"
          alt="call"
          sx={{ width: 75, height: 60, mx: "auto", mb: 0.5 }}
        />

        {/* ข้อมูลผู้เรียก */}
        <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>Call สมหมาย</Typography>
        <Typography sx={{ fontSize: 16, color: "#22232F", mt: 0.5 , fontWeight: "bold",}}>(ทฬ 1956)</Typography>
        <Typography sx={{ fontSize: 16, color: "#22232F", mt: 0.5 , fontWeight: "bold",}}>010-000-0000</Typography>

        {/* ปุ่ม Call / Cancel */}
        <Box sx={{ display: "flex", gap: 1, mt: 3 }}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#ECBD35",
              color: "#000",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#d6a92f" },
            }}
            onClick={() => alert("Calling...")}
          >
            Call
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#EDEDED",
              color: "#000",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#dcdcdc" },
            }}
            onClick={() => navigate(-1)} // กลับหน้าก่อนหน้า
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Call;
