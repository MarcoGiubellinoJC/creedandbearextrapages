import React from "react";

// Components
import { Container, SimpleSlider } from "@hybris-software/ui-kit";

// Libraries
import { useLocation } from "react-router-dom";

// Style
import Style from "./PartnersSlider.module.css";

export const PartnersSlider = ({ data }) => {
  const { pathname } = useLocation();
  return (
    <Container>
      <div className={Style.partnerSlide}>
        <SimpleSlider
          paginationButtons={false}
          autoPlay={false}
          autoPlaySpeed={2000}
          breakPoints={{
            1441: { slidesPerView: 4 },
            1200: { slidesPerView: 3 },
            992: { slidesPerView: 2 },
            558: { slidesPerView: 1 },
          }}
        >
          {data.map((data, id) => {
            return (
              <div
                className={
                  pathname === "/solution"
                    ? Style.logoPartnerSolution
                    : Style.logoPartner
                }
                key={id}
              >
                <a href={data.link} target="_blank" rel="noreferrer">
                  <img src={data.src} alt="partners" />
                </a>
              </div>
            );
          })}
        </SimpleSlider>
      </div>
    </Container>
  );
};
