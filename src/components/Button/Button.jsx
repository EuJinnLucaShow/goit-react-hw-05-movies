import { Btn } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ text }) => {
  return <Btn type="button">{text}</Btn>;
};
export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
