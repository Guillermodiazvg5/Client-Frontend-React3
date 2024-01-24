import React from "react";

import CarouselHealth from "./CarouselHealth";
import FrutosSecos from "../assets/FrutosSecos.jpg";

export default function SloganImage() {
  return (
    <div>
      <div class="row mb-1 mt-1 second-row  ">
        <div class="col-6   ">
          <h1 class="h1-p-preline text-dark">
            Eat clean, feel
            <span class="span-color">great</span>
          </h1>

          <p class="h1-p-preline text-dark">
            {" "}
            Your body is a temple, and it deserves to be treated with respect.
            Nourish it with wholesome foods that will keep you feeling great.{" "}
          </p>

          <div class=" col text-start mt-5">
            <button
              type="button"
              class=" text-dark btn btn-outline-warning font-weight-bold  "
            >
              Discover Now
            </button>
          </div>
        </div>

        <div class="col-6  text-dark d-flex align-items-center justify-content-center text-center second-column ">
          <CarouselHealth></CarouselHealth>
        </div>
      </div>
    </div>
  );
}
