import Isotope from "isotope-layout";
import {
  Fragment,
  memo,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { WatsonContext } from "../context/Context";
import SectionContainer from "../layout/SectionContainer";
import SingleWork from "./SingleWork";

const PortfolioIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-items", {
        itemSelector: ".item",
        // layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  // Context
  const { changeSection } = useContext(WatsonContext);

  const [projectInfo, setProjectInfo] = useState({});

  const handleOnClickProject = (_projectInfo) => {
    changeSection("single-work");
    setProjectInfo(_projectInfo);
  };

  return (
    <Fragment>
      <SectionContainer
        pageId="portfolio"
        pageIcon={"lnr lnr-briefcase"}
        pageTitle="Portfolio."
      >
        <div className="row">
          {/*Portfolio Filter*/}
          <div className="col-md-12 portfolio-filter text-center">
            <ul>
              <li
                className={`c-pointer ${activeBtn("*")}`}
                onClick={handleFilterKeyChange("*")}
                data-filter="*"
              >
                All
              </li>
              <li
                className={`c-pointer ${activeBtn("brand")}`}
                onClick={handleFilterKeyChange("brand")}
                data-filter=".brand"
              >
                Full Stack
              </li>
              <li
                className={`c-pointer ${activeBtn("design")}`}
                onClick={handleFilterKeyChange("design")}
                data-filter=".design"
              >
                Scraper
              </li>
              <li
                className={`c-pointer ${activeBtn("graphic")}`}
                onClick={handleFilterKeyChange("graphic")}
                data-filter=".graphic"
              >
                Government
              </li>
            </ul>
          </div>
        </div>
        {/*Portfolio Items*/}
        <div className="row portfolio-items mb-50">
          {/*Portfolio Item*/}
          <div className="item col-lg-4 col-sm-6 brand">
            <a
              className="ajax-link"
              href="#"
              onClick={() =>
                handleOnClickProject({
                  projectTitle: "Glue JS",
                  description:
                    "Glue JS is an automation platform that competes with Zapier.com. My role was to integrate Application through its API. I successfully integrated atleast 100 application like Gmail, Spreadsheets, Slack, Discord, Paypal, Monday.com, Google Analytics,Slack, Facebook Lead Ads, Trello, Typeform, LinkedIn and a lot more.",
                  client: "Alex Taylor",
                  website: "https://www.gluejs.io",
                  imgDirectory1: "img/portfolio/gluejs.jpg",
                  imgDirectory2: "img/portfolio/gluejs2.png",
                  techStack: "NextJS, Node, Typescript",
                })
              }
            >
              <figure>
                <img src="img/portfolio/gluejs3.jpg" alt="" />
                <figcaption>
                  <h4>Glue JS</h4>
                  <p>gluejs.io</p>
                </figcaption>
              </figure>
            </a>
          </div>
          {/*Portfolio Item*/}
          <div className="item col-lg-4 col-sm-6 design">
            <a className="video-link" href="https://youtu.be/Qvvpd6nJuzQ">
              <figure>
                <img src="img/portfolio/facebookads.jpg" alt="" />
                <figcaption>
                  <h4>Facebook ads </h4>
                  <p>Scraper</p>
                  <p>Tech stack: Django, Selenium, Docker, Python, NextJS</p>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="item col-lg-4 col-sm-6 graphic">
            <a
              className="ajax-link"
              href="#"
              onClick={() =>
                handleOnClickProject({
                  projectTitle: "Local Government Website",
                  description: "Our local government website",
                  client: "Claveria Government",
                  website: "http://www.claveriamisor.gov.ph/",
                  imgDirectory1: "img/portfolio/government.jpg",
                  imgDirectory2: "img/portfolio/government2.jpg",
                })
              }
            >
              <figure>
                <img src="img/portfolio/government.jpg" alt="" />
                <figcaption>
                  <h4>Local Government</h4>
                  <p>claveriamisor.gov.ph/.io</p>
                </figcaption>
              </figure>
            </a>
          </div>
          {/*Portfolio Item*/}
          <div className="item col-lg-4 col-sm-6 design">
            <a className="video-link" href="https://youtu.be/JQEmBz8r4_M">
              <figure>
                <img src="img/portfolio/yahoosports.jpg" alt="" />
                <figcaption>
                  <h4>Baseball</h4>
                  <p>Scraper</p>
                </figcaption>
              </figure>
            </a>
          </div>

          <div className="item col-lg-4 col-sm-6 brand">
            <a
              className="ajax-link"
              href="#"
              onClick={() =>
                handleOnClickProject({
                  projectTitle: "Allkeyshop",
                  description:
                    "I managed the scraper, built an inhouse CRM, managed affiliate stores and help my team.",
                  client: "Allkeyshop",
                  website: "https://www.allkeyshop.com",
                  imgDirectory1: "img/portfolio/aks.jpg",
                  imgDirectory2: "img/portfolio/aks2.png",
                  techStack: "PHP, JQuery, Wordpress",
                })
              }
            >
              <figure>
                <img src="img/portfolio/aks.jpg" alt="" />
                <figcaption>
                  <h4>Allkeyshop</h4>
                  <p>allkeyshop.com</p>
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
      </SectionContainer>
      <SingleWork projectInfo={projectInfo} />
    </Fragment>
  );
};
export default memo(PortfolioIsotope);
