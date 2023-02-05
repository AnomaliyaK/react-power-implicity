import './styles.scss';
import appleLogo from '../../assets/icons/logo.svg';

export const Header = () => {
  return (
    <div className="header">
      <a href="https://www.apple.com/" className="header__logo">
        <img src={appleLogo} className="header__logo-img" alt="" />
      </a>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li>
            <a
              href="https://www.apple.com/environment/"
              className="header__nav__list-link"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="https://investor.apple.com/investor-relations/default.aspx"
              className="header__nav__list-link"
            >
              Partners
            </a>
          </li>
          <li>
            <a
              href="https://www.apple.com/diversity/"
              className="header__nav__list-link"
            >
              Stories
            </a>
          </li>
        </ul>
      </nav>
      <button className="header__btn">Download for free</button>
    </div>
  );
};
