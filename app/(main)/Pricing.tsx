"use client";
import { BlobOptions } from 'buffer';
import { Calendar, Users, Dumbbell, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const Pricing = () => {
    const [popular, setPopular] = useState<boolean[]>([false, true, false]);
    const selectPlan = (idx: number) => {
        if (idx === 0) setPopular([true, false, false]);
        if (idx === 1) setPopular([false, true, false]);
        if (idx === 2) setPopular([false, false, true]);
    }
    const data = [
        {
            name: "Basic",
            price: "$99",
            features: ["3 classes per week", "Open gym access", "Community support", "Mobile app"],
            popular: false
        },
        {
            name: "Premium",
            price: "$149",
            features: ["Unlimited classes", "Personal training session", "Nutrition guidance", "Priority booking", "All Basic features"],
            popular: true
        },
        {
            name: "Elite",
            price: "$199",
            features: ["Everything in Premium", "Weekly 1-on-1 coaching", "Custom meal plans", "Recovery services", "Exclusive events"],
            popular: false
        }
    ]
    return (
        <section id="membership" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Membership Plans</h2>
                    <p className="text-gray-600">Choose the plan that fits your goals</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {data.map((plan, idx) => (
                        <div key={idx} onClick={() => selectPlan(idx)} className={`bg-white rounded-xl p-8 border-2 ${popular[idx] ? 'border-green-500 shadow-2xl scale-105' : 'border-gray-200 shadow-lg'} relative hover:cursor-pointer`}>
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-green-500 text-black text-sm font-bold rounded-full">
                                    MOST POPULAR
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                            <div className="mb-6">
                                <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                                <span className="text-gray-600">/month</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-3 rounded-lg font-semibold transition ${popular[idx] ? 'bg-green-500 hover:bg-green-600 cursor-pointer text-black' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}>
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing
