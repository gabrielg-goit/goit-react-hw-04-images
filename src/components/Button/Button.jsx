import PropTypes from 'prop-types';
import style from './Button.module.css';

export default function Button({ onBtnClick }) {
  return (
    <button className={style.load_btn} onClick={onBtnClick}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};
