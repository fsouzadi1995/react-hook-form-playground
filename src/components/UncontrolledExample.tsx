import * as React from 'react';
import { useForm } from 'react-hook-form';

type Inputs = {
  username: string;
  email: string;
};

const initialValues: Inputs = {
  username: '',
  email: '',
};

const Uncontrolled = (): JSX.Element => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onBlur', defaultValues: initialValues });
  const [result, setResult] = React.useState<Inputs>({
    username: '',
    email: '',
  });

  function onSubmit(inputs: Inputs): void {
    setResult(inputs);
  }

  function onReset(): void {
    setResult(initialValues);
    reset();
  }

  return (
    <>
      <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            placeholder='fsouzadi1995'
            required
            {...register('username', {
              required: {
                value: true,
                message: 'Please fill in this field',
              },
              pattern: /^[A-Za-z]+$/i,
            })}
          />

          {errors.email?.message}

          {/* <small
            className={`${
              errors.username?.type === 'required' ? 'visible' : 'hidden'
            }`}
          >
            This field is required
          </small>
          <small
            className={`${
              errors.username?.type === 'pattern' ? 'visible' : 'invisible'
            }`}
          >
            Only letters are allowed
          </small>

          <small
            className={`${
              errors.username?.type === 'maxLength' ? 'visible' : 'invisible'
            }`}
          >
            Only letters are allowed
          </small> */}
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            placeholder='your.email@provider.com'
            {...register('email', { required: true, maxLength: 25 })}
          />
          <small
            className={`${
              errors.email?.type === 'required' ? 'visible' : 'invisible'
            }`}
          >
            This field is required
          </small>
        </div>

        <div>
          <button type='submit'>Submit</button>
          <button type='reset' onClick={onReset}>
            Reset
          </button>
        </div>
      </form>
      <div className='result'>
        <pre className='result__body'>
          <code className='result__bracket'>{'{'}</code>
          <br />
          {Object.entries(result).map(([key, value]) => (
            <>
              <code className='result__key'>{`${key}:`}</code>
              <code className='result__value'>{`'${value}'`}</code>
              <br />
            </>
          ))}
          <code className='result__bracket'>{'}'}</code>
        </pre>
      </div>
    </>
  );
};

export default Uncontrolled;
