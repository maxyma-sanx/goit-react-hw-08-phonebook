import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },

  username: {
    fontWeight: '700',
  },
};

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div style={styles.wrapper}>
      <p style={styles.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
