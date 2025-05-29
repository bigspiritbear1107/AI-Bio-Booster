// src/components/AnalysisSection.tsx
import { useState } from "react";
import { Send } from "lucide-react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../../components/Spinner"; // <-- Import your external Spinner component

export default function AnalysisSection() {
  const [selectedPlatform, setSelectedPlatform] = useState("LinkedIn");
  const [bioText, setBioText] = useState("");
  const [language, setLanguage] = useState("en");
  const [bioScore, setBioScore] = useState(0);
  const [suggestions, setSuggestions] = useState(
    "Some suggestions to improve your bio"
  );
  const [loading, setLoading] = useState(false);

  const getColor = (score: number) => {
    if (score < 30) return "#ef4444"; // red
    if (score > 80) return "#10b981"; // green
    return "#facc15"; // yellow
  };

  const handleSendMail = () => {
    toast.error("You can't send email in free version.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleAnalysis = async () => {
    if (!bioText || bioText.trim() === "") {
      toast.error("Please enter your bio text before analyzing", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://hook.eu2.make.com/zmskx2pvk35h0atqk9z6hdvf8urodvm3",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            bio: bioText,
            channel: selectedPlatform,
            lang: language,
          }),
        }
      );

      const data = await response.json();
      if (data.suggestions && data.score !== undefined) {
        setSuggestions(
          Array.isArray(data.suggestions)
            ? data.suggestions.join("\n")
            : String(data.suggestions)
        );
        setBioScore(data.score);
        toast.success("Bio analysis completed successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        setSuggestions("Unexpected response");
        setBioScore(0);
        toast.warning("Unexpected response from server", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setSuggestions("Failed to analyze bio");
      setBioScore(0);
      toast.error("Failed to analyze bio. Please try again.", {
        position: "top-right",
        autoClose: 4000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="analysis" className="py-12 px-4">
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* Centered Spinner Overlay */}
      {loading && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30"
          style={{ minHeight: "100vh" }}
        >
          <div className="flex flex-col items-center">
            <Spinner />
            <span className="mt-4 text-white text-lg font-semibold">
              Analyzing...
            </span>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Bio Analysis
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          {/* Left Column */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <label className="text-base pt-8 font-semibold text-gray-700 mb-2 block">
                Social media channel
              </label>
              <select
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md mb-6"
              >
                <option>LinkedIn</option>
                <option>Instagram</option>
              </select>

              <label className="text-base font-semibold text-gray-700 mb-2 block">
                Current Bio
              </label>
              <textarea
                value={bioText}
                onChange={(e) => setBioText(e.target.value)}
                placeholder="Paste your Bio"
                className="w-full h-48 p-4 border border-gray-300 rounded-md bg-gray-100 resize-none"
              />
            </div>

            <button
              className="mt-6 w-full bg-indigo-600 text-white py-3 text-lg rounded-md hover:bg-indigo-700 flex items-center justify-center"
              onClick={handleAnalysis}
              disabled={loading}
            >
              {loading && (
                <span className="mr-2">
                  <Spinner />
                </span>
              )}
              {loading ? "Analyzing..." : "Analysis"}
            </button>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between h-full">
            <div className="pt-4 rounded-lg h-full flex flex-col justify-start">
              <div className="flex items-center justify-center gap-8 mb-6">
                <span className="text-2xl font-bold text-gray-800">
                  Your Bio Score
                </span>
                <div className="w-24 h-24 font-bold">
                  <CircularProgressbar
                    value={bioScore}
                    text={`${bioScore}`}
                    strokeWidth={14}
                    styles={buildStyles({
                      textSize: "40px",
                      textColor: getColor(bioScore),
                      pathColor: getColor(bioScore),
                      trailColor: "#e5e7eb",
                      strokeLinecap: "round",
                    })}
                  />
                </div>
              </div>

              <label className="text-base font-semibold mb-2">
                Suggestions to Boost your Bio
              </label>
              <textarea
                readOnly
                value={suggestions}
                className="w-full h-48 p-4 border border-gray-300 rounded-md bg-gray-100 text-sm text-gray-800 resize-none"
              />
            </div>

            <button
              className="mt-6 w-full bg-indigo-600 text-white py-3 text-lg rounded-md hover:bg-indigo-700 flex items-center justify-center"
              onClick={handleSendMail}
            >
              <Send className="h-5 w-5 mr-2" />
              Send E-mail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
