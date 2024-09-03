import { InputHTMLAttributes } from 'react';
import {
  FieldValues,
  Path,
  FieldError,
  UseFormRegister,
  UseFormSetError,
} from 'react-hook-form';
import styles from './styles.module.scss';

interface SelectInputProps<T extends FieldValues> {
  showLabel?: boolean;
  className?: string;
  items: readonly string[];
  error: FieldError | undefined;
  register: UseFormRegister<T>;
  setError: UseFormSetError<T>;
  name: Path<T>;
  inputProps?: InputHTMLAttributes<HTMLSelectElement>;
  value?: string;
}

export function SelectInput<T extends FieldValues>(props: SelectInputProps<T>) {
  return (
    <div className={styles.formControl}>
      {props.showLabel !== false && (
        <label className={styles.label}>
          <span className={styles.labelText}>{props.name}</span>
        </label>
      )}
      <select
        {...props.register(props.name)}
        {...props.inputProps}
        defaultValue={props.value}
        className={`${styles.select} ${props.className} ${props.error ? styles.inputError : styles.selectBordered}`}
      >
        <option value="" disabled>
          Escolha
        </option>
        {props.items.map((estado, i) => (
          <option value={estado} key={i}>
            {estado}
          </option>
        ))}
      </select>
      {props.error && (
        <span className={styles.textError}>{props.error.message}</span>
      )}
    </div>
  );
}
