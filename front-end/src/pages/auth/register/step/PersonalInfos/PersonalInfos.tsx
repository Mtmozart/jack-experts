import { FieldError, useForm } from 'react-hook-form';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { PersonalInfosInterface } from './utils/personalInfos.zod.interface';
import { FormFieldConstructor } from '../../../../../components/common/Form/form';
import { userSchema } from '../../../../../validators/user.validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { States } from './utils/States';
import { SelectInput } from '../../../../../components/common/Select/SelectInput';

interface PersonalInfosProps {
  steps: {
    setCurrent: Dispatch<SetStateAction<number>>;
    current: number;
  };
  form: {
    setValues: Function;
    values: any;
  };
}

export function PersonalInfosStep({ form }: PersonalInfosProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    watch,
  } = useForm<PersonalInfosInterface>({
    resolver: zodResolver(userSchema),
    mode: 'onTouched',
    defaultValues: form.values
  });

  async function onSubmit(data: PersonalInfosInterface) {
    console.log('onSubmit chamada');
    console.log('Dados do formulário:', data);
  }

  const FormField = FormFieldConstructor<PersonalInfosInterface>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        name="nome"
        register={register}
        setError={setError}
        error={errors?.nome}
        inputProps={{
          type: 'text',
          placeholder: 'Nome completo',
        }}
      />
      <FormField
        name="email"
        register={register}
        setError={setError}
        error={errors?.email}
        inputProps={{
          type: 'email',
          placeholder: 'Seu Email',
        }}
      />
      <FormField
        name="username"
        register={register}
        setError={setError}
        error={errors?.username}
        inputProps={{
          type: 'text',
          placeholder: 'Username',
        }}
      />
      <FormField
        name="senha"
        register={register}
        setError={setError}
        error={errors?.senha}
        inputProps={{
          type: 'password',
          placeholder: 'Sua senha',
        }}
      />
      <FormField
        name="confirmação"
        register={register}
        setError={setError}
        error={errors?.confirmação}
        inputProps={{
          placeholder: 'Confirme sua senha',
          type: 'password',
        }}
      />
      <FormField
        name="logradouro"
        register={register}
        setError={setError}
        error={errors?.logradouro}
        inputProps={{
          placeholder: 'Logradouro',
          type: 'text',
        }}
      />

      <FormField
        name="número"
        register={register}
        setError={setError}
        error={errors?.número}
        inputProps={{
          placeholder: 'Número',
          type: 'text',
        }}
      />

      <FormField
        name="bairro"
        register={register}
        setError={setError}
        error={errors?.bairro}
        inputProps={{
          placeholder: 'Bairro',
          type: 'text',
        }}
      />

      <FormField
        name="localidade"
        register={register}
        setError={setError}
        error={errors?.localidade}
        inputProps={{
          placeholder: 'Localidade',
          type: 'text',
        }}
      />

      <SelectInput
        register={register}
        setError={setError}
        name="estado"
        items={States}
        className="col-span-1"
        error={errors?.estado as FieldError | undefined}
      />

      <FormField
        name="cep"
        register={register}
        setError={setError}
        error={errors?.cep}
        inputProps={{
          placeholder: 'CEP',
          type: 'text',
        }}
      />

      <FormField
        name="complemento"
        register={register}
        setError={setError}
        error={errors?.complemento}
        inputProps={{
          placeholder: 'Complemento',
          type: 'text',
        }}
      />
      <button type="submit" className="">
        Próximo
      </button>
    </form>
  );
}
