import { ArrowRight } from "lucide-react"

const Hero = () => {
    return (
        <section id="#hero" className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-black pt-20">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920')] bg-cover bg-center opacity-20"></div>
            <div className="relative z-10 container mx-auto px-6 text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Crush your health and<br />fitness goals in no time
                </h1>
                <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                    It does not matter if your goal is to get stronger, burn fat, or to just stay fit our world class coaches will guide you every step of the way.
                </p>
                <button className="px-8 py-4 bg-green-500 hover:bg-green-600 cursor-pointer text-black font-bold text-lg rounded-full transition inline-flex items-center gap-2 group">
                    Start Your Free Trial
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
            </div>
        </section>
    )
}

export default Hero
