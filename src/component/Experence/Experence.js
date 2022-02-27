import React from "react";
import ExperenceArtical from "./ExperenceArtical";
import "./Experence.css";

export default function Experence() {
  return (
    <section class="enperence-section text-center my-3 text-light">
      <div class="container-fluid">
        <div class="row">
          <ExperenceArtical
            icon="fas fa-stethoscope"
            title="Skilled Doctors"
            start="0"
            end="52963"
            bgColor="ex-bg-1"
          />
          <ExperenceArtical
            icon="fas fa-stethoscope"
            title="Happy Patients"
            start="0"
            end="12000"
            bgColor="ex-bg-2"
          />
          <ExperenceArtical
            icon="fas fa-stethoscope"
            title="Years Experience"
            start="0"
            end="40000"
            bgColor="ex-bg-3"
          />
          <ExperenceArtical
            icon="fas fa-stethoscope"
            title="Years Experience"
            start="0"
            end="10000"
            bgColor="ex-bg-4"
          />
          <ExperenceArtical
            icon="fas fa-stethoscope"
            title="Variety of Drugs"
            start="0"
            end="3000"
            bgColor="ex-bg-5"
          />
        </div>
      </div>
    </section>
  );
}
