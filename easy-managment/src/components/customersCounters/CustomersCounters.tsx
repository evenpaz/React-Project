import { useEffect, useState } from "react";
import "./customersCounters.scss";

type CustomersCountersType = {
  counters: { title: string; num: number }[];
};

const CustomersCounters = ({ counters }: CustomersCountersType) => {
  return (
    <div className="customersCounters">
      {counters.map((counter) => {
        return (
          <div className="counter">
            <h2>{counter.title}</h2>
            <h2>{counter.num}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default CustomersCounters;
