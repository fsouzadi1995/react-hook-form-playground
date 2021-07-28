import { useForm } from 'react-hook-form';

type Inputs = {
  username: string;
  email: string;
};

const Form = (): JSX.Element => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  function onSubmit(inputs: Inputs): void {
    console.log(inputs);
  }

  return (
    <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          {...register('username', { required: true, pattern: /^[A-Za-z]+$/i })}
        />

        {errors.username?.type === 'required' ? <div>required!!!</div> : null}

        {errors.username?.type === 'pattern' ? (
          <div>invalid pattern!!</div>
        ) : null}
      </div>

      <div>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='email'
          {...register('email', { required: true, maxLength: 10 })}
        />
        {errors.email?.type === 'required' ? <div>required!!!</div> : null}
        {errors.email?.type === 'maxLength' ? <div>too long!!</div> : null}
      </div>

      <button type='submit'>Submit</button>
      <button type='reset' onClick={() => reset()}>
        Reset
      </button>
    </form>
  );
};

export default Form;
