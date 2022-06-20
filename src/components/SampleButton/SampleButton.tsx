import React from 'react';
import classNames from 'classnames/bind';
import styles from './SampleButton.module.scss';

const cx = classNames.bind(styles);

interface ButtonProps {
  type?: 'primary' | 'danger' | 'success';
  label: string;
  onClick?: () => void;
}

export const SampleButton = ({ type = 'primary', label, ...rest }: ButtonProps) => {
  return (
    <button type="button" className={cx('button', type)} {...rest}>
      {label}
    </button>
  );
};
