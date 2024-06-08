import { Box, Typography } from "@mui/material";
import BAFooter from "../layout/BAFooter";
import BAHeader from "../layout/BAHeader";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

export default function Question() {
  return (
    <>
      <BAHeader />
      <Box className="container p-3">
        <h1>
          <QuestionMarkIcon fontSize="large" />
        </h1>
        <Typography className="fs-1">asd as hahs kjdahs dahs kjdsa</Typography>
      </Box>
      <BAFooter />
    </>
  );
}
