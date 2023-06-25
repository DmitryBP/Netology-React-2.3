import './App.css';
import Dropdown from './Dropdown';


function App() {
  const menuList = ['profile information', 'change password', 'become PRO', 'help', 'log out'];
  return (
    <div className="App">
      <Dropdown menuList={menuList} />
    </div>
  );
}

export default App;
