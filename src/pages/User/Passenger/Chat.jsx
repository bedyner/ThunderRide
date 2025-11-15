import React, { useState } from "react";
import { Box, IconButton, TextField, InputAdornment, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, input]);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bgcolor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Header */}
      <Box sx={{ position: "relative", bgcolor: "white", p: 2 }}>
        {/* Back button */}
        <IconButton
          onClick={() => navigate(-1)}
          sx={{
            position: "absolute",
            left: 16,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "white",
            borderRadius: "50%",
            width: 39,
            height: 39,
            border: "1.5px solid #D3D3D3",
            "&:hover": { backgroundColor: "#f0f0f0" },
            color: "black",
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
        </IconButton>

        {/* Call button */}
        <Box
          component="img"
          src="/images/call1.png"
          alt="call"
          onClick={() => navigate("/ride/call")}
          sx={{
            position: "absolute",
            right: 16,
            top: "50%",
            transform: "translateY(-50%)",
            width: 50,
            height: 55,
            cursor: "pointer",
          }}
        />

        {/* Profile in center */}
        <Box sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src="/images/profile1.png"
            alt="profile"
            sx={{ width: 60, height: 60, borderRadius: "50%", mx: "auto" }}
          />
          <Box sx={{ fontSize: 16, fontWeight: "bold", mt: 1 }}>สมหมาย</Box>
        </Box>
      </Box>

      {/* Chat messages area */}
      <Box
        sx={{
          flexGrow: 1,
          p: 2,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {messages.map((msg, index) => (
          <Box
            key={index}
            sx={{
              p: 1.5,
              bgcolor: "#ECBD35",
              borderRadius: 5,
              alignSelf: "flex-end", // ด้านขวา
              maxWidth: "80%",
              display: "inline-block", // ขยายตามข้อความ
              wordBreak: "break-word",
            }}
          >
            <Typography sx={{ color: "#fff", fontSize: 14 }}>{msg}</Typography>
          </Box>
        ))}
      </Box>

      {/* Bottom input area */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 1,
          bgcolor: "white",
          gap: 1,
        }}
      >
        {/* Add Icon */}
        <IconButton
          sx={{
            bgcolor: "#8C8C8C",
            color: "white",
            width: 22,
            height: 22,
            "&:hover": { bgcolor: "#707070" },
          }}
        >
          <AddIcon sx={{ fontSize: 20 }} />
        </IconButton>

        {/* Text input */}
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          fullWidth
          variant="outlined"
          placeholder=""
          sx={{
            height: 36,
            "& .MuiOutlinedInput-root": {
              height: "100%",
              bgcolor: "#fff",
              borderRadius: 20,
              "& fieldset": { borderColor: "#C8C8CC" },
              "&:hover fieldset": { borderColor: "#C8C8CC" },
              "&.Mui-focused fieldset": { borderColor: "#C8C8CC" },
              paddingRight: 0,
            },
            input: { padding: "6px 12px", height: "100%", boxSizing: "border-box" },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Box
                  component="img"
                  src="/images/micro.png"
                  alt="micro"
                  sx={{ width: 25, height: 25, cursor: "pointer", mr: 1 }}
                />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default Chat;
