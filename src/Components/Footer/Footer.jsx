import { RiMailLine, RiPhoneLine, RiMapPinLine, RiSnowflakeLine } from 'react-icons/ri'
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[var(--color-surface)] text-[var(--color-text)] py-12 px-4 font-worksans shadow-xl rounded-2xl mx-2 my-8">
            {/* Decorative Blobs */}
            <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-[var(--color-primary)] opacity-20 rounded-full blur-3xl animate-pulse"></div>
            <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 bg-[var(--color-accent)] opacity-20 rounded-full blur-3xl animate-pulse"></div>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-12 relative z-10 text-center md:text-left">
                {/* Contact Info */}
                <div className="flex flex-col gap-3 min-w-[220px] items-center md:items-start">
                    <span className="font-playfair text-3xl md:text-4xl text-primary mb-2 tracking-wide drop-shadow-lg flex items-center gap-2">
                        <RiSnowflakeLine className="animate-spin-slow text-accent text-3xl" />
                        Winter Wings
                    </span>
                    <span className="flex items-center gap-3 text-[var(--color-text)] hover:text-primary transition-colors cursor-pointer">
                        <RiMailLine className="text-accent" />
                        donate@winterwings.com
                    </span>
                    <span className="flex items-center gap-3 text-[var(--color-text)] hover:text-primary transition-colors cursor-pointer">
                        <RiPhoneLine className="text-accent" />
                        +1 (555) 987-6543
                    </span>
                    <span className="flex items-center gap-3 text-[var(--color-text)] hover:text-primary transition-colors cursor-pointer">
                        <RiMapPinLine className="text-accent" />
                        123 Frost Lane, Snow City
                    </span>
                </div>
                {/* Menu Columns */}
                <div className="flex flex-col gap-2 min-w-[140px] items-center md:items-start">
                    <span className="font-semibold text-lg text-primary mb-2 font-playfair">About</span>
                    <a href="/" className="hover:text-primary transition-colors rounded-lg px-2 py-1">Home</a>
                    <a href="/about" className="hover:text-primary transition-colors rounded-lg px-2 py-1">Our Mission</a>
                    <a href="/team" className="hover:text-primary transition-colors rounded-lg px-2 py-1">Team</a>
                    <a href="/contact" className="hover:text-primary transition-colors rounded-lg px-2 py-1">Contact</a>
                </div>
                <div className="flex flex-col gap-2 min-w-[140px] items-center md:items-start">
                    <span className="font-semibold text-lg text-primary mb-2 font-playfair">Get Involved</span>
                    <a href="/donate" className="hover:text-primary transition-colors rounded-lg px-2 py-1">Donate Clothes</a>
                    <a href="/how-it-works" className="hover:text-primary transition-colors rounded-lg px-2 py-1">How It Works</a>
                    <a href="/volunteer" className="hover:text-primary transition-colors rounded-lg px-2 py-1">Volunteer</a>
                    <a href="/events" className="hover:text-primary transition-colors rounded-lg px-2 py-1">Events</a>
                </div>
                <div className="flex flex-col gap-2 min-w-[140px] items-center md:items-start">
                    <span className="font-semibold text-lg text-primary mb-2 font-playfair">Support</span>
                    <a href="/faq" className="hover:text-primary transition-colors rounded-lg px-2 py-1">FAQ</a>
                    <a href="/resources" className="hover:text-primary transition-colors rounded-lg px-2 py-1">Resources</a>
                    <a href="/privacy" className="hover:text-primary transition-colors rounded-lg px-2 py-1">Privacy Policy</a>
                    <a href="/terms" className="hover:text-primary transition-colors rounded-lg px-2 py-1">Terms of Service</a>
                </div>
                {/* Social Links */}
                <div className="flex flex-col gap-4 min-w-[140px] items-center md:items-start">
                    <span className="font-semibold text-lg text-primary mb-2 font-playfair">Follow Us</span>
                    <div className="flex gap-5 text-2xl">
                        <a
                            href="https://twitter.com/yourorg"
                            className="hover:text-secondary transition-transform transform hover:-translate-y-1 hover:scale-110 duration-200 rounded-full p-2"
                            aria-label="Twitter"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="https://facebook.com/yourorg"
                            className="hover:text-secondary transition-transform transform hover:-translate-y-1 hover:scale-110 duration-200 rounded-full p-2"
                            aria-label="Facebook"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href="https://instagram.com/yourorg"
                            className="hover:text-secondary transition-transform transform hover:-translate-y-1 hover:scale-110 duration-200 rounded-full p-2"
                            aria-label="Instagram"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://github.com/yourorg"
                            className="hover:text-secondary transition-transform transform hover:-translate-y-1 hover:scale-110 duration-200 rounded-full p-2"
                            aria-label="GitHub"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-12 text-center text-base text-secondary font-playfair tracking-wide relative z-10">
                <span className="inline-flex items-center gap-2">
                    <RiSnowflakeLine className="text-accent animate-spin-slow" />
                    &copy; {new Date().getFullYear()} Winter Wings. All rights reserved.
                </span>
            </div>
            {/* Custom CSS for slow spin and color variables */}
            <style>{`
                :root {
                    --color-primary: #1E90FF;
                    --color-secondary: #E63946;
                    --color-accent: #343A40;
                    --color-surface: #F8FAFC;
                    --color-text: #343A40;
                }
                .font-playfair {
                    font-family: 'Playfair Display', serif;
                }
                .font-worksans {
                    font-family: 'Work Sans', sans-serif;
                }
                .text-primary {
                    color: var(--color-primary);
                }
                .text-secondary {
                    color: var(--color-secondary);
                }
                .text-accent {
                    color: var(--color-accent);
                }
                .bg-primary {
                    background-color: var(--color-primary);
                }
                .bg-secondary {
                    background-color: var(--color-secondary);
                }
                .bg-accent {
                    background-color: var(--color-accent);
                }
                .shadow-xl {
                    box-shadow: 0 8px 32px 0 rgba(30,144,255,0.10), 0 1.5px 6px 0 rgba(52,58,64,0.06);
                }
                .rounded-2xl {
                    border-radius: 1rem;
                }
                .animate-spin-slow {
                    animation: spin 6s linear infinite;
                }
                @keyframes spin {
                    100% { transform: rotate(360deg); }
                }
            `}</style>
            {/* Google Fonts Import */}
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Work+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
        </footer>
    )
}
