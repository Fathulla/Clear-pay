//@ts-nocheck

import "swiper/css";
import { SwiperSlide } from "swiper/react";
import { ServiceElem } from "./ServiceElem";
import { AppSwiper } from "../UI/AppSwiper/AppSwiper";
import { servicePaymentsData } from "./Transfers.data";
import { SCServicePayments } from "./TransfersElems.style";

export const ServicePayments = () => {
  return (
    <SCServicePayments>
      <h3>Оплата услуг</h3>
      <AppSwiper spaceBetween={32} slidesPerView={5}>
        {servicePaymentsData.map((service) => (
          <SwiperSlide key={service.title}>
            <ServiceElem
              serviceIcon={service.iconName}
              serviceTitle={service.title}
            />
          </SwiperSlide>
        ))}
      </AppSwiper>
    </SCServicePayments>
  );
};
