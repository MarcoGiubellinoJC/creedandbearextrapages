import React from "react";

// icons
import CreedLogo from "../../../Assets/logos/CreedLogo.svg";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

// Images
import SheikhOffice from "../../../Assets/images/SheikhOffice.png";
import ampBG from "../../../Assets/images/ampBG1.svg";
import halfAmpBG from "../../../Assets/images/halfAmpBG.svg";
import halfAMP from "../../../Assets/images/halfAMP.png";

// paths
import { paths } from "../../../Data/routes";

//Libraries
import { Container, Row, Col } from "@hybris-software/ui-kit";
import { Link } from "react-router-dom";

// STyles
import Style from "./Footer.module.css";

const Footer = () => {
  //Variables
  const d = new Date();
  let year = d.getFullYear();

  // Functions
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={Style.Wrapper}>
      <div className={Style.amp}>
        <img src={ampBG} alt="" />
      </div>

      <Container>
        <div className={Style.footer}>
          <Row
            columnGap={{
              horizontal: {
                xs: 20,
              },
              vertical: {
                xs: 50,
              },
            }}
          >
            <Col xl={5}>
              <div className={Style.logoWrapper}>
                <div
                  className={Style.logo}
                  style={{ backgroundImage: `url(${CreedLogo})` }}
                ></div>
                <div className={Style.moto}>
                  Ubora Office Tower Marasi Dr Business Bay Office 46 Dubai UAE
                </div>
                <div className={Style.moto}>
                  Poststrasse 24CH6300 Zug, Switzerland Uraniastrasse 34CH8001
                </div>
                <div className={Style.moto}>Zurich, Switzerland</div>
              </div>
            </Col>
            <Col xl={7}>
              <div className={Style.rightWrapper}>
                <div className={Style.siteMap}>
                  <h4>SITEMAP</h4>
                  <Link to="/" onClick={scrollToTop}>
                    Homepage
                  </Link>
                  <Link to={paths.main.strategy} onClick={scrollToTop}>
                    Our Strategy
                  </Link>
                  <Link to={paths.main.solution} onClick={scrollToTop}>
                    Solution
                  </Link>
                  {/* <Link to={paths.main.clientSolution} onClick={scrollToTop}>
                    Clients Solution
                  </Link> */}

                  {/* <Link to="/" onClick={scrollToTop}>
                    Company
                  </Link>
                  <Link to="/" onClick={scrollToTop}>
                    Careers
                  </Link> */}
                  <Link to={paths.main.contact} onClick={scrollToTop}>
                    Contact
                  </Link>
                </div>
                <div className={Style.legal}>
                  <h4>LEGAL</h4>
                  <Link to="/" onClick={scrollToTop}>
                    Support
                  </Link>
                  <Link to="/" onClick={scrollToTop}>
                    FAQS
                  </Link>
                  <Link to="/" onClick={scrollToTop}>
                    Terms & Condition
                  </Link>
                  <Link to="/" onClick={scrollToTop}>
                    Privacy policy
                  </Link>
                </div>
                <div className={Style.touch}>
                  <div>
                    <h4>GET IN TOUCH</h4>
                    <p>Ubora Office Tower </p>
                    <p> Marasi Dr Business</p> <p>Bay</p>{" "}
                    <p>Office 45 Dubai UAE</p>
                  </div>
                  <div className={Style.socials}>
                    <a
                      href="https://twitter.com/Creed_Bear"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn className={Style.mediaIcon} />
                    </a>
                    {/* <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebookF className={Style.mediaIcon} />
                    </a> */}
                    <a
                      href="https://www.linkedin.com/company/creed-and-bear/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTwitter className={Style.mediaIcon} />
                    </a>
                    {/* <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GrInstagram className={Style.mediaIcon} />
                    </a> */}
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <div className={Style.partnership}>
            <div className={Style.creedInfo}>
              Creed & Bear has been incorporated in partnership with Protocol33
              and the Private Office of His Highness Sheikh Hamdan Bin Ahmad Al
              Maktoum.
            </div>
            <div
              className={Style.office}
              style={{
                backgroundImage: `url(${SheikhOffice})`,
              }}
            ></div>
          </div>
          <div className={Style.bottom}>
            <div className={Style.separator}></div>
            <div className={Style.copyRights}>
              © {year} Creed&Bear. All rights reserved.
            </div>
          </div>
        </div>
      </Container>
      <div className={Style.halfAmp}>
        <img src={halfAMP} alt="" />
      </div>
    </div>
  );
};

export default Footer;
