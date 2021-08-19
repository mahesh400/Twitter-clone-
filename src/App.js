import LeftLayout from './Layouts/LeftLayout/LeftLayout';
import RightLayout from './Layouts/RightLayout/RightLayout';
import MainLayout from './Layouts/MainLayout/MainLayout';
import './App.css';

function App() {
  return (
    <div className="layout">
      <LeftLayout/>
      <MainLayout/>
      <RightLayout/>
    </div>
  );
}

export default App;
