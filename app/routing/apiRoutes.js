//bring in the array of friends objects
const friends = require("../data/friends.js");
const path = require("path");
console.log(path.resolve(__dirname));
//console.log(friends)

//setup the get friend list route
//This will send the friend list in JSON format
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

//setup the survey submission route.
//this will receive the requester's name, photo, and survey responses.
//The data will be process against the list of friends.
  app.post("/api/friends", function(req, res) {
    let closestMatchVal = null;
    let closestMatchFriend = null;
    for (let i = 0; i < friends.length; i++) {
      let valDiffTotal = friends[i].scores //The friends array holds each entry in an object. The scores: holds each friend's survey scores and is compared against requester submission.
        .map((score, j) => Math.abs(score - req.body.scores[j])) //.map used instead of for() loop. ECMA 6 function subtracts friend survey score againt requester's corresponding score. Math.abs() put result into absolute value.
        .reduce((runTotal, nextVal) => runTotal + nextVal, 0); //.reduce calculates the values in resulting array that .map creates. This is the total difference in response values between friend and requester
      //console.log(`${friends[i].name}: ${valDiffTotal}`); 

      //Check to see if closestMatchVal holds a value. If not, add the results of this loop's iteration above.
      //If closestMatchVal is populated, check to see if this result is less than current value. If so, replace with this iteration's value.
      //Also, hold the friend's array index value for future use.
      if (closestMatchVal === null) {
        closestMatchVal = valDiffTotal;
        closestMatchFriend = i;
      } else if (valDiffTotal < closestMatchVal) {
        closestMatchVal = valDiffTotal;
        closestMatchFriend = i;
      }
    }

    //TODO create JSON object with name, photo, and compatibility percentage of closest match. Send results back to requester.
    let match = {
      name: friends[closestMatchFriend].name,
      photo: `/img/${friends[closestMatchFriend].photo}`,   //path.join(path.relative("../../public","../../profilePics"),friends[closestMatchFriend].photo),
      compatVal: `Compatibility Value: ${100 - (closestMatchVal / 40) * 100}%`
    }
    console.log(match);
    res.json(match);
  });
};
