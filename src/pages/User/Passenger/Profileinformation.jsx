import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography, TextField, Radio, FormControlLabel, Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import AppleIcon from '@mui/icons-material/Apple';
import { useNavigate } from "react-router-dom";

const ProfileInformation = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [otherGender, setOtherGender] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("profileData");
    if (savedData) {
      const { name, phone, email, gender, otherGender } = JSON.parse(savedData);
      setName(name || "");
      setPhone(phone || "");
      setEmail(email || "");
      setGender(gender || "");
      setOtherGender(otherGender || "");
    } else {
      setName("John Doe");
      setPhone("000-000-0000");
      setEmail("xxx@gmail.com");
      setGender("");
      setOtherGender("");
    }
  }, []);

  const handleSave = () => {
    const data = { name, phone, email, gender, otherGender };
    localStorage.setItem("profileData", JSON.stringify(data));
    alert("Saved successfully!");
    navigate(-1);
  };

  return (
    <Box sx={{ p: 3, bgcolor: "#F7F7F7", minHeight: "100vh" }}>
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <IconButton
          onClick={() => navigate(-1)}
          sx={{
            backgroundColor: "white",
            borderRadius: "50%",
            width: 40,
            height: 40,
            border: "1.5px solid #D3D3D3",
            "&:hover": { backgroundColor: "#f0f0f0" },
            mr: 2,
            color: "black",
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
        </IconButton>

        <Typography sx={{ fontWeight: "bold", fontSize: 22, flexGrow: 1 }}>Profile Information</Typography>

        <Button
          onClick={handleSave}
          variant="contained"
          sx={{ bgcolor: "#ECBD35", color: "#fff", "&:hover": { bgcolor: "#d6a92f" } }}
        >
          Save
        </Button>
      </Box>

      {/* Profile Image */}
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Box
          component="img"
          src="/images/profile3.png"
          alt="profile"
          sx={{ width: 105, height: 100, borderRadius: "40%", mx: "auto" }}
        />
      </Box>

      {/* Name */}
      <Typography sx={{ fontWeight: "bold", mb: 1 }}>Name</Typography>
      <TextField
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        variant="outlined"
        sx={{ mb: 2, bgcolor: "#fff", borderRadius: 2 }}
        inputProps={{ style: { height: 15 } }}
      />

      {/* Phone Number */}
      <Typography sx={{ fontWeight: "bold", mb: 1 }}>Phone Number</Typography>
      <TextField
        fullWidth
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        variant="outlined"
        sx={{ mb: 2, bgcolor: "#fff", borderRadius: 2 }}
        inputProps={{ style: { height: 15 } }}
      />

      {/* Email Address */}
      <Typography sx={{ fontWeight: "bold", mb: 1 }}>Email Address</Typography>
      <TextField
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        variant="outlined"
        sx={{ mb: 2, bgcolor: "#fff", borderRadius: 2 }}
        inputProps={{ style: { height: 15 } }}
      />

      {/* Gender */}
      <Typography sx={{ fontWeight: "bold", mb: 1 }}>Gender</Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
        {/* Male */}
        <FormControlLabel
          control={
            <Radio
              checked={gender === "Male"}
              onChange={() => setGender("Male")}
              icon={<RadioButtonUncheckedIcon sx={{ color: "#ccc", fontSize: 20 }} />}
              checkedIcon={<RadioButtonCheckedIcon sx={{ color: "#ECBD35", fontSize: 20 }} />}
            />
          }
          label="Male"
        />
        {/* Female */}
        <FormControlLabel
          control={
            <Radio
              checked={gender === "Female"}
              onChange={() => setGender("Female")}
              icon={<RadioButtonUncheckedIcon sx={{ color: "#ccc", fontSize: 20 }} />}
              checkedIcon={<RadioButtonCheckedIcon sx={{ color: "#ECBD35", fontSize: 20 }} />}
            />
          }
          label="Female"
        />
        {/* Other + input */}
        <Box sx={{ display: "flex", alignItems: "center", p: 1, minWidth: 200 }}>
          <Radio
            checked={gender === "Other"}
            onChange={() => setGender("Other")}
            icon={<RadioButtonUncheckedIcon sx={{ color: "#ccc", fontSize: 20 }} />}
            checkedIcon={<RadioButtonCheckedIcon sx={{ color: "#ECBD35", fontSize: 20 }} />}
          />
          <TextField
            placeholder="Other"
            value={gender === "Other" ? otherGender : ""}
            onChange={(e) => setOtherGender(e.target.value)}
            variant="standard"
            sx={{
              ml: 1,
              width: "100%",
              color: gender === "Other" ? "black" : "#ECBD35",
            }}
            InputProps={{
              disableUnderline: true,
              readOnly: gender !== "Other",
              style: { height: 15 } // เพิ่ม height
            }}
          />
        </Box>
      </Box>

      {/* Linked Accounts */}
      <Typography sx={{ fontWeight: "bold", mb: 1 }}>Linked Accounts</Typography>

      {/* Google Account */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: 1, bgcolor: "#", borderRadius: 2, mb: 1, height: 40, boxSizing: "border-box" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box component="img" src="/images/google.png" alt="Google" sx={{ width: 25, height: 25 }} />
          <Typography>Google Account</Typography>
        </Box>
        <Typography sx={{ color: "#515759" }}>Linked</Typography>
      </Box>

      {/* Apple ID */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: 1, bgcolor: "#", borderRadius: 2, mb: 2, height: 40, boxSizing: "border-box" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <AppleIcon />
          <Typography>Apple ID</Typography>
        </Box>
        <Typography sx={{ color: "#515759" }}>Linked</Typography>
      </Box>

      {/* Logout */}
      <Button
        fullWidth
        variant="outlined"
        sx={{
          borderColor: "#D3D3D3",
          color: "#000",
          bgcolor: "#fff",
          "&:hover": { bgcolor: "#f0f0f0" },
          mt: 3,
        }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default ProfileInformation;
