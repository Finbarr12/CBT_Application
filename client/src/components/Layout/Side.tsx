import styled from "styled-components";
import logo from "../../assets/exam.jpg";
import { NavLink} from "react-router-dom";
import { ImSortNumbericDesc } from "react-icons/im";
import { MdMarkEmailRead } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
// import Swal from "sweetalert2";

const Side = () => {
//   const navigate = useNavigate();
  return (
    <Container>
        <Box>
            <Circle>
            <img src={logo} alt="" />
            </Circle>
            <span>Kilmore College</span>
        </Box>
      <NavLink
        to="/dashboard"
        style={({ isActive }) => {
          return {
            background: isActive ? "#f5f5f5" : "",
            textDecoration: "none",
            color: isActive ? "red" : "",
            width: "100%",
            height: "50px",
          };
        }}
      >
        <Holder style={{ marginTop: "24px", }}>
          <Icon size={26} />
          <span>Username</span>
        </Holder>
      </NavLink>
      <NavLink
        to="/dashboard"
        style={({ isActive }) => {
          return {
            background: isActive ? "#f5f5f5" : "",
            textDecoration: "none",
            color: isActive ? "red" : "",
            width: "100%",
            height: "50px",
          };
        }}
      >
        <Holder style={{ marginTop: "24px" }}>
          <Icons size={26} />
          <span>Email</span>
        </Holder>
      </NavLink>
      <NavLink to={""}
        style={({ isActive }) => {
          return {
            background: isActive ? "#f5f5f5" : "",
            textDecoration: "none",
            color: isActive ? "red" : "",
            width: "100%",
            height: "50px",
          };
        }}
      >
        <Holder style={{ marginTop: "24px" }}>
          <Iconss size={26}/>
          <span>Matric Number</span>
        </Holder>
      </NavLink>
    </Container>
  );
};

export default Side;

const Circle = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
object-fit: cover;
border: 1px solid white;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;

img{
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
}
`

const Box = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: white;
gap: 10px;
margin-top: 30px;

span{
    font-size: 20px;
    font-weight: 800;
    font-family: cursive;
}
`

const Icon = styled(FaUserCheck )`
  margin-left: 30px;
`;

const Icons = styled(MdMarkEmailRead )`
  margin-left: 30px;
`;

const Iconss = styled(ImSortNumbericDesc)`
  margin-left: 30px;
`;

const Holder = styled.div`
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  height: 50px;
  color: white;
  cursor: pointer;
  margin-top: 19px;
  transition: all 350ms ease-in;
  :hover {
    background-color: rgba(255, 255, 255, 0.7);
    color: black;
  }

  span {
    font-size: 20px;
    margin-left: 16px;
  }
`;

const Container = styled.div`
  width: 300px;
  background-color: #181B33;
  height: 100vh;
  position: sticky;
  top: 0%;
  border-right: 1px solid white;

  @media screen and (max-width: 900px) {
    display: none;
  }

  img {
    height: 70px;
    margin-left: 15px;
    margin-top: 15px;
  }
`;