const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText = `It was 94 fahrenheit outside in :insertx:, normally there is nothing to do here. But today is :inserty:. Everyone in :insertx: was exstatic as they haven't experienced :inserty: in so long. As the members of :insertx: gathered to celebrate, everyone was caught by suprise because Dr. Shnosebuuts :insertz:. Everyone blamed Bob for what happened, but the people saw this coming — Dr.Schnosebuuts weighed 300 pounds, and had a very hairy stomach`;

const insertX = [
  "the great kingdom of Doob",
  "Shitsville U.S.A",
  "my super sweaty armpit"
];

const insertY = [
  "the shit-stain competion",
  "Caturday",
  "the turnip eating competition"
];

const insertZ = [
  "summoned the entity of satin",
  "ate 12.6 ft of Slim Jim",
  "started to throw non-Newtonian fluid at all the children"
];

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(/:inserty:/g, yItem);
  newStory = newStory.replace(/:insertz:/g, zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Edwardino the Great", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14);
    const temperature =  Math.round((94 - 32) * 5 / 9);

    newStory = newStory.replace("94 fahrenheit", temperature + " centigrade");
    newStory = newStory.replace("300 pounds", weight + " stone");
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
