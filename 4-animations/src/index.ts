import '../../assets/css/style.css';
import { animationDownElement$ } from './animate';
import  './styles.css';

const shapeElement = document.querySelector('.animated-shape') as HTMLElement;

animationDownElement$(shapeElement, 2000).subscribe(elementDiffPosition => {
    console.log(elementDiffPosition);
});
