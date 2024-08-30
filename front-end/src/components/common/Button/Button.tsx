import { ButtonHTMLAttributes, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

interface IButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'prefix'> {
  text: React.ReactNode;
  loading?: boolean;
  prefix?: React.ReactNode;
  sufix?: React.ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  redirectTo?: string;
}

export function Button({
  className,
  text,
  prefix,
  sufix,
  onClick,
  redirectTo,
  ...props
}: IButtonProps) {
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
    if (redirectTo) {
      navigate(redirectTo);
    }
  };

  return (
    <button
      type="button"
      {...props}
      className={`${styles.button__card} ${className || ''}`}
      onClick={handleClick}
    >
      {prefix && prefix}
      {text}
      {sufix && sufix}
    </button>
  );
}
