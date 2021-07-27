const Form = (): JSX.Element => {
  return (
    <form autoComplete='off'>
      <div>
        <label htmlFor='username'>Username</label>

        <input name='username' id='username' type='text' />
      </div>

      <div>
        <label htmlFor='email'>Email</label>

        <input name='email' id='email' type='email' />
      </div>
    </form>
  );
};

export default Form;
