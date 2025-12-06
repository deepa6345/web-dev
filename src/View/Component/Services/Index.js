
import { ServicesData } from "../DummyData/landingParaData";
import "../../../Style/Component/Services/Style.css";

function Services() {
  return (
    <div >
      <h1 className="head">What's Include</h1>
      {ServicesData.map((item) => (
        <div className="someone">
          
          <h3 >{item.title}</h3>
          <p >{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Services;
