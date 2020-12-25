const findValues = (nums, sum) => {
  //declare dictionary for hashing
  let dict = {};

  //loops through every item in [] or until match is found
  for (let num of nums) {
    let difference = sum - num;

    //returns when match is found, breaking out of the loop early
    //because we are checking if the difference is contained, duplicates for cases such as ([5, 5], 10) are accounted for
    if (dict[difference] != undefined) return true;

    //adds item if it doesn't already exist
    //because we are adding the value to the dictionary after we check, duplicates are being handled correctly
    //if we checked before then  in the the case of ([5], 10) would be true as well
    if (dict[num] === undefined) dict[num] = difference;
  };

  return false;
};

let ans = findValues([10, 15, 3, 7], 17);

console.log(ans);