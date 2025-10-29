import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import NearMeIcon from '@mui/icons-material/NearMe';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

const fakeOptions = [
  { label: 'Bangkok, Thailand', value: 'bangkok' },
  { label: 'Chiang Mai, Thailand', value: 'chiangmai' },
  { label: 'Phuket, Thailand', value: 'phuket' },
];

function AppNavbar() {
  const [pickupValue, setPickupValue] = useState(null);
  const [pickupInput, setPickupInput] = useState('');

  const [destinationValue, setDestinationValue] = useState(null);
  const [destinationInput, setDestinationInput] = useState('');

  // ✅ Placeholder สำหรับ Google Maps API (Pickup)
  const handlePickupIconClick = () => {
    alert('📍 Placeholder: รองรับ Google Maps API สำหรับ Pickup Location');
  };

  // ✅ Placeholder สำหรับการเชื่อม API หรือการยืนยันข้อมูล
  const handleConfirmClick = () => {
    alert(
      '✅ Confirmed!\n\nข้อมูลที่ป้อน:\n' +
      `Pickup: ${pickupValue?.label || 'ยังไม่เลือก'}\n` +
      `Destination: ${destinationValue?.label || 'ยังไม่เลือก'}`
    );
  };

  return (
    <Box sx={{ p: 3, maxWidth: 600, mx: 'auto' }}>
      <Box sx={{ mb: 2, fontWeight: 'bold', fontSize: 28 }}>
        Request a ride
      </Box>

      {/* Pickup Location */}
      <Autocomplete
        sx={{ mb: 2 }}
        value={pickupValue}
        onChange={(e, val) => setPickupValue(val)}
        inputValue={pickupInput}
        onInputChange={(e, val) => setPickupInput(val)}
        options={fakeOptions}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Pickup Location"
            variant="outlined"
            fullWidth
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start" sx={{ ml: 1 }}>
                  <Box
                    sx={{
                      bgcolor: '#ECBD35',
                      borderRadius: '8px',
                      p: 0.7,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transform: 'rotate(90deg)',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    }}
                  >
                    <VpnKeyIcon sx={{ color: '#FFFFFF', fontSize: 20 }} />
                  </Box>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handlePickupIconClick}
                    sx={{
                      bgcolor: '#ECBD35',
                      color: '#FFFFFF',
                      borderRadius: 0,
                      padding: '4px',
                      '&:hover': { bgcolor: '#d3a32e' },
                    }}
                    title="Use current location (Google Maps API placeholder)"
                  >
                    <NearMeIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                backgroundColor: '#E5E5E5',
                borderColor: '#E5E5E5',
                height: 48,
              },
            }}
            InputLabelProps={{ shrink: false }}
          />
        )}
      />

      {/* Destination */}
      <Autocomplete
        sx={{ mb: 3 }}
        value={destinationValue}
        onChange={(e, val) => setDestinationValue(val)}
        inputValue={destinationInput}
        onInputChange={(e, val) => setDestinationInput(val)}
        options={fakeOptions}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Destination"
            variant="outlined"
            fullWidth
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start" sx={{ ml: 1 }}>
                  <Box
                    sx={{
                      bgcolor: '#ECBD35',
                      borderRadius: '8px',
                      p: 0.7,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transform: 'rotate(270deg)',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    }}
                  >
                    <VpnKeyIcon sx={{ color: '#FFFFFF', fontSize: 20 }} />
                  </Box>
                </InputAdornment>
              ),
              sx: {
                backgroundColor: '#E5E5E5',
                borderColor: '#E5E5E5',
                height: 48,
              },
            }}
            InputLabelProps={{ shrink: false }}
          />
        )}
      />

      {/* Confirm Button */}
      <Button
        fullWidth
        variant="contained"
        onClick={handleConfirmClick}
        sx={{
          bgcolor: '#ECBD35',
          color: '#000000',
          fontWeight: 'bold',
          '&:hover': { bgcolor: '#d3a32e' },
          height: 35,
          width: 105,
          textTransform: 'none',
        }}
      >
        <Box sx={{ mb: 0, fontSize: 16 }}>Confirms</Box>
      </Button>

      {/* ข้อความ + รูปภาพ + ปุ่มลิงก์ภายนอก */}
      <Box sx={{ mt: 4, fontSize: 24 }}>Turn your car into an income.</Box>
      <Box sx={{ mt: 1, fontSize: 12, color: '#585858' }}>
        Join our platform and earn by giving rides on your schedule. Register your car once, and start driving with full control—your time, your rules, your earnings.
      </Box>

      <Box sx={{ mt: 1 }}>
        <img
          src="./images/taxi 1.png"
          alt=""
          style={{
            width: '100%',
            borderRadius: 8,
            objectFit: 'cover',
          }}
        />
        <Button
          fullWidth
          onClick={() => window.location.href = 'https://your-api-or-page.com'}
          variant="contained"
          sx={{
            marginTop: 1,
            bgcolor: '#ECBD35',
            color: '#000000',
            fontWeight: 'bold',
            '&:hover': { bgcolor: '#d3a32e' },
            height: 30,
            width: 125,
            textTransform: 'none',
          }}
        >
          <Box sx={{ mb: 0, fontSize: 16 }}>Get Started</Box>
        </Button>
      </Box>

      <Box sx={{ mt: 4, fontSize: 24 }}>Ride with us.</Box>
      <Box sx={{ mt: 1 }}>
        <img
          src="./images/taxi 2.png"
          alt=""
          style={{
            width: '100%',
            borderRadius: 8,
            objectFit: 'cover',
          }}
        />
        <Box sx={{ mt: 2, fontSize: 12, color: '#585858' }}>
          Your safe, easy, and reliable way to get where you need to go. With trusted drivers and clear pricing, you can relax and enjoy the journey every time.
        </Box>
        <Button
          fullWidth
          onClick={() => window.location.href = 'https://your-api-or-page.com'}
          variant="contained"
          sx={{
            marginTop: 2,
            bgcolor: '#ECBD35',
            color: '#000000',
            fontWeight: 'bold',
            '&:hover': { bgcolor: '#d3a32e' },
            height: 30,
            width: 205,
            textTransform: 'none',
          }}
        >
          <Box sx={{ mt: 0, fontSize: 16 }}>Log in to your account</Box>
        </Button>
      </Box>

      <Box sx={{ mt: 4, fontSize: 24 }}>We value your safety.</Box>
      <Box sx={{ mt: 1, mb: 10, fontSize: 12, color: '#585858' }}>
        Your safety comes first. Every driver is verified, every ride is tracked, and every trip is protected so you can ride with peace of mind, every time.
      </Box>
    </Box>
  );
}

export default AppNavbar;
