import styled from "styled-components";

export const UploadTitele = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: #111111;
  padding: 2rem 0;
`;
export const UploadContainer = styled.div`
  padding-left: 6%;
`;

export const UploadForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45%;

  & > input {
    display: none;
  }

  & > label {
    display: flex;
    align-items: center;
    width: 80%;
    height: 3.5rem;
    padding: 1rem;
    color: #000000;
    font-size: 1.2rem;
    background-color: #efefef;
    border: 1px solid #848484;
    border-radius: 2rem;
    cursor: pointer;
  }
  & > label img {
    margin-right: 1rem;
  }
`;
export const Main = styled.main`
  width: 80%;
  height: 89%;
  position: absolute;
  right: 0;
  top: 11%;
`;
