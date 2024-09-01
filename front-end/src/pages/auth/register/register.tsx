import { useState } from 'react';
import { PersonalInfosStep } from './step/PersonalInfos/PersonalInfos';
import styles from './styles.module.scss';

export default function RegisterScreen() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [PersonalInfosStep];


  return (
    <section className={styles.form__container}>
      <div className={styles.form__container__center}>
        <h1>Cadastre-se</h1>
        {steps.map((StepComponent, index) => (
          <StepComponent
            key={index}
            steps={{ current: currentStep, setCurrent: setCurrentStep }}
            form={{ values: {}, setValues: () => {} }}
          />
        ))}
      </div>
    </section>
  );
}
