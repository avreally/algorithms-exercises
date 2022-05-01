import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(array) {
  // do cool stuff here

  // call snapshot any time you do anything to the array
  // it's okay if you call it with duplicate value array,
  // it will deduplicate for you

  function bubbleSort(nums) {
    let arrayElementsSwapped;

    // counting how many times the while loop went to optimize sorting by not comparing
    // the element / elements in array that are in correct places at the end of the array
    let step = 1;

    function swapElements() {
      arrayElementsSwapped = false;
      for (let i = 0; i < nums.length - step; i++) {
        if (nums[i] > nums[i + 1]) {
          arrayElementsSwapped = true;

          let storedValue = nums[i];
          nums[i] = nums[i + 1];
          nums[i + 1] = storedValue;
        }
      }
      step++;
    }

    swapElements();

    while (arrayElementsSwapped === true) {
      swapElements();
    }

    return nums;
  }

  bubbleSort(array);

  snapshot(array);
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(10)));
  done();
  return <App />;
}
