import { Check } from "lucide-react";
import clsx from "clsx";
// import { useNavigate } from "react-router-dom";

type PlanCardProps = {
  name: string;
  price: number;
  description: string;
  features: string[];
  button: string;
  disabled?: boolean;
  isYearly: boolean;
  onToggleYearly: () => void;
};

export default function PlanCard({
  name,
  price,
  description,
  features,
  button,
  disabled = false,
  isYearly,
  onToggleYearly,
}: PlanCardProps) {
  // const navigate = useNavigate();
  const handleSubscribe = () => {
    // const url = `/paid_version?plan=${name}&price=${price}&yearly=${isYearly}`;
    // navigate(url);
  };
  return (
    <div className="bg-white text-gray-900 shadow-xl rounded-2xl p-6 transition-all duration-300 border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">{name}</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span>Yearly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isYearly}
              onChange={onToggleYearly}
            />
            <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-indigo-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full" />
          </label>
        </div>
      </div>

      {/* Price */}
      <p className="text-5xl font-extrabold mb-5">${price}</p>
      <p className="text-sm text-gray-500 mb-6">{description}</p>

      {/* Features */}
      <ul className="space-y-4 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center space-x-2">
            <Check className="w-5 h-5 text-green-500" />
            <span className="text-xl font-medium text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        disabled={disabled}
        onClick={handleSubscribe}
        className={clsx(
          "w-full mt-2 py-2 rounded-md font-semibold transition",
          disabled
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-indigo-600 text-white hover:bg-indigo-700"
        )}
      >
        {button}
      </button>
    </div>
  );
}
