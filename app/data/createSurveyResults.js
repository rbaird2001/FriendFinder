//The purpose of this file is to prepopulate friends.js with usable data at the start.

const fs = require("fs")

const friendNames = ["Ettie", "Amanda", "Loma", "Jacelyn", "Kerrie", "Tresa", "Letha", "Tempie", "Clarinda", "Ilana", "Deana", "Cassaundra", "Lula", "Aretha", "Arletha", "Leona", "Grazyna", "Terrie", "Lakesha", "Fonda"]
var friends =[];
for (i = 0; i < friendNames.length; i++) {
    friends.push({
        name: friendNames[i],
        photo: `${i}.jpg`,
        gender: 'f',
        scores: [Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1)]
    })
}
var friendsStr = 
`var friendsStr='${JSON.stringify(friends)}'\n
friends = JSON.parse(friendsStr); \n
module.exports = friends`;

fs.unlink("friends.js",function(err){
   if(err) throw err; 
   fs.writeFileSync("friends.js",friendsStr);
});
