test1 = [5, 7, 1, 1, 2, 3, 22];
test2 = [1, 1, 1, 1, 1];
test3 = [1, 5, 1, 1, 1, 10, 15, 20, 100];

/* 
the idea is to create a hash whith keys for each number of items 
in the combinations (Keys from 1 up to array lentgth)
and after that make a loop starting in 1 an check if the number 
is in some of the sets in case if it is not I want to return that value
*/
function getSmalestImpossibleCombination(coins) {
  const hash = {
    1: new Set(coins),
  };

  for (let i = 2; i <= coins.length; i++) {
    hash[i] = new Set();

    for (let i = 0; i < coins.length; i++) {}
  }
}

getSmalestImpossibleCombination(test1);
getSmalestImpossibleCombination(test2);
getSmalestImpossibleCombination(test3);

