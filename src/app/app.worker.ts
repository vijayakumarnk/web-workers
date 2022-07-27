/// <reference lib="webworker" />

import { PrimeCalculator } from "./prime.component";

addEventListener('message', ({ data }) => {
  
  const response = PrimeCalculator.findNthPrimeNumber(parseInt(data));
  postMessage(response);
  console.log(response);
});
