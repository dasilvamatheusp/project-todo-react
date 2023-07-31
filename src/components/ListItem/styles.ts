import styled from 'styled-components'

type ContainerProps = {
  done: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  background-color: #20212c;
  margin-top: 10px;
  padding: 9px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;

  .text {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .icon {
    cursor: pointer;
    font-size: 1.1em;
  }

  input {
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }

  label {
    color: #ccc;
    text-decoration: ${(props) => (props.done ? "line-through" : "initial")};
  }

`;
