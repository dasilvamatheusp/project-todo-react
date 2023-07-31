import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #555;
  border-radius: 5px;
  overflow: hidden;
  margin: 20px 0;
  justify-content: space-between;

  .image {
    margin-right: 5px;
    cursor: pointer;
  }

  .input_container {
    display: flex;
    flex: 1;
    padding: 9px 10px;
  }

  input {
    border: 0;
    background: transparent;
    outline: 0;
    font-size: 20px;
    color: #fff;
    width: 100%;
  }

  span {
    display: flex;
    align-items: center;
    text-align: center;
    line-height: 1em;
    height: 43px;
    width: 100px;
    padding-bottom: 2px;
    background-color: white;
    cursor: pointer;
    color: black;
    font-weight: bold;
  }
  span:hover {
    color: white;
    background-color: #555;
  }
`;
