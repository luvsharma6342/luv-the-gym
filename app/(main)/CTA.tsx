import { Calendar, Users, Dumbbell, Trophy, ArrowRight, CheckCircle } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-20 bg-linear-to-br from-gray-900 to-black text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Life?</h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    Join hundreds of members who have already started their fitness journey. Try us free for 7 days.
                </p>
                <button className="px-8 py-4 bg-green-500 hover:bg-green-600 cursor-pointer text-black font-bold text-lg rounded-full transition inline-flex items-center gap-2">
                    Start Your Free Trial Today
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </section>
    )
}

export default CTA
