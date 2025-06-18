import logo from './logo.svg';
import './App.css';
import UserInfoContext from './context/UserInfoContext';
import BlogPage from './components/BlogPage';

function App() {
  const userInfo = {username:"Admin", isAdmin:true}
  return (
    <UserInfoContext.Provider value={userInfo}>
      <BlogPage></BlogPage>
    </UserInfoContext.Provider>
  );
}

export default App;
