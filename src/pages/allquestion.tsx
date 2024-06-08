import { Box, Paper, Typography } from "@mui/material";
import BAFooter from "../layout/BAFooter";
import BAHeader from "../layout/BAHeader";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../config/firebasemethods";
import BAButton from "../comonents/BAButton";

export default function AllQuestion() {
  const [allQuestions, setAllQuestions] = useState<any>([]);

  const navigate = useNavigate();

  const getQuestions = () => {
    getData("questions");
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      <BAHeader />
      <Box className="container p-3">
        {allQuestions &&
          Array.isArray(allQuestions) &&
          allQuestions.length > 0 &&
          allQuestions.map((x, i) => (
            <Paper
              onClick={() => {
                navigate(`/question/${x.id}`);
              }}
              className="p-4 bg-ligt m-3"
              key={i}
            >
              <Typography className="fs-4 fw-bold">{x.question}</Typography>
              <Box>
                <Box>Total Answers : 786</Box>
              </Box>
            </Paper>
          ))}
      </Box>
      <BAFooter />
    </>
  );
}
