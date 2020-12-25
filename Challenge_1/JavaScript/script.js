const findValues = (nums, sum) => {
  //declare dictionary for hashing
  let dict = {};
  let ans = false;

  //loops through EVERY item in [], even after it finds a match
  nums.forEach(element => {
    let difference = sum - element;

    //could break loop if I throw and caught an exception but did not
    //because we are checking if the difference is contained, duplicates for cases such as ([5, 5], 10) are accounted for
    if (dict[difference] != undefined) ans = true;

    //adds item if it doesn't already exist
    //because we are adding the value to the dictionary after we check, duplicates are being handled correctly
    //if we checked before then  in the the case of ([5], 10) would be true as well
    if (dict[element] === undefined) dict[element] = difference;

  });

  return ans;
};

let ans = findValues([10, 15, 3, 7, 7], 14);

console.log(ans);