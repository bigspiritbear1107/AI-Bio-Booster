import { useState } from "react";
import { Link } from "react-router-dom";
import { Crown } from "lucide-react";
import PlanCard from "../components/PlanCard";

export default function PricingPage() {
  const [isMiniYearly, setIsMiniYearly] = useState(true);
  const [isBasicYearly, setIsBasicYearly] = useState(false);
  // const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-violet-50 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Glow backgrounds for flair */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 w-[600px] h-[600px] bg-purple-700 opacity-30 blur-[200px] rounded-full -translate-x-1/2" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-600 opacity-20 blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto mt-5">
        <div className="text-center mb-12">
          <Crown className="mx-auto h-24 w-24 text-purple-400" />
          <h1 className="text-5xl font-extrabold mt-4">Plans</h1>
          <p className="mt-2 max-w-3xl mx-auto text-xl text-black">
            You are currently on a free site plan. 
          </p>
          <p className="mt-2 max-w-3xl mx-auto text-xl text-black">
            Select any of the mini or basic plans that fits your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <PlanCard
            name="Mini"
            price={isMiniYearly ? 80 : 8}
            description={`Per month, billed ${
              isMiniYearly ? "yearly" : "monthly"
            }`}
            features={[
              "profile analysis",
              "benchmarking",
              "optimized profile",
            ]}
            button="Subscribe"
            isYearly={isMiniYearly}
            onToggleYearly={() => setIsMiniYearly(!isMiniYearly)}
            
          />

          <PlanCard
            name="Basic"
            price={isBasicYearly ? 150 : 15}
            description={`Per month, billed ${
              isBasicYearly ? "yearly" : "monthly"
            }`}
            features={[
              "mimi function +",
              "report pdf",
              "upgrade options",
            ]}
            button="Subscribe"
            isYearly={isBasicYearly}
            onToggleYearly={() => setIsBasicYearly(!isBasicYearly)}
          />
        </div>
      </div>

      {/* Back Button */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 mb-12">
        <Link
          to="/free_version"
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-800"
        >
          {/* <Crown className="h-5 w-5 mr-2" /> */}
          Back
        </Link>
      </div>
    </div>
  );
}
