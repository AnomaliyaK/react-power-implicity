import './styles.scss';
import appleLogo from '../../assets/icons/logo.svg';

export const Header = () => {
  return (
    <div className="header">
      <a href="https://www.apple.com/" className="header__logo">
        <img src={appleLogo} alt="" />
      </a>
      <nav className="header__nav">
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Partners</a>
          </li>
          <li>
            <a href="#">Stories</a>
          </li>
        </ul>
      </nav>
      <button className="header__btn">Download for free</button>
    </div>
  );
};
