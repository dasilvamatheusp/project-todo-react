import styled from 'styled-components'

type ContainerProps = {
  done: boolean;
}

export const Container = styled.div<ContainerProps>
  `
  display: flex;
  background-color: #20212C;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;

  input {
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }

  label {
    color: #ccc;
    text-decoration: ${(props) => (props.done) ? 'line-through' : 'initial'};
  }
`
