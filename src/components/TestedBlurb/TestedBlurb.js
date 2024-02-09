import "./testedBlurb.scss";

function TestedBlurb({ blurb, rotationOpt }) {
  return (
    <>
      <p className={`blurb__container ${rotationOpt}`}>{blurb}</p>
    </>
  );
}

export default TestedBlurb;
