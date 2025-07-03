import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Campaigns() {
    const [campaigns, setCampaigns] = useState([]);

    // Fetch data from donation.json
    useEffect(() => {
        fetch("/donation.json")
            .then((response) => response.json())
            .then((data) => setCampaigns(data))
            .catch((error) => console.error("Error fetching campaigns:", error));
    }, []);

    return (
        <div className="font-worksans bg-[var(--color-surface)] text-[var(--color-text)] py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-playfair text-[var(--color-primary)] text-center mb-8">
                    Donation Campaigns
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {campaigns.map((campaign) => (
                        <div
                            key={campaign.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            <img
                                src={campaign.image}
                                alt={campaign.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-2">
                                    {campaign.title}
                                </h2>
                                <p className="text-sm text-[var(--color-text)] mb-4">
                                    {campaign.description.slice(0, 100)}...
                                </p>
                                <p className="text-sm font-medium text-[var(--color-secondary)] mb-4">
                                    Division: {campaign.division}
                                </p>
                                <Link
                                    to={`/campaigns/${campaign.id}`}
                                    className="btn btn-primary bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                                >
                                    Donate Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}