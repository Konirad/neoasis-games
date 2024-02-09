import "./testedMechanics.scss";

import horzLine from "../../assets/09testMechanics/horizontalLine.svg";
import vertLine from "../../assets/09testMechanics/verticalLine.svg";

import TestedBlurb from "../TestedBlurb/TestedBlurb";

function TestedMechanics() {
  return (
    <>
      <div className="mechanics">
        <h2 className="mechanics__header">TESTED MECHANICS</h2>
        <img className="mechanics__lineHorz" src={horzLine} />
        <div className="mechanics__blurbCollection">
          <div className="mechanics__blurbCollectionLeft">
            <TestedBlurb rotationOpt={'optA'} blurb={"REPLAYABILITY"} />
            <TestedBlurb rotationOpt={'optB'} blurb={"RICH LORE"} />
            <TestedBlurb rotationOpt={'optA'} blurb={"BALANCING ACT"} />
            <TestedBlurb rotationOpt={'optC'} blurb={"PLAYER AGENCY"} />
          </div>

          <img className="mechanics__lineVert" src={vertLine} />

          <div className="mechanics__blurbCollectionRight">
            <TestedBlurb rotationOpt={'optC'} blurb={"STUNNING VISUALS"} />
            <TestedBlurb rotationOpt={'optA'} blurb={"ENGAGING GAMEPLAY"} />
            <TestedBlurb rotationOpt={'optB'} blurb={"INTERACTIVE COMPONENTS"} />
            <TestedBlurb rotationOpt={'optC'} blurb={"STRATEGIC DEPTH"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TestedMechanics;
