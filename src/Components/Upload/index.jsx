import React, { useState } from "react";

import DataTab from "../DataTab";
import FormBtn from "../FormBtn";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";

import Cloud from "../../Assets/Cloud.png";
import { Main, UploadContainer, UploadForm, UploadTitele } from "./style";

export default function Upload() {
  const [filePath, setFilePath] = useState();
  const [fileName, setFileName] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleUpload = async (e) => {
    setFilePath(e.target.files[0]);
    setIsLoading(true);

    try {
      const res = e.target.files[0].name;
      setFileName(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    const formData = new FormData();
    formData.append("file", filePath);
    setIsLoading(false);
  };

  return (
    <>
      <Navbar />
      <SideBar />
      <Main>
        <DataTab />
        <UploadContainer>
          <UploadTitele>Upload CSV document</UploadTitele>
          <UploadForm onSubmit={handleSubmit}>
            <input id="file" type="file" onChange={handleUpload} />
            <label htmlFor="file">
              {isLoading ? (
                fileName
              ) : (
                <>
                  <img src={Cloud} alt="uplodeIcon" />
                  <p>Upload here...</p>
                </>
              )}
            </label>
            <FormBtn name="Submit" />
          </UploadForm>
        </UploadContainer>
      </Main>
    </>
  );
}
