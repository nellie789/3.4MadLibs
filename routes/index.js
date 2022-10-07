var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/*POST form data*/
router.post('/story', function(req, res){
  let body = req.body;
  let newStory = getStory(body);
  res.render('story', {
    newStory: newStory
  });
})

module.exports = router;

function getStory(formData) {
  if (formData.storyChoice === "1") {
    return generateStory1(formData);
  } else if (formData.storyChoice === "2") {
    return generateStory2 (formData);
  } else if (formData.storyChoice === "3") {
    return generateStory3 (formData);
  } else {
    return "invalid";
  }
}

function generateStory1(formData){
  return `Today I went to the zoo. I saw a monkey jumping up and down its tree. He ${formData.verb1} through the large tunnel that led to its cozy ${formData.noun1}. I got some peanuts and passed them through the cage to a gigantic gray ${formData.noun2} towering above my head. Feeding that animal made me hungry. I went to get a ${formData.adjective1} scoop of ice cream. It filled my stomach. Afterwards I had to ${formData.verb2} to catch our bus. When I got home I was happy that I went with my mom for a ${formData.adjective2} day at the zoo.`
}

function generateStory2(formData){
  return `Shhh! Don't tell anyone -- it's a secret! We are having a surprise ${formData.noun1} for my friend. Here's how a ${formData.adjective1} party works: First, ask guests to make a ${formData.adjective2} gift and to arrive early so they don't ${formData.verb1} the surprise. Next, ${formData.verb2} the guest of honor to help you at the day and time of the party, but don't tell them why. Then, arrive for the party with everyone and hide. When the ${formData.noun2} comes, everyone yell "Surprise!" I think surprise parties are awesome!`
}

function generateStory3(formData){
  return `Fall has arrived with a ${formData.verb1} chill in the air. The leaves are turning brown and orange. Night time comes quicker, which usually means ${formData.noun1}! But today, was a ${formData.adjective1} day. My family went to the pumpkin patch. The farmer took us on a hay ${formData.verb2} to a big pumpkin field. We all got to pick a pumpkin, that was exciting! Yes night comes quicker now that it's fall. But tonight my pumpkin sits by my ${formData.noun2}. What a ${formData.adjective2} day!`
}