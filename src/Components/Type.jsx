import Typewriter from "typewriter-effect";
import "./Type.css"

function Type() {
  return (
    <>
    <h2 className="type" id="type" >
    <Typewriter
      options={{
        strings: [
          "Site Reliability Engineer",
          "DevOps Engineer",
          "Cloud Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </h2>
    </>
  );
}

export default Type;