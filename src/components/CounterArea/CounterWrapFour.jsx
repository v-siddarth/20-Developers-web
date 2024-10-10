import React from "react";
import CounterWrapFourItem from "./CounterWrapFourItem";

const CounterWrapFour = () => {
  return (
    <div className="counter-item-wrap-four">
      <ul className="list-wrap">
        <li>
          <CounterWrapFourItem
            amount={12}
            suffix="+"
            title={
              <>
                Projects <span>Delivered</span>
              </>
            }
          />
        </li>

        <li>
          <CounterWrapFourItem
            amount={18}
            suffix="+"
            title={
              <>
                Satisfied <span>Clients</span>
              </>
            }
          />
        </li>

        <li>
          <CounterWrapFourItem
            amount={14}
            suffix="+"
            title={
              <>
                Custom <span>Solutions</span>
              </>
            }
          />
        </li>

        <li>
          <CounterWrapFourItem
            amount={10}
            suffix="+"
            title={
              <>
                Innovative <span>Products</span>
              </>
            }
          />
        </li>
      </ul>
    </div>
  );
};

export default CounterWrapFour;
