import React from "react";
import { RiHeartLine, RiHandHeartLine, RiTeamLine } from "react-icons/ri";

export default function HowToHelp() {
    return (
        <div className="font-worksans bg-[var(--color-surface)] text-[var(--color-text)] py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Page Title */}
                <h1 className="text-3xl md:text-4xl font-playfair text-[var(--color-primary)] text-center mb-8">
                    How You Can Help
                </h1>

                {/* Help Options */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Donate Clothes */}
                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                        <RiHeartLine className="text-[var(--color-primary)] text-5xl mb-4" />
                        <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-2">
                            Donate Clothes
                        </h2>
                        <p className="text-center text-[var(--color-text)]">
                            Help us by donating winter clothes such as jackets, blankets, and sweaters to keep vulnerable communities warm.
                        </p>
                    </div>

                    {/* Volunteer */}
                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                        <RiHandHeartLine className="text-[var(--color-secondary)] text-5xl mb-4" />
                        <h2 className="text-xl font-semibold text-[var(--color-secondary)] mb-2">
                            Volunteer
                        </h2>
                        <p className="text-center text-[var(--color-text)]">
                            Join our team of volunteers to help distribute donations and organize campaigns in your local area.
                        </p>
                    </div>

                    {/* Spread Awareness */}
                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                        <RiTeamLine className="text-[var(--color-accent)] text-5xl mb-4" />
                        <h2 className="text-xl font-semibold text-[var(--color-accent)] mb-2">
                            Spread Awareness
                        </h2>
                        <p className="text-center text-[var(--color-text)]">
                            Share our mission with your friends and family to help us reach more donors and volunteers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}