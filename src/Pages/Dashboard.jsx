import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext); // Get user info from AuthContext
    const navigate = useNavigate();

    // Redirect to update profile route
    const handleUpdateProfile = () => {
        navigate("/update-profile");
    };

    return (
        <div className="font-worksans bg-[var(--color-surface)] text-[var(--color-text)] py-12 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
                {/* Welcome Title */}
                <h1 className="text-3xl font-playfair text-[var(--color-primary)] mb-6">
                    Welcome, {user?.displayName || "User"}!
                </h1>

                {/* Profile Information */}
                <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
                    {/* Profile Image */}
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[var(--color-primary)]">
                        <img
                            src={user?.photoURL || "https://via.placeholder.com/150"}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Profile Details */}
                    <div className="flex flex-col gap-4">
                        <p className="text-lg">
                            <span className="font-semibold">Name:</span> {user?.displayName || "N/A"}
                        </p>
                        <p className="text-lg">
                            <span className="font-semibold">Email:</span> {user?.email || "N/A"}
                        </p>
                        <button
                            onClick={handleUpdateProfile}
                            className="btn btn-primary bg-[var(--color-primary)] text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                        >
                            Update Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;