import '@wsh-2025/client/src/setups/polyfills';
import '@wsh-2025/client/src/setups/luxon';
import '@wsh-2025/client/src/setups/unocss';

import {StrictMode} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router';

import {StoreProvider} from '@wsh-2025/client/src/app/StoreContext';
import {createRoutes} from '@wsh-2025/client/src/app/createRoutes';
import {createRoot} from 'react-dom/client';
import {createStore} from '@wsh-2025/client/src/app/createStore';

const App = () => {
  const store = createStore();
  const router = createBrowserRouter(createRoutes(store), {});

  return (
    <StoreProvider createStore={() => store}>
      <RouterProvider router={router} />
    </StoreProvider>
  );
}

function main() {
  const root = document.getElementById('root');
  if (!root) {
    throw new Error('Root element not found');
  }

  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
main();
