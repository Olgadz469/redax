// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../../redux/store';
import { Link, Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar';
export const Layout = () => {
  // const dispatch = useDispatch();
  // const value = useSelector(state => state.myValue);
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};
