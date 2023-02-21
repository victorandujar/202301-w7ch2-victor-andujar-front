import Form from "../Form/Form";
import RobotsList from "../RobotsList/RobotsList";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <header className="main-header">
        <h1 className="main-header__title">Robots collection</h1>
      </header>

      <RobotsList />
      <Form />
    </LayoutStyled>
  );
};

export default Layout;
