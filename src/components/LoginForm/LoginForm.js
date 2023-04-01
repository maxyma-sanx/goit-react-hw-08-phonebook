import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const styles = {
  form: {
    width: '320px',
  },

  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '16px',
  },
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label style={styles.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label style={styles.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
