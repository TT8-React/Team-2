import React, { useState } from "react";

//  components
import FormBtn from "../FormBtn";
import Cloud from "../../Assets/Cloud.png";
import { UploadContainer, UploadForm, UploadTitele } from "./style";
import { Tab, TabItem } from "../DataTab/style";
import ReportGrid from "../ReportGrid";
import TowColForm from "../TowColForm";
import Layout from "../Layout";

//  Data
import { TwoColFormData } from "../../MockData/Data";

export default function Upload() {
  const [filePath, setFilePath] = useState();
  const [fileName, setFileName] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [tab, setTab] = useState("manual");

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
      <Layout path="Data upload">
        <Tab>
          <ul>
            <TabItem
              onClick={() => setTab("manual")}
              className={tab === "manual" ? "active" : ""}
            >
              Manual data tab{" "}
            </TabItem>{" "}
            <TabItem
              onClick={() => setTab("upload")}
              className={tab === "upload" ? "active" : ""}
            >
              Bulk upload tab{" "}
            </TabItem>{" "}
          </ul>{" "}
        </Tab>{" "}
        {tab === "manual" ? (
          <ReportGrid>
            <TowColForm data={TwoColFormData} />{" "}
          </ReportGrid>
        ) : (
          <div style={{ width: "100%" }}>
            {" "}
            <UploadContainer>
              <UploadTitele> Upload CSV document </UploadTitele>{" "}
              <UploadForm onSubmit={handleSubmit}>
                <input id="file" type="file" onChange={handleUpload} />{" "}
                <label htmlFor="file">
                  {" "}
                  {isLoading ? (
                    fileName
                  ) : (
                    <>
                      <img src={Cloud} alt="uplodeIcon" />
                      <p> Upload here... </p>{" "}
                    </>
                  )}{" "}
                </label>{" "}
                <FormBtn name="Submit" />
              </UploadForm>{" "}
            </UploadContainer>{" "}
          </div>
        )}{" "}
      </Layout>{" "}
    </>
  );
}
