def findValues(nums, sum):
  #declare dictionary for hashing
  dict = {}

  #loops through EVERY item in [], even after it finds a match
  for element in nums: 
    difference = sum - element

    #could break loop if I throw and caught an exception but did not
    #because we are checking if the difference is contained, duplicates for cases such as ([5, 5], 10) are accounted for
    if (dict.get(difference) is not None): 
      return True

    #adds item if it doesn't already exist
    #because we are adding the value to the dictionary after we check, duplicates are being handled correctly
    #if we checked before then  in the the case of ([5], 10) would be true as well
    if (dict.get(element) is None):
       dict[element] = difference

  return False

result = findValues([10, 15, 3, 7], 14)

print(result)