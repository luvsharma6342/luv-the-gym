import { Calendar, Users, Dumbbell, Trophy } from 'lucide-react';

const Benefits = () => {
    const data = [
        {
            icon: Users,
            title: "World-Class Coaches",
            desc: "Certified professionals dedicated to your success"
        },
        {
            icon: Calendar,
            title: "Flexible Schedule",
            desc: "Classes throughout the day to fit your lifestyle"
        },
        {
            icon: Dumbbell,
            title: "Top Equipment",
            desc: "Premium gear for every workout style"
        },
        {
            icon: Trophy,
            title: "Community",
            desc: "Join a supportive team that celebrates wins together"
        }
    ]
    return (
        <section id="benefits" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Gym</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We provide everything you need to achieve your fitness goals in a supportive, motivating environment
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.map((benefit, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl cursor-pointer transition group hover:scale-105">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-500 transition">
                                <benefit.icon className="w-8 h-8 text-green-600 group-hover:text-white transition" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Benefits
