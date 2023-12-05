import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/layout';
import { LoginPage } from 'pages/LoginPage';
import { DashBoardPage } from 'pages/DashBoardPage';
const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<DashBoardPage />} />
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </div>
  );
};
export default App;
