import React from "react";
import { Box, Button, Modal } from "@mui/material";
import { Close, Column, CustomTypography, Flex, Line } from "./style";
import { style1 } from "./style";
import { Card, Square } from "../ReportCard/style";
import FormItem from "../FormItem/index";
import { Link } from "react-router-dom";

const MModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card onClick={handleOpen}>
        <Square>.</Square>

        <h5>Customize report</h5>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style1}
          style={{
            backgroundColor: "#FFFFFF",
            padding: "1rem 2rem ",
            borderRadius: "12px",
            width: "35%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <CustomTypography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Customize report
            <Close onClick={handleClose} style={{ cursor: "pointer" }}>
              X
            </Close>
          </CustomTypography>
          <Line />
          <Flex>
            <Column>
              <FormItem label="From" type="date" width="120%" />
            </Column>
            <Column>
              <FormItem label="To" type="date" width="120%" />
            </Column>
          </Flex>

          <Button
            variant="contained"
            style={{
              display: "block",
              backgroundColor: "#000000",
              margin: "1.7rem auto 0 auto",
            }}
          >
            <Link
              to="/customize"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Continue for next step
            </Link>
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default MModal;
