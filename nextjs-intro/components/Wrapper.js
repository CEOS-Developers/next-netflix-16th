import styled from 'styled-components';

export default function Wrapper({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  align-items: center;
  justify-content: center;
  margin-right: 300px;
  background-color: black;
`;
