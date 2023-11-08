import React from "react";
import { Card, CardMedia } from "@mui/material";

const ImageComponent = () => {
  const imageUrl = "https://plus.unsplash.com/premium_photo-1697477565849-77cdf305344b?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dage/jpeg;base64,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";
  // imageUrl og description props kan endres av kursdeltakerne
  return (
    <Card sx={{ my: 4 }}>
      <CardMedia component="img" image={imageUrl} />
    </Card>
  );
};

export default ImageComponent;
