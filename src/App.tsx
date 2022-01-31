import { Suspense } from 'react';
import Copyright from './components/Copyright';
import AppRouter from './AppRouter';
import { IdentityProvider } from './providers/identity';

const App = () => (
  <IdentityProvider>
    <Suspense fallback={<span>Loading...</span>}>
      <AppRouter />
      <Copyright />
    </Suspense>
  </IdentityProvider>
)

export default App;