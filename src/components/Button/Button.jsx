import btnCss from './Button.module.css';
import clsx from 'clsx';

const Button = ({ children, className }) => {
  const btnClassName = clsx(className, {
    // [btnCss.example]: className === 'example',
    [btnCss.home]: className === 'home',
    [btnCss.search]: className === 'search',
    [btnCss.btn]: true,
  });
  return (
    <button className={btnClassName} type="submit">
      {children}
    </button>
  );
};

export default Button;
