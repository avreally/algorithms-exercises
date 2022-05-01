/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
  let arrayElementsSwapped;

  // counting how many times the while loop went to optimize sorting by not comparing
  // the element / elements of the array that are in correct places at the end of the array
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

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
