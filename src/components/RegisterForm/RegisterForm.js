import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

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

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label style={styles.label}>
        Username
        <input type="text" name="name" />
      </label>
      <label style={styles.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label style={styles.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
