import { InputHTMLAttributes } from 'react';
import {
  FieldValues,
  Path,
  FieldError,
  UseFormRegister,
  UseFormSetError,
} from 'react-hook-form';
import styles from './styles.module.scss';

interface TextAreaProps<T extends FieldValues> {
  showLabel?: boolean;
  className?: string;
  error: FieldError | undefined;
  register: UseFormRegister<T>;
  setError: UseFormSetError<T>;
  name: Path<T>;
  inputProps?: InputHTMLAttributes<HTMLTextAreaElement>;
  value?: string;
  maxLength?: number;
}

export function TextArea<T extends FieldValues>({
  showLabel = true,
  className,
  error,
  register,
  setError,
  name,
  inputProps,
  value,
  maxLength,
}: TextAreaProps<T>) {
  return (
    <div className={styles.label__control}>
      {showLabel && (
        <label className={styles.label}>
          <span className={styles.labelText}>{name}</span>
        </label>
      )}
      <textarea
        {...register(name)}
        {...inputProps}
        defaultValue={value}
        maxLength={maxLength}
        className={`${styles.textArea} ${className} ${error ? styles.inputError : styles.textAreaBordered}`}
      />
      {error && <span className={styles.textError}>{error.message}</span>}
    </div>
  );
}
