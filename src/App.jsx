import './App.css';
import View from './components/View';
import Profile from './components/profile';
import Installation from './components/installation';
import Uipage from './components/Uipage';
import User from './components/user';
import Adding from './components/adding';
import Managing from './components/managing';
import EscapeHatches from './components/escap-hatches';
import Overview from './components/overview';
import AddingStyle from './components/adding-style';
import DisplayData from './components/display-data';
import ConditionalRendering from './components/rendering';
import RespondingToEvents from './components/events';
import RespondingToLists from './components/respond';
import UpdatingTheScreen from './components/screen';
import UsingHooks from './components/hooks';
import SharingDataWithContext from './components/sharing-data';
import SharingDataWithProps from './components/props';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/user" element={<User />} />
        <Route path="/profile"  element={<Profile />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/uipage" element={<Uipage />} />
        <Route path="/adding" element={<Adding />} />
        <Route path="/managing" element={<Managing />} />
        <Route path="/escape" element={<EscapeHatches />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/style" element={<AddingStyle />} />
        <Route path="/display" element={<DisplayData />} />
        <Route path="/con" element={<ConditionalRendering />} />
        <Route path="/res" element={<RespondingToEvents/>} />
        <Route path="/respond" element={<RespondingToLists/>} />
        <Route path="/update" element={<UpdatingTheScreen/>} />
        <Route path="/hooks" element={<UsingHooks/>} />
        <Route path="/sharing" element={<SharingDataWithContext/>} />
        <Route path="/props" element={<SharingDataWithProps/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



