import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext); // Get user info and update function from AuthContext
    const [formData, setFormData] = useState({
        displayName: user?.displayName || "",
        photoURL: user?.photoURL || "",
    });
    const navigate = useNavigate();

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUserProfile(formData); // Update user profile in Firebase
            navigate("/dashboard"); // Navigate back to the dashboard
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    return (
        <div className="font-worksans bg-[var(--color-surface)] text-[var(--color-text)] py-12 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-playfair text-[var(--color-primary)] mb-6">
                    Update Profile
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Input */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input
                            type="text"
                            name="displayName"
                            value={formData.displayName}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    {/* Photo URL Input */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Photo URL</label>
                        <input
                            type="text"
                            name="photoURL"
                            value={formData.photoURL}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            placeholder="Enter your photo URL"
                            required
                        />
                    </div>

                    {/* Update Button */}
                    <button
                        type="submit"
                        className="btn btn-primary bg-[var(--color-primary)] text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Update Information
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;