import styled from "styled-components"
import pix from "../assets/exam.jpg"
import { Link } from "react-router-dom"
const Instruction = () => {
  return (
    <div>
        <Container>
            <Warpper>
                <Box>
                    <p style={{marginBottom:"5px"}}>Welcome!!!</p>
                    <h4>Read the following instructions carefully before you begin </h4>
                    <div>
                        <p>1.</p>
                        <span>Please ensure that all electronic devices are switched off and stored away</span>
                    </div>
                    <div>
                        <p>2.</p>
                        <span style={{marginBottom:"3px"}}>Read each question carefully before you answer </span>
                    </div>
                    <div>
                        <p>3.</p>
                        <span>You have 30 minutes for this exam and a timer would be provided at the top right corner of your screen immediately you begin so pace yourself accordingly </span>
                    </div>
                    <div>
                        <p>4.</p>
                        <span>Avoid any form of cheating or misconduct as it may lead in disciplinary actions</span>
                    </div>
                    <div>
                        <p>5.</p>
                        <span> In case of any technical issues during your exam raise your hand to notify the invigilator for assistance </span>
                    </div>
                    <div>
                        <p>6.</p>
                        <span>Please ensure that you logIn your Gmail account to this system so that you kind recieve a code to get started</span>
                    </div>
                    <p style={{marginTop:"5px"}}>GOOD LUCK!!!!</p>
                   <Link to={"/dashboard"}>
                   <button>Get Started</button>
                   </Link>
                </Box>
            </Warpper>
        </Container>
    </div>
  )
}

export default Instruction

const Box = styled.div`
  width: 400px;
  min-height: 100px;
  background-color: rgb(24, 27, 51);
  color: white;
  border-radius: 15px;
  padding: 30px;
  display: flex;
  flex-direction: column;


  button {
    width: 100%;
    height: 40px;
    border: none;
    background-color: white;
    color: rgb(24, 27, 51);
    font-size: 17px;
    border-radius: 10px;
    margin-top: 20px;
    transition: all 350ms ease-in;
    cursor: pointer;

    &:hover {
      background-color: rgb(45, 48, 68);
      color: white;
    }
  }

  h4{
    margin: 0;
  }

  p{
    margin: 0;
  }

  span{
    margin: 0;
    margin-top: 25px;
    margin-left: 5px;
  }

  div{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Warpper = styled.div`
width: 100%;
height: 110vh;
background-color:rgba(31, 28, 59, 0.6);
display: flex;
align-items: center;
justify-content: center;
`

const Container = styled.div`
width: 100%;
height: 110vh;
background-image: url(${pix});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`