import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
    const navigate = useNavigate();

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center"
            style={{
                background: "linear-gradient(135deg, #4F46E5 0%, #38BDF8 100%)",
            }}
        >
            <div
                className="shadow-xl rounded-xl p-10 flex flex-col items-center"
                style={{ background: "#fff" }}
            >
                <FaExclamationTriangle
                    className="mb-4 animate-bounce"
                    style={{ color: "#4F46E5", fontSize: "3.75rem" }}
                />
                <h1
                    className="text-4xl font-bold mb-2"
                    style={{ color: "#4F46E5" }}
                >
                    Oops! Something went wrong.
                </h1>
                <p
                    className="text-lg mb-6 text-center"
                    style={{ color: "#1E293B" }}
                >
                    We couldn't find the page you're looking for.<br />
                    Please check the URL or go back to the homepage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mt-4">
                    <a
                        href="/"
                        className="btn btn-wide text-lg"
                        style={{
                            background: "#4F46E5",
                            color: "#fff",
                            borderColor: "#4F46E5",
                        }}
                    >
                        Go Home
                    </a>
                    <button
                        type="button"
                        className="btn btn-wide text-lg"
                        style={{
                            background: "#38BDF8",
                            color: "#fff",
                            borderColor: "#38BDF8",
                        }}
                        onClick={() => window.history.length > 1 ? navigate(-1) : navigate("/")}
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}