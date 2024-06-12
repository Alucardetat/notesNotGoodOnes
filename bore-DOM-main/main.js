let paragraph = document.querySelector('p');
paragraph.style.color = 'aqua';
paragraph.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id urna a libero interdum posuere. Donec vitae aliquet sapien. Vivamus sagittis erat a lacus tincidunt, vel feugiat odio ultrices';


let heading = document.querySelector('h1');
heading.style.fontSize = '42px';

let list = document.querySelector('ul');
document.getElementById('item-13').style.opacity = 0.3;
document.getElementById('item-3').innerText = 'Greetings!';
list.innerHTML += "<li class='item'>17</li>";

let listItem = document.querySelectorAll('li');
listItem[12].style.opacity = '0.3';
listItem[2].innerHTML = 'Greetings!';
listItem[16].innerHTML = 'Never gonna give you up.';

let image = document.querySelectorAll('img');
image[0].src = 'https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc=';
image[0].style.height = '250px';

let image2 = document.querySelector('.imgDiv');
image2.innerHTML += '<img src="https://media1.popsugar-assets.com/files/thumbor/nMoFnxkm3m2ims-92q_7fw4S9DM=/0x600:2401x3001/fit-in/1584x2376/filters:format_auto():upscale()/2022/01/04/686/n/1922507/6023a31161d467cac500f9.25034761_.jpg"/>';
image2.style.height = '280px';