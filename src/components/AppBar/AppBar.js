import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Navigation } from 'components/Navitagion/Navitagion';
import { UserMenu } from 'components/UserMenu/UserMenu';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
    borderBottom: '1px solid #2a363b',
  },
};

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header style={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
