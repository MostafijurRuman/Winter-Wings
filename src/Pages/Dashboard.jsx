import React from "react";

const stats = [
    { title: "Users", value: "1,200", desc: "↗︎ 100 (8%)", icon: "👤" },
    { title: "Sales", value: "$34,000", desc: "↗︎ $2,000 (6%)", icon: "💰" },
    { title: "Orders", value: "320", desc: "↘︎ 20 (5%)", icon: "📦" },
    { title: "Feedback", value: "98%", desc: "↗︎ 2% (1%)", icon: "⭐" },
];

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-base-200 p-8">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-primary">Dashboard</h1>
                <p className="text-base-content mt-2">Welcome back! Here’s what’s happening today.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat) => (
                    <div key={stat.title} className="stat bg-base-100 shadow-xl rounded-xl p-6 flex flex-col items-center">
                        <div className="text-4xl mb-2">{stat.icon}</div>
                        <div className="stat-title">{stat.title}</div>
                        <div className="stat-value text-primary">{stat.value}</div>
                        <div className="stat-desc">{stat.desc}</div>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="col-span-2 bg-base-100 shadow-xl rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                    <ul className="timeline timeline-vertical">
                        <li>
                            <div className="timeline-start">09:00</div>
                            <div className="timeline-middle bg-primary"></div>
                            <div className="timeline-end timeline-box">User John signed up</div>
                        </li>
                        <li>
                            <div className="timeline-start">10:30</div>
                            <div className="timeline-middle bg-secondary"></div>
                            <div className="timeline-end timeline-box">Order #1234 placed</div>
                        </li>
                        <li>
                            <div className="timeline-start">12:00</div>
                            <div className="timeline-middle bg-accent"></div>
                            <div className="timeline-end timeline-box">Feedback received</div>
                        </li>
                    </ul>
                </div>
                <div className="bg-base-100 shadow-xl rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                    <div className="flex flex-col gap-4">
                        <button className="btn btn-primary">Add User</button>
                        <button className="btn btn-secondary">Create Order</button>
                        <button className="btn btn-accent">View Reports</button>
                    </div>
                </div>
            </div>
        </div>
    );
}