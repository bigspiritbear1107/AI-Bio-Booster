import { useLocation } from 'react-router-dom';

export default function PremiumCheckout() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const plan = searchParams.get('plan');
  const price = searchParams.get('price');
  const yearly = searchParams.get('yearly') === 'true';

  return (
    <div>
      <h1>Plan: {plan}</h1>
      <p>Price: ${price}</p>
      <p>Billed: {yearly ? 'Yearly' : 'Monthly'}</p>
    </div>
  );
}
