import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/Auth/Sign_in";
import SignUp from "./pages/Auth/Sign_up";
import FreeVersion from "./pages/FreeVersion";
import PricingPage from "./pages/PricingPage";
import PaidvVersion from "./pages/PaidVersion";

import PremiumCheckout from "./pages/PremiumCheckout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/free_version" replace />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/free_version" element={<FreeVersion />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/paid_version" element={<PaidvVersion />} />
      <Route path="/premium_checkout" element={<PremiumCheckout />} />
    </Routes>
  );
}

export default App;
