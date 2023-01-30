import React from "react";

// components
import Navbar from "../../../Components/UIKit/Navbar/Navbar";
import Spacer from "../../../Components/UIKit/Spacer/Spacer";
import Link from "../../../Components/UIKit/Link/Link";

// libs
import { Container } from "@hybris-software/ui-kit";

// Styles
import Style from "./NotFoundView.module.css";

const NotFoundView = () => {
  return (
    <>
      <Navbar />
      <Container className={Style.notFound}>
        <div className={Style.image} />
        <Spacer lg />
        <h1 className={Style.heading}>Page not found &nbsp; :(</h1>
        <Spacer md />
        <p className={Style.content}>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Spacer lg />
        <Link to="/" dark>
          <span className={Style.link}>Back to Home</span>
        </Link>
        <Spacer xl />
      </Container>
    </>
  );
};

export default NotFoundView;
