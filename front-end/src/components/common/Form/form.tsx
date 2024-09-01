import { InputHTMLAttributes } from 'react';
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
  UseFormSetError,
} from 'react-hook-form';
import styles from './styles.module.scss';

interface FormFieldProps<T extends FieldValues> {
  error?: FieldError; // Ajuste para opcional
  register: UseFormRegister<T>;
  setError: UseFormSetError<T>;
  name: Path<T>;
  inputClassName?: string;
  containerClassName?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

function FormField<T extends FieldValues>(props: FormFieldProps<T>) {
  return (
    <div className={`${styles.form__control} ${props.containerClassName}`}>
      <label className={styles.label}>
        <span>{props.name}</span>
      </label>
      <input
        {...props.register(props.name)}
        {...props.inputProps}
        className={`${styles.input} ${
          props.error ? styles.input__error : styles.input__bordered
        } ${props.inputClassName}`}
      />
      {props.error && (
        <span className={styles.text__error}>{props.error.message}</span>
      )}
    </div>
  );
}

export function FormFieldConstructor<T extends FieldValues>() {
  return FormField<T>;
}
