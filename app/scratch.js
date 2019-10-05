let user1 = [5, 1, 4, 4, 5, 1, 2, 5, 4, 1];
let friends = [
  { name: "sid", scores: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1] },
  { name: "nancy", scores: [5, 1, 5, 5, 1, 1, 1, 1, 4, 2] }
];
let closestMatchVal = null;
let closestMatchFriend = null;

//console.log(user1[0]);

for (let i = 0; i < friends.length; i++) {
  let scores = friends[i].scores
  let valDiffs = []
  // let valDiffTotal = friends[i].scores
  //   .map((score, j) => Math.abs(score - user1[j]))
  //   .reduce((runTotal, nextVal) => runTotal + nextVal, 0);
  for (j = 0; j < scores.length; j++) {
    valDiffs.push(Math.abs(scores[j] - user1[j]));
    
  }
  console.log(valDiffs);
  let valDiffTotal = valDiffs.reduce(function(a,b){return a + b},0);
  console.log(valDiffTotal);
  if (!closestMatchVal) {
    closestMatchVal = valDiffTotal;
    closestMatchFriend = i;
  } else if (valDiffTotal < closestMatchVal) {
    closestMatchVal = valDiffTotal;
    closestMatchFriend = i;
  }
}
console.log(friends[closestMatchFriend].name);
console.log(closestMatchVal);

//console.log(friends[closestMatchFriend]);
//console.log(closestMatchVal);
