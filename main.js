const customName = document.querySelector('#customName');
const us = document.querySelector('#us');
const uk = document.querySelector('#uk');
const btn = document.querySelector('#randomize');

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

let newStory;

function randomValueFromArray(arr) {
    const random = Math.floor(Math.random() * arr.length);
    console.log(random);
    return arr[random];
}

function result() {
    newStory = storyText;

    const itemX = randomValueFromArray(insertX);
    const itemY = randomValueFromArray(insertY);
    const itemZ = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:', itemX);
    newStory = newStory.replaceAll(':inserty:', itemY);
    newStory = newStory.replaceAll(':insertz:', itemZ);

    if (customName !== '') {
        newStory = newStory.replace('Bob', customName.value)
    }

    if (uk.checked) {
        const weight = `${Math.round(300 * 0.0714286)} stone`;
        const temperature = `${Math.round((94 - 32) * 5 / 9)} centigrade`;
        newStory = newStory.replaceAll('94 fahrenheit', temperature);
        newStory = newStory.replaceAll('300 pounds', weight);
    }
    console.log(newStory);
}

btn.addEventListener('click', result);