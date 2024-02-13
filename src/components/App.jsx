import React from "react";
// import Snowfall from "./Snowfall/Snowfall";

import Phonebook from './Phonebook/Phonebook';


// const isWinterMonth = () => {
//   const currentDate = new Date();
//   const month = currentDate.getMonth() + 1;
//   return month === 12 || month === 1 || month === 2;
// }

export const App = () => {
//  const isWinter = isWinterMonth();
  return (
    <div>
      {/* {isWinter && <Snowfall />} */}
      <Phonebook />
    </div>
  );
};


