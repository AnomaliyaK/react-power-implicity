import { SlideItem } from '../SlideItem/SlideItem';
import './styles.scss';

export const Slider = () => {
  return (
    <div className="slider">
      <SlideItem />
      <ul className="slider__list">
        <input
          type="radio"
          name="point"
          id="slide1"
          className="slider__list-input"
        ></input>
        <input
          type="radio"
          name="point"
          id="slide2"
          className="slider__list-input"
        ></input>
        <input
          type="radio"
          name="point"
          id="slide3"
          className="slider__list-input"
          checked
        ></input>
        <input
          type="radio"
          name="point"
          id="slide4"
          className="slider__list-input"
        ></input>
        <input
          type="radio"
          name="point"
          id="slide5"
          className="slider__list-input"
        ></input>
      </ul>
    </div>
  );
};
