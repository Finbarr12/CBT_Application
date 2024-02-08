import styled from "styled-components";
import pix from "../assets/exam.jpg";
const WelcomePage = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <h1>Use of English (GST 104)</h1>
            <p>Online CBT Examination</p>
          </Left>
          <Right>
            <h3>Enter Your Credentials</h3>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default WelcomePage;

const Left = styled.div`
  color: white;
  margin-top: 250px;
  margin-left: 89px;

  h1 {
    margin: 0;
    font-size: 50px;
  }

  p {
    font-size: 15px;
  }
`;
const Right = styled.div`
  color: white;
  margin-right: 89px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(31, 28, 59, 0.6);
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${pix});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
