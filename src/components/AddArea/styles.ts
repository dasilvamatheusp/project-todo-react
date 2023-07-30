import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #555;
  border-radius: 10px;
  padding: 10px;
  margin: 20px 0;

  .image {
    margin-right: 5px;
    cursor: pointer;
  }

  input {
    border: 0;
    background: transparent;
    outline: 0;
    font-size: 1.3em;
    color: #fff;
    flex: 1;
  }
`