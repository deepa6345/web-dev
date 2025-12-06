
import { header } from "../DummyData/landingParaData";
import Paragraph from "../Paragraph/Index";
import "../../../Style/Component/Header/Style.css";

function Header() {
  return (
    <div className="container">
      <h1>
        {header.head}
        <br />
     
      </h1>
      <Paragraph text={header.p} />
    </div>
  );
}

export default Header;


