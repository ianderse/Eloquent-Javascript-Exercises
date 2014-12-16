// The sum of a range

function range(start, end) {
  nums = [];
  while(start <= end) {
    nums.push(start);
    start++;
  };
  return nums;
};

function sum(num_array) {
  total = 0;
  while(num_array.length > 0) {
    total += num_array.pop();
  };
  return total;
}
// console.log(range(1,10));
console.log(sum(range(1, 10)));
