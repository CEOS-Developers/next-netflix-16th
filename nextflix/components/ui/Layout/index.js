import styled from 'styled-components';
import Footer from '../Footer';

const Box = styled.div`
  position: relative;
  display: flex;
  width: 400px;
  height: 100vh;
  background-color: black;
  margin: auto;
  min-width:375px
  min-height: 100%;
  padding-bottom: 67px;
`;
const Children = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: scroll;
  z-index: 997;
  padding-bottom: 8vh;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Box>
        <Children>{children}</Children>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
