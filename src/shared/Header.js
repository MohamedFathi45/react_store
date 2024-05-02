import "../styles/header.css";
import Button from "../shared/Button";

const Header = ({
  headerText,
  btn1Text,
  btn2Text,
  button1Clicked,
  button2Clicked,
  button1Id,
  button2Id,
}) => {
  return (
    <header>
      <div className="header">
        <div className="header-text">{headerText}</div>

        <div className="right-part">
          <div className="header-button">
            <Button id={button1Id} text={btn1Text} onClick={button1Clicked} />
          </div>

          <div className="header-button">
            <Button id={button2Id} text={btn2Text} onClick={button2Clicked} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
