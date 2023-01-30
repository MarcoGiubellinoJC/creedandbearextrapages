import React from "react";

// lIbraries
import { Container, Button } from "@hybris-software/ui-kit";

//icons
import { AiOutlineArrowRight } from "react-icons/ai";

// Styles
import Style from "./ContactUs.module.css";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();
  return (
    <div className={Style.contactWrapper}>
      <Container>
        <div className={Style.wrapper}>
          <div className={Style.insight}>
            <p>
              Quick insight to the big questions
              <AiOutlineArrowRight className={Style.arrow} />
            </p>
            <p>Contact us</p>
          </div>
          <div className={Style.buttonWrapper}>
            <Button onClick={() => navigate("/contact")}>Contact Us</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
