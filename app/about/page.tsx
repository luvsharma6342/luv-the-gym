import { Users, Award, Heart, Target, TrendingUp } from 'lucide-react';

const Mission = () => {
  return (
    <>
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-green-500 mb-6">About Luv the Gym</h1>
        <p className="text-xl text-green-900 max-w-3xl mx-auto leading-relaxed">
          Where dedication meets transformation. We are not just a gym—we are a community committed to helping you achieve your fitness goals.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition duration-300">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Luv the Gym began with a simple idea — fitness should feel empowering, not intimidating. What started as a small training space quickly grew into a community of people who support, motivate, and push each other to be stronger every single day.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We built this gym on passion and patience, believing that real transformation does not happen overnight but through consistency, discipline, and a little bit of fun along the way. Every weight lifted and every drop of sweat here represents progress, not perfection.
          </p>
        </div>
        <div className="bg-green-600 rounded-2xl shadow-2xl p-8 text-white transform hover:scale-105 transition duration-300">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="leading-relaxed mb-4">
            Our mission is to make fitness accessible, sustainable, and personal. At Luv the Gym, we focus on helping members build lifelong healthy habits rather than chasing temporary results. We combine strength training, functional workouts, and mindful recovery to create balance in both body and mind.
          </p>
          <p className="leading-relaxed">
            Our certified trainers guide you at every step, adapting programs to your goals and lifestyle. Whether you are a beginner taking your first step or an athlete refining your edge, we’re here to make your fitness journey exciting and achievable.

            Because at Luv the Gym, it is not just about building muscle — it is about building confidence, consistency, and a better version of yourself.
          </p>
        </div>
      </div>
    </>
  )
}

const WhyLuvGym = () => {
  return (
    <div className="mb-20">

      <h2 className="text-4xl font-bold text-green-500 text-center mb-12">Why Choose Luv the Gym?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
          <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-green-700 mb-3">Expert Trainers</h3>
          <p className="text-gray-600 leading-relaxed">
            Our certified trainers bring years of experience and genuine passion to help you reach your goals safely and effectively.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
          <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <Award className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-green-700 mb-3">State-of-the-Art Equipment</h3>
          <p className="text-gray-600 leading-relaxed">
            Train with the latest equipment designed to maximize your performance and minimize injury risk.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
          <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-green-700 mb-3">Supportive Community</h3>
          <p className="text-gray-600 leading-relaxed">
            Join a welcoming community where members motivate each other and celebrate every milestone together.
          </p>
        </div>
      </div>
    </div>
  )
}

const Numbers = () => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-12 mb-20">
      <h2 className="text-4xl font-bold text-green-500 text-center mb-12">By The Numbers</h2>
      <div className="grid md:grid-cols-4 gap-8 text-center">
        <div className="transform hover:scale-110 transition duration-300">
          <div className="flex justify-center mb-4">
            <Users className="h-12 w-12 text-green-600" />
          </div>
          <div className="text-5xl font-bold text-green-700 mb-2">2,000+</div>
          <div className="text-gray-600 font-semibold">Active Members</div>
        </div>
        <div className="transform hover:scale-110 transition duration-300">
          <div className="flex justify-center mb-4">
            <Target className="h-12 w-12 text-green-600" />
          </div>
          <div className="text-5xl font-bold text-green-700 mb-2">50+</div>
          <div className="text-gray-600 font-semibold">Weekly Classes</div>
        </div>
        <div className="transform hover:scale-110 transition duration-300">
          <div className="flex justify-center mb-4">
            <Award className="h-12 w-12 text-green-600" />
          </div>
          <div className="text-5xl font-bold text-green-700 mb-2">25</div>
          <div className="text-gray-600 font-semibold">Expert Trainers</div>
        </div>
        <div className="transform hover:scale-110 transition duration-300">
          <div className="flex justify-center mb-4">
            <TrendingUp className="h-12 w-12 text-green-600" />
          </div>
          <div className="text-5xl font-bold text-green-700 mb-2">9</div>
          <div className="text-gray-600 font-semibold">Years Strong</div>
        </div>
      </div>
    </div>
  )
}

const Ready = () => {
  return (
    <div className="bg-green-600 rounded-2xl shadow-2xl p-12 text-center">
      <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
      <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
        Join the FitCore family today and discover what you are truly capable of achieving.
      </p>
      <button className="bg-white text-green-700 font-bold px-12 py-4 rounded-full text-lg hover:bg-green-50 cursor-pointer transform hover:scale-105 transition duration-300 shadow-lg">
        Get Started Today
      </button>
    </div>
  )
}

const About = () => {
  return (
    <main>
      <section className="relative py-30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


          {/* Mission section */}
          <Mission />

          {/* Why luvgym section */}
          <WhyLuvGym />

          {/* Numbers section */}
          <Numbers />

          {/* Ready section */}
          <Ready />

        </div>
      </section>
    </main>
  )
}

export default About
