import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
