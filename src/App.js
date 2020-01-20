import React from "react";
import styled from "styled-components";

export class App extends React.Component {
  state = {
    label: "experimental",
    searchValue: ""
  };

  handleChangeLabel = e => {
    e.preventDefault();
    this.setState({ label: e.target.value });
  };

  render() {
    const { label } = this.state;

    return (
      <Wrapper>
        <Container>
          <Header>BASS WAVE</Header>
        </Container>
      </Wrapper>
    );
  }
}
