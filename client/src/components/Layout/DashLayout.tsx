
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Side from "./Side";
import DashHeader from "./DashHeader";

const DahLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Side />
      <Hold>
        <DashHeader />
        <Outlet />
      </Hold>
    </div>
  );
};

export default DahLayout;

const Hold = styled.div`
  width: calc(100% - 300px);

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;