import React from "react";
import styled from "styled-components";

import logo from "./img/logo.png";
import example from "./img/example.jpg";
import icon from "./img/icon.png";
import icon2x from "./img/icon2x.png";

import { Search } from "./search";
import { Input } from "./ui";

export class App extends React.Component {
  state = {
    label: "EXPERIMENTAL",
    searchValue: "",
    file: example,
    fileUrl: null
  };

  changeLabel = e => {
    e.preventDefault();
    this.setState({ label: e.target.value.toUpperCase() });
  };

  changeSearchValue = e => {
    e.preventDefault();
    this.setState({ searchValue: e.target.value });
  };

  uploadImage = e => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        fileUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  };

  downloadImage = () => {
    const { file, fileUrl, label } = this.state;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 720;
    canvas.height = 405;

    const backImg = new Image();
    backImg.src = fileUrl ? fileUrl : file;
    backImg.onload = () => {
      ctx.drawImage(backImg, 0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      ctx.fillRect(0, 335, 720, 71);

      ctx.fillStyle = "white";
      ctx.font = "bold 32px Helvetica Neue";
      ctx.fillText(label, 16, 380);
    };

    const iconImg = new Image();
    iconImg.src = icon2x;
    iconImg.onload = () => {
      ctx.drawImage(iconImg, 582, 325, 135, 91);

      const link = document.createElement("a");
      link.download = "bass-wave.jpg";
      link.href = canvas.toDataURL("image/jpg");
      link.click();
    };
  };

  render() {
    const { label, searchValue, file, fileUrl } = this.state;

    return (
      <React.Fragment>
        <Container>
          <Logo src={logo} />
          <Wrapper>
            <InputWrapper>
              <Input
                value={label}
                placeholder="Label name..."
                onChange={this.changeLabel}
              />
              <Search
                onChange={this.changeSearchValue}
                value={searchValue}
              ></Search>
            </InputWrapper>
            <ImageWrapper>
              {this.state.fileUrl ? (
                <ImageBackground src={fileUrl} />
              ) : (
                <ImageBackground src={file} />
              )}
              <Label>{label}</Label>
              <Icon src={icon}></Icon>
            </ImageWrapper>
            <ButtonWrapper>
              <UploadInput>
                Upload
                <input
                  style={{ display: "none" }}
                  accept="image/*"
                  type="file"
                  onChange={e => this.uploadImage(e)}
                />
              </UploadInput>
              <Button onClick={this.downloadImage}>Download</Button>
            </ButtonWrapper>
          </Wrapper>
        </Container>
      </React.Fragment>
    );
  }
}

const UploadInput = styled.label`
  background: #69b4e6;
  padding: 13px 32px;
  border-radius: 10px;
  border: 0;
  color: white;
  font-family: "Roboto Medium", sans-serif;
  font-size: 20px;
  outline: none;
  transition: 0.1s ease;
  cursor: pointer;

  &:hover {
    background: #5492bb;
  }
`;

const Container = styled.div`
  width: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 70px auto;

  @media (max-width: 760px) {
    width: 300px;
  }
`;

const Wrapper = styled.div``;

const Logo = styled.img`
  @media (max-width: 760px) {
    width: 50vw;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 60px;

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  margin: 32px 0;
  position: relative;
`;

const ImageBackground = styled.img`
  width: 100%;
  border: 0;
  background-color: #69b4e6;
  margin: 0;
  padding: 0;
`;

const Label = styled.div`
  color: white;
  font-size: 30px;
  width: 100%;
  box-sizing: border-box;
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 18px;
  position: absolute;
  bottom: 4px;
  left: 0;
  background: rgba(0, 0, 0, 0.5);

  @media (max-width: 760px) {
    font-size: 4vw;
    padding: 2vw 2.3vw;
  }
`;

const Icon = styled.img`
  position: absolute;
  top: 328px;
  left: 582px;

  @media (max-width: 760px) {
    top: 78%;
    left: 78%;
    width: 20vw;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background: #69b4e6;
  padding: 13px 32px;
  border-radius: 10px;
  border: 0;
  color: white;
  font-family: "Roboto Medium", sans-serif;
  font-size: 20px;
  outline: none;
  transition: 0.1s ease;
  cursor: pointer;

  &:hover {
    background: #5492bb;
  }
`;
