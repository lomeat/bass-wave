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
  top: 60px;
  left: -310px;
  width: 630px;
  height: 506px;
  background: white;
  border-radius: 10px;
  border: 1px solid #c7ddec;
  z-index: 2;
  display: none;
`;

const UnsplashImage = styled.img``;
