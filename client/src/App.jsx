import Landing from "./routes/Landing";
import user from './store/user';
import { BrowserRouter } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import AppRouter from './routes/AppRouter';
import { injectStores } from '@mobx-devtools/tools';

injectStores(
  { user }
);

function App() {
  user.checkAuth();
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
