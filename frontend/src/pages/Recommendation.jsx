import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios'; 
import { useUser } from "@clerk/clerk-react";
import AuthWrap from "../components/auth/AuthWrap";


function PersonalAssistant() {
  const [reportBot, setReportBot] = useState("Risk Profile Upload");
  const { isSignedIn, isLoaded, user } = useUser();
  const [file, setFile] = useState();

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setReportBot(selectedFile.name);
  };

  const handleSubmission = () => {
    setReportBot("Uploading Report...");
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    axios
      .post(
        `http://localhost:4000/nbGuide/${user.id}`,
        formData,
        config
      )
      .then((response) => {
        setReportBot(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <><AuthWrap>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl text--rose-500 sans-serif px-2">
            Hey there we, have some recommendations for you, would like to know them ? 
            ,then upload your Risk Profile Report .
          </h1>
          <div>
            <Button
              component="label"
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload file
              <VisuallyHiddenInput
                type="file"
                onChange={handleFileChange}
                name="file"
              />
            </Button>
            <Button onClick={handleSubmission}>Submit</Button>
          </div>
          <div className="w-3/4 text-center mt-5">{
            reportBot.data ?`${reportBot.data}`:reportBot
          }

          </div>
          {/* <button className="bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>{}}>Refresh</button> */}
        </div>
        </AuthWrap>
    </>
  );
}

export default PersonalAssistant;