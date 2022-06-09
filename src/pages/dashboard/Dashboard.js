import { useEffect } from "react";
import {
  BodyLeft,
  BodyRight,
  BodyFull,
} from "../../styled/Main";




const Dashboard = ({ setNavTitle }) => {
  useEffect(() => {
    setNavTitle("Dashboard");

    // eslint-disable-next-line
  }, []);
  return (
    <BodyFull>
        
    </BodyFull> 
  );
};

export default Dashboard;
