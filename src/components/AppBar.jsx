import { Link } from 'react-router-dom';
import { increment, decrement } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { UserMenu } from './UserMenu';

export const AppBar = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.myValue);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <header
      style={{
        padding: 8,
        borderBottom: '1px solid black',
        marginBottom: 12,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {value}
      <button onClick={() => dispatch(increment(100))}>Increment</button>
      <button onClick={() => dispatch(decrement(50))}>Decrement</button>
      {!isLoggedIn && <Link to="/login">Log in</Link>}
      {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
      {isLoggedIn && <UserMenu />}
    </header>
  );
};
