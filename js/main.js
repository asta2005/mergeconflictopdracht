const oldgreeting = require("./oldgreeting.js");
console.log("merge oefening, leuk!")

oldgreeting.greet()



function HaikuX(){
    console.log("haiku by:","Student1");
    console.log("REGEL1");
    console.log("REGEL2");
    console.log("REGEL3");
    console.log("Student2");
}


 
function basicHaiku()
{console.log (student1)
    return ["We saw a hawk descending."]
}


haikus = [
    basicHaiku()
]

function randomHaiku()
{

    let i = Math.floor(Math.random(haikus.length));
    return haikus[i];
}

function start()
{
    console.log("starting main")

    console.log(randomHaiku())

}

start()
