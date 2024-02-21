//styles
import "./sphere.scss";

//assets
import sphereBright from "../../assets/14spheres/BrightSharp.svg";
import sphereMellow from "../../assets/14spheres/mellowSharp.svg";

function Sphere() {
  return <img src={sphereBright} className="sphere__bright" />;
}

export default Sphere;
