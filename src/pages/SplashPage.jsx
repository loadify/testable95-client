import { Link } from "react-router-dom";

import Button from "../components/common/Button";

import { SplashPageTitle, SplashPageContainer } from "../style/SplashPageStyle";

const SplashPage = () => {
  return (
    <SplashPageContainer>
      <SplashPageTitle>Testable 95</SplashPageTitle>
      <Link to="/blocks" style={{ textDecoration: "none" }}>
        <Button text="시작" />
      </Link>
    </SplashPageContainer>
  );
};

export default SplashPage;
