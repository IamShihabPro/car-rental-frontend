import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black p-8 text-white">
            <div className="max-w-4xl mx-auto bg-gray-900/80 p-10 rounded-lg shadow-xl backdrop-blur-md mt-20">
                <h1 className="text-4xl font-extrabold text-center mb-10 text-blue-500">Terms and Conditions</h1>

                <p className="mb-6 text-lg leading-relaxed">
                    Welcome to <span className="font-bold">Car Rest Shop</span>. These terms and conditions outline the rules and regulations for the use of our website, located at <span className="underline text-blue-400">carrentshop.com</span>.
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-blue-400">1. Acceptance of Terms</h2>
                    <p className="leading-relaxed">
                        By accessing this website, we assume you accept these terms and conditions. Do not continue to use <span className="font-bold">[Your Car Booking Website]</span> if you do not agree to all the terms and conditions stated on this page.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-blue-400">2. Privacy Policy</h2>
                    <p className="leading-relaxed">
                        Your privacy is important to us. Please review our <span className="text-blue-500 underline hover:text-blue-300">Privacy Policy</span> to understand how we collect, use, and protect your personal information.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-blue-400">3. Use of the Website</h2>
                    <p className="leading-relaxed">
                        By using this website, you agree to use it only for lawful purposes. You must not use our website in any way that is unlawful or fraudulent or has any unlawful or fraudulent purpose or effect.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-blue-400">4. Booking and Payment</h2>
                    <p className="leading-relaxed">
                        All bookings made through our website are subject to availability and confirmation. Prices are displayed in <span className="font-bold">[Currency]</span> and include applicable taxes. Payment must be made in full at the time of booking.
                    </p>
                    <p className="leading-relaxed">
                        We reserve the right to refuse or cancel any booking at our discretion. In such cases, any payment made will be refunded.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-blue-400">5. Cancellation and Refund Policy</h2>
                    <p className="leading-relaxed">
                        Cancellations made <span className="font-bold">[X]</span> hours before the scheduled pick-up time will receive a full refund. Cancellations made within <span className="font-bold">[X]</span> hours will incur a <span className="font-bold">[percentage]%</span> cancellation fee. No refunds will be provided for cancellations made after the pick-up time.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-blue-400">6. Vehicle Usage</h2>
                    <p className="leading-relaxed">
                        By booking a vehicle, you agree to comply with all traffic laws and regulations. You are responsible for any fines, penalties, or damages incurred during the rental period.
                    </p>
                    <p className="leading-relaxed">
                        Vehicles must be returned in the same condition as they were at the time of pick-up. Any damages or excessive wear and tear may result in additional charges.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-blue-400">7. Liability</h2>
                    <p className="leading-relaxed">
                        We are not liable for any indirect, incidental, or consequential damages arising from your use of the website or our services. Our liability is limited to the amount paid by you for the booking.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-blue-400">8. Changes to Terms</h2>
                    <p className="leading-relaxed">
                        We reserve the right to modify these terms and conditions at any time. Any changes will be effective immediately upon posting on this page. Your continued use of the website following the posting of changes constitutes your acceptance of those changes.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-blue-400">9. Governing Law</h2>
                    <p className="leading-relaxed">
                        These terms and conditions are governed by and construed in accordance with the laws of <span className="font-bold">[Your Country/State]</span>, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-blue-400">10. Contact Us</h2>
                    <p className="leading-relaxed">
                        If you have any questions about these terms and conditions, please contact us at <Link to='/contact' className="underline text-blue-400">carrentshop.com</Link>.
                    </p>
                </section>

                <p className="text-center mt-10 text-gray-400">
                    <strong>Effective Date:</strong> <span className="font-semibold">[Date]</span>
                </p>
            </div>
        </div>
    );
};

export default TermsAndConditions;
