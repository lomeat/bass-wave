import React from "react";
import styled from "styled-components";

export const Search = ({ value, onChange }) => {
  return (
    <SearchWrapper>
      <Input
        value={value}
        placeholder="not work yet"
        onChange={e => onChange(e)}
      />
      <Modal id="modal">
        <UnsplashImage></UnsplashImage>
        <UnsplashImage></UnsplashImage>
        <UnsplashImage></UnsplashImage>
      </Modal>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  position: relative;
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

  &:focus + #modal {
    display: block;
  }
`;

const Modal = styled.div`
  position: absolute;
  top: 70px;
  left: -310px;
  width: 630px;
  height: 506px;
  background: white;
  border-radius: 10px;
  border: 1px solid #c7ddec;
  z-index: 2;
  display: none;
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.1);

  &::after {
    content: "";
    position: absolute;
    left: 72%;
    top: -14px;
    width: 0;
    height: 0;
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    border-bottom: 14px solid white;
    clear: both;
  }

  &::before {
    content: "";
    position: absolute;
    left: 71.9%;
    top: -15px;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid #c7ddec;
    clear: both;
  }
`;

const UnsplashImage = styled.img``;
