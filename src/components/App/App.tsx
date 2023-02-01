import { Header } from '../Header/Header';
import { Slider } from '../Slider/Slider';
import './styles.scss';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Slider />
    </div>
  );
};
