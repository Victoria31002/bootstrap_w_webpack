import '../scss/styles.scss'
import image from '../img/image.webp'

import * as bootstrap from 'bootstrap'
import video from '../img/video.mp4';
document.querySelector('.video-bg source').src = video;

document.querySelector('.card:first-child .card-img-top').src = image;