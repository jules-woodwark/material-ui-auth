import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { AuthContextProvider } from './store/auth-context';
import { UiContextProvider } from './store/ui-context';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
);

root.render(
  <AuthContextProvider>
    <UiContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </UiContextProvider>
  </AuthContextProvider>
);
