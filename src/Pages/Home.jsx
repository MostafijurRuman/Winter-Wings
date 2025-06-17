import { FaSnowflake, FaFeatherAlt } from "react-icons/fa";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 flex flex-col items-center justify-center">
            <div className="bg-white/80 rounded-xl shadow-2xl p-10 flex flex-col items-center gap-6 max-w-md w-full">
                <FaSnowflake className="text-blue-400 text-6xl animate-spin-slow" />
                <h1 className="text-4xl font-bold text-blue-700 flex items-center gap-2">
                    Winter Wings <FaFeatherAlt className="text-blue-500" />
                </h1>
                <p className="text-lg text-gray-700 text-center">
                    Welcome to <span className="font-semibold text-blue-600">Winter Wings</span>! 
                    Explore the beauty of winter and soar to new heights.
                </p>
                <button className="btn btn-primary w-full mt-4">
                    Get Started
                </button>
            </div>
        </div>
    );
}
