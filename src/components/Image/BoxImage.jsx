import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const BoxImage = ({ src, alt }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        component="img"
        src={src}
        alt={alt}
        onClick={handleOpen}
        sx={{
          marginTop: 2,
          marginBottom: 2,
          width: "100%",
          maxWidth: "100%",
          cursor: "pointer",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      />
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(5px)",
        }}
      >
        <Box
          component="img"
          src={src}
          alt={alt}
          onClick={handleClose}
          sx={{
            width: "90%",
            maxWidth: "100%",
            maxHeight: "90%",
            borderRadius: 2,
            boxShadow: 24,
            objectFit: "contain",
          }}
        />
      </Modal>
    </>
  );
};

export default BoxImage;
