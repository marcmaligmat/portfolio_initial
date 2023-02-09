import { useContext, useEffect, useState } from "react";
import { WatsonContext } from "../context/Context";

const SingleWork = ({ projectInfo }) => {
  const {
    projectTitle,
    description,
    client,
    website,
    imgDirectory1,
    imgDirectory2,
  } = projectInfo;

  console.log(projectInfo);

  const [loader, setLoader] = useState(true);
  const { section, changeSection } = useContext(WatsonContext);
  useEffect(() => {
    setTimeout(() => {
      if (section === "single-work") {
        setLoader(false);
      } else {
        setLoader(true);
      }
    }, 500);
  }, [section]);
  return (
    <div className={`ajax-portfolio-popup ${loader ? "" : "on"}`}>
      <span
        className="ajax-loader"
        style={{ display: loader ? "block" : "none" }}
      />
      <div className="navigation-wrap">
        <span
          className="popup-close"
          onClick={() => changeSection("portfolio")}
        >
          <i className="fas fa-times-circle" />
        </span>
      </div>
      <div className="content-wrap">
        <div className="popup-content">
          <meta charSet="UTF-8" />
          <title>Single Ajax Portfolio</title>
          <div className="single-work">
            <div className="container">
              <div className="row text-center">
                <div className="col-md-10 offset-md-1 mb-40">
                  <h1 className="title mb-30">{projectTitle}</h1>
                  <p className="mb-30">{description}</p>
                  <ul className="information">
                    <li>
                      <span className="title">Client:</span> {client}
                    </li>
                    <li>
                      <a href={website} target="__blank">
                        <span className="title">Website:</span> {website}
                      </a>
                    </li>
                  </ul>
                  <figure className="mt-30">
                    <img src={imgDirectory1} alt="" />
                  </figure>
                  <figure className="mt-30">
                    <img src={imgDirectory2} alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleWork;
