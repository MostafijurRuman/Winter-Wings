import  { useState } from "react";
import {  useLocation } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ForgotPassword() {
    const location = useLocation();
    const [email, setEmail] = useState(location.state?.email || ""); // Pre-fill email if passed from Login

    const handleResetPassword = async (e) => {
        e.preventDefault();
        const auth = getAuth();
        try {
            await sendPasswordResetEmail(auth, email);
            toast.success("Password reset email sent! Please check your inbox or spam folder.");
            setTimeout(() => {
                window.location.href = "https://mail.google.com"; // Redirect to Gmail
            }, 5000); // Wait 5 seconds before redirecting
        } catch (error) {
            console.error("Error sending password reset email:", error.message);
            toast.error("Failed to send password reset email. Please try again.");
        }
    };

    return (
        <div
            className="flex justify-center items-center min-h-screen bg-cover bg-center"
            style={{
                backgroundImage:
                    "url(https://121clicks.com/wp-content/uploads/2021/01/winter_life_in_villages_of_bangladesh_02.jpg)",
            }}
        >
            <ToastContainer />
            <div className="w-full max-w-md bg-white/10 border-2 border-white/20 backdrop-blur-lg shadow-lg text-white rounded-xl p-8">
                <form onSubmit={handleResetPassword}>
                    <h1 className="text-3xl font-bold text-center mb-8">Forgot Password</h1>
                    <div className="relative w-full h-12 mb-6">
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-full bg-transparent border-2 border-white/20 rounded-full text-white px-5 pr-12 text-base outline-none placeholder-white"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full h-11 rounded-full bg-white text-gray-800 font-semibold shadow hover:bg-gray-100 transition"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
}
