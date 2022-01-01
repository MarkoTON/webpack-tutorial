import Kiwi from './kiwi.jpg';
import NodeImg from './node.png';

function addImage() {
    // Inside this function I will create an img dom element, specify an alt , width , and src properties.
    const img = document.createElement('img');
    img.alt = 'Kiwi';
    img.width = 300;
    img.src = Kiwi;
    const body = document.querySelector('body');
    body.appendChild(img);
    
    const nodeImg = document.createElement('img');
    nodeImg.alt = 'Node';
    nodeImg.width = 300;
    nodeImg.src = NodeImg;
    body.appendChild(nodeImg);
}

export default addImage;