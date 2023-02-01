import { SlideItem } from '../SlideItem/SlideItem';
import './styles.scss';

export const Slider = () => {
  return (
    <div className="slider">
      <SlideItem />
      <ul>
        <input type="radio" name="point" id="slide1"></input>
        <input type="radio" name="point" id="slide2"></input>
        <input type="radio" name="point" id="slide3" checked></input>
        <input type="radio" name="point" id="slide4"></input>
        <input type="radio" name="point" id="slide5"></input>
      </ul>
    </div>
  );
};
