//styles
import "./sphere.scss";

//assets
import sphereBright from "../../assets/14spheres/BrightSharp.svg";

function Sphere() {
  return (
    <img
      src={sphereBright}
      className="sphere__bright"
      alt="a circle that floats up and down"
    />
  );
}

export default Sphere;
