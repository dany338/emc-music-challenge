import usePayment from '../../hooks/usePayment';
import Payments from '../../components/Payments';
import { Container } from './styled';

const PaymentsView = () => {
  const [
    query,
    startPage,
    isLoading,
    payments,
    filtered,
    onChangeQuery,
    fetchPayments,
  ] = usePayment();

  return (
    <Container>
      <Payments
        query={query}
        startPage={startPage}
        loading={isLoading}
        data={filtered}
        onChangeQuery={onChangeQuery}
        fetchData={fetchPayments}
      />
    </Container>
  );
};

export default PaymentsView;
