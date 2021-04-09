import './assets/styles/styles.scss';
import { HeaderApp } from './cmps/HeaderApp';
import { HomePage } from './pages/HomePage';

export function App() {
  return (
    <div className="App">
      <HeaderApp />
      <HomePage />
    </div>
  );
}
