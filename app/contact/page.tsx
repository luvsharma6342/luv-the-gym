"use client";
import { useState } from 'react';
import { Send } from 'lucide-react';
import 'react-phone-input-2/lib/style.css'
import { toast } from "sonner"

const Form = () => {
    
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application.json" },
                body: JSON.stringify(form)
            });

            const data = await res.json();

            if (!res.ok) {
                // Zod errors or server error
                const msg =
                    data?.errors?.formErrors?.join(", ") ||
                    data?.error ||
                    "Failed to submit";
                setStatus({ ok: false, msg });
            }
            else {
                setStatus({ ok: true, msg: "Thanks! We'll reach out shortly" });
                toast("Details sent successfully");
                setForm({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    message: "",
                });
            }
        } catch (err) {
            setStatus({ ok: false, msg: "Network error. Please try again." })
        } finally {
            setLoading(false);
        }
    }

    return (
        <main>
            <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={form.firstName}
                            onChange={onChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
                            placeholder="John"
                        />
                    </div>

                    <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={form.lastName}
                            onChange={onChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
                            placeholder="Doe"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
                        placeholder="john@example.com"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone number
                    </label>
                    <input
                        name="phone"
                        type="tel"
                        placeholder="Phone (optional)"
                        value={form.phone}
                        onChange={onChange}
                        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        What can we do for you?
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        value={form.message}
                        onChange={onChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition resize-none"
                        placeholder="Tell us about your fitness goals or any questions you have..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transform hover:scale-105 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg"
                >
                    <div className='flex gap-2'>
                        {loading ? (
                            <div>Sending...</div>
                        ) : (
                            <div>Send</div>
                        )}
                        <Send className="h-5 w-5" />
                    </div>
                </button>
            </form>
                
            {
                status && (
                    <div
                        className={`mt-4 p-3 rounded ${status.ok ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                            }`}
                    >
                        {status.msg}
                    </div>
                )
            }
        </main>

    )
}

const Contact = () => {

    return (
        <main>
            <section className="py-30">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold text-green-500 mb-6">Get In Touch</h1>
                        <p className="text-xl text-green-900 leading-relaxed">
                            Have questions? We would love to hear from you. Send us a message and we will respond as soon as possible.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                        {/* Form section */}
                        <Form />

                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contact
