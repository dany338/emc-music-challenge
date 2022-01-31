import { lazy, Suspense} from 'react'
import {
  Routes,
  Route,
  useLocation,
  useNavigate
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import Layout from './Layout';

const FeaturesView = lazy(() => import('./views/FeaturesView'));
const PaymentsView = lazy(() => import('./views/PaymentsView'));
const PaymentByStepsView = lazy(() => import('./views/OrderView'));
const OrderSuccessView = lazy(() => import('./views/OrderSuccessView'));
const View404 = lazy(() => import('./views/View404'));
const Modal = lazy(() => import('./components/Modal'));
const FormSign = lazy(() => import('./components/FormSign'));

const AppRouter = () => {
  const location: any = useLocation();
  const navigate: any = useNavigate();
  const state: any = location.state;

  return <>
    <Routes location={state?.backgroundLocation || location}>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <Suspense fallback={<span>Loading...</span>}>
            <FeaturesView />
          </Suspense>
        }/>
        <Route path="/login" element={
          <Suspense fallback={<span>Loading...</span>} />
        } />
        <Route path="/payments" element={
          <Suspense fallback={<span>Loading...</span>}>
            <PrivateRoute>
              <PaymentsView />
            </PrivateRoute>
          </Suspense>
        } />
        <Route path="/complete-order" element={
          <Suspense fallback={<span>Loading...</span>}>
            <PrivateRoute>
              <PaymentByStepsView />
            </PrivateRoute>
          </Suspense>
        } />
        <Route path="/order-successfully-placed" element={
          <Suspense fallback={<span>Loading...</span>}>
            <PrivateRoute>
              <OrderSuccessView />
            </PrivateRoute>
          </Suspense>
        } />
        <Route path="*" element={<Suspense fallback={<span>Loading...</span>}><View404 /></Suspense>} />
      </Route>
    </Routes>
    {state?.backgroundLocation && (
      <Routes>
        <Route path="/login" element={
          <Modal
            state={true}
            changeState={() => navigate(-1)}
            title={'Sign In'}
            showHeader={false}
            showOverlay={true}
            positionModal="center"
            padding={'0px'}
          >
            <FormSign />
          </Modal>
        } />
      </Routes>
    )}
  </>
};

export default AppRouter;
