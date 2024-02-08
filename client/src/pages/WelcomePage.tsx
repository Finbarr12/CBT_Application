import styled from "styled-components";
import pix from "../assets/exam.jpg";
const WelcomePage = () => {
  return (
    <>
      <Container>
        <Wrapper></Wrapper>
      </Container>
    </>
  );
};

export default WelcomePage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(31, 28, 59, 0.6);
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${pix});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
