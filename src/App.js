import React from "react";
import styled from "styled-components";

import logo from "./img/logo.png";
import example from "./img/example.jpg";

export class App extends React.Component {
  state = {
    label: "experimental",
    // searchValue: "",
    file: example,
    fileUrl: null
  };

  changeLabel = e => {
    e.preventDefault();
    this.setState({ label: e.target.value });
  };

  // handleChangeSearchValue = e => {
  //   e.preventDefault();
  //   this.setState({ searchValue: e.target.value });
  // };

  imageChange = e => {
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

  render() {
    const { label, file, fileUrl } = this.state;

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
              {/* <Input
                value={searchValue}
                placeholder="Search on Unsplash..."
                onChange={this.handleChangeSearchValue}
              /> */}
            </InputWrapper>
            <ImageWrapper>
              {this.state.fileUrl ? (
                <Image src={fileUrl} />
              ) : (
                <Image src={file} />
              )}
              <Label>{label}</Label>
            </ImageWrapper>
            <ButtonWrapper>
              <UploadInput>
                Upload
                <input
                  style={{ display: "none" }}
                  accept="image/*"
                  id="uploadImageInput"
                  type="file"
                  onChange={e => this.imageChange(e)}
                />
              </UploadInput>
              <Button>Download</Button>
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
  font-family: "Roboto", sans-serif;
  font-weight: 600;
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
`;

const Wrapper = styled.div``;

const Logo = styled.img`
  background: gray;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 60px;
`;

const Input = styled.input`
  width: 320px;
  box-sizing: border-box;
  padding: 10px 16px;
  border: 1px solid #c0e1f6;
  outline: none;
  border-radius: 10px;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  transition: 0.2s ease;

  &:focus {
    border: 1px solid #58a7dc;
  }
`;

const ImageWrapper = styled.div`
  margin: 32px 0;
  position: relative;
`;

const Image = styled.img`
  width: 720px;
  height: 405px;
  border: 0;
  background-color: #69b4e6;
  margin: 0;
  padding: 0;
`;

const Label = styled.div`
  color: white;
  font-size: 26px;
  width: 720px;
  box-sizing: border-box;
  font-family: "Helvetica", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  padding: 18px 16px;
  position: absolute;
  bottom: 4px;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
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
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 20px;
  outline: none;
  transition: 0.1s ease;
  cursor: pointer;

  &:hover {
    background: #5492bb;
  }
`;
