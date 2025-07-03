import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CampaignDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [campaign, setCampaign] = useState(null);
    const [formData, setFormData] = useState({
        quantity: "",
        itemType: "",
        pickupLocation: "",
        notes: "",
    });

    // Mock authentication check
    const isAuthenticated = true; // Change to `false` to test redirection
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);

    // Fetch campaign data
    useEffect(() => {
        fetch("/donation.json")
            .then((response) => response.json())
            .then((data) => {
                const selectedCampaign = data.find((item) => item.id === parseInt(id));
                setCampaign(selectedCampaign);
            })
            .catch((error) => console.error("Error fetching campaign details:", error));
    }, [id]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Thank you! We will reach your destination soon.");
        setFormData({
            quantity: "",
            itemType: "",
            pickupLocation: "",
            notes: "",
        });
    };

    if (!campaign) {
        return <div className="text-center py-12">Loading...</div>;
    }

    return (
        <div className="font-worksans bg-[var(--color-surface)] text-[var(--color-text)] py-12 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Campaign Details */}
                <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-full object-cover"
                />
                <div className="p-6">
                    <h1 className="text-3xl font-playfair text-[var(--color-primary)] mb-4">
                        {campaign.title}
                    </h1>
                    <p className="text-lg text-[var(--color-text)] mb-4">
                        {campaign.description}
                    </p>
                    <p className="text-sm font-medium text-[var(--color-secondary)] mb-4">
                        Division: {campaign.division}
                    </p>
                    <p className="text-sm font-medium text-[var(--color-accent)] mb-4">
                        Status: {campaign.status}
                    </p>
                    <p className="text-sm font-medium text-[var(--color-text)]">
                        Contact Info: {campaign.contactInfo}
                    </p>
                </div>
            </div>

            {/* Donation Form */}
            <div className="max-w-4xl mx-auto mt-8 bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-playfair text-[var(--color-primary)] mb-6">
                    Donation Form
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Quantity */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            value={formData.quantity}
                            onChange={(e) =>
                                setFormData({ ...formData, quantity: e.target.value })
                            }
                            className="input input-bordered w-full"
                            placeholder="e.g., 2 jackets, 3 blankets"
                            required
                        />
                    </div>

                    {/* Item Type */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Item Type</label>
                        <select
                            name="itemType"
                            value={formData.itemType}
                            onChange={(e) =>
                                setFormData({ ...formData, itemType: e.target.value })
                            }
                            className="select select-bordered w-full"
                            required
                        >
                            <option value="" disabled>
                                Select an item type
                            </option>
                            <option value="Blanket">Blanket</option>
                            <option value="Jacket">Jacket</option>
                            <option value="Sweater">Sweater</option>
                        </select>
                    </div>

                    {/* Pickup Location */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Pickup Location
                        </label>
                        <input
                            type="text"
                            name="pickupLocation"
                            value={formData.pickupLocation}
                            onChange={(e) =>
                                setFormData({ ...formData, pickupLocation: e.target.value })
                            }
                            className="input input-bordered w-full"
                            placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
                            required
                        />
                    </div>

                    {/* Additional Notes */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Additional Notes (Optional)
                        </label>
                        <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={(e) =>
                                setFormData({ ...formData, notes: e.target.value })
                            }
                            className="textarea textarea-bordered w-full"
                            placeholder="Any additional information..."
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn btn-primary bg-[var(--color-primary)] text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* Toast Container */}
            <ToastContainer />
        </div>
    );
}