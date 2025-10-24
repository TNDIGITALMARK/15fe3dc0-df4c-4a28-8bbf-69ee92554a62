export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
            🐕 Welcome to the World of Dogs
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Man's Best Friend
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Discover the fascinating world of dogs, from their ancient origins to their role as beloved companions.
            Learn about different breeds, their unique personalities, and the incredible bond between humans and canines.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all shadow-md hover:shadow-lg">
              Explore Breeds
            </button>
            <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium border-2 border-gray-200 hover:border-gray-300 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">340+</div>
              <div className="text-sm text-gray-600 font-medium">Dog Breeds</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">15,000</div>
              <div className="text-sm text-gray-600 font-medium">Years with Humans</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">900M+</div>
              <div className="text-sm text-gray-600 font-medium">Dogs Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-sm text-gray-600 font-medium">Loyalty & Love</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Breeds Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Popular Dog Breeds</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From energetic companions to gentle giants, explore some of the world's most beloved dog breeds
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Golden Retriever */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
                <div className="text-6xl">🦮</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Golden Retriever</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Friendly, intelligent, and devoted. Perfect family companions known for their gentle temperament and love of play.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">Friendly</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">Intelligent</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">Active</span>
                </div>
              </div>
            </div>

            {/* German Shepherd */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
                <div className="text-6xl">🐕‍🦺</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">German Shepherd</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Courageous, confident, and smart. Excellent working dogs with unwavering loyalty and protective instincts.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">Loyal</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">Protective</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">Brave</span>
                </div>
              </div>
            </div>

            {/* Labrador */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                <div className="text-6xl">🐕</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Labrador Retriever</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Outgoing, even-tempered, and gentle. America's most popular breed, beloved for their friendly nature.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">Playful</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">Gentle</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">Social</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Amazing Dog Facts</h2>
            <p className="text-lg text-gray-600">Did you know these incredible things about our furry friends?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">👃</div>
              <h3 className="text-lg font-semibold mb-2">Super Sense of Smell</h3>
              <p className="text-gray-600 leading-relaxed">
                A dog's sense of smell is 10,000 to 100,000 times more acute than humans. They can detect odors at concentrations nearly 100 million times lower than humans can.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-semibold mb-2">Remarkable Intelligence</h3>
              <p className="text-gray-600 leading-relaxed">
                Dogs can understand up to 250 words and gestures, count up to five, and perform simple mathematical calculations. Some breeds are as smart as a 2-year-old child.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">❤️</div>
              <h3 className="text-lg font-semibold mb-2">Emotional Connection</h3>
              <p className="text-gray-600 leading-relaxed">
                Dogs' brains release oxytocin (the love hormone) when they interact with humans, the same hormone that bonds mothers to babies. They truly love us!
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🐾</div>
              <h3 className="text-lg font-semibold mb-2">Unique Nose Prints</h3>
              <p className="text-gray-600 leading-relaxed">
                Just like human fingerprints, every dog's nose print is unique. The patterns of ridges and creases are distinctive enough to identify individual dogs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">💪</div>
              <h3 className="text-lg font-semibold mb-2">Incredible Athletes</h3>
              <p className="text-gray-600 leading-relaxed">
                Greyhounds can run up to 45 mph, making them the second-fastest land animal after cheetahs. Some dogs can swim over 100 miles in a single day!
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🕐</div>
              <h3 className="text-lg font-semibold mb-2">Perfect Time Sense</h3>
              <p className="text-gray-600 leading-relaxed">
                Dogs have an incredible sense of time and can be trained to predict future events. They know when it's dinner time or when you're about to come home!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Dogs Are Special Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-white text-center">
            <div className="text-5xl mb-6">🐶</div>
            <h2 className="text-3xl font-bold mb-4">Why Dogs Are Our Best Friends</h2>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              For over 15,000 years, dogs have been our loyal companions, protectors, and friends. They ask for nothing more than our love and care, yet they give us unconditional devotion, endless joy, and unwavering support through every moment of our lives.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="font-semibold mb-2">🛡️ Protection</div>
                <p className="text-sm text-gray-300">Always watching over their families with fierce devotion</p>
              </div>
              <div>
                <div className="font-semibold mb-2">😊 Companionship</div>
                <p className="text-sm text-gray-300">Reducing loneliness and improving mental health</p>
              </div>
              <div>
                <div className="font-semibold mb-2">🏃 Activity</div>
                <p className="text-sm text-gray-300">Encouraging exercise and outdoor adventures</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-3xl mb-4">🐕</div>
          <p className="text-gray-600 mb-2">
            "The only creatures that are evolved enough to convey pure love are dogs and infants."
          </p>
          <p className="text-sm text-gray-500">— Johnny Depp</p>
          <div className="mt-8 text-sm text-gray-500">
            © {new Date().getFullYear()} Dog Lovers. Made with ❤️ for our furry friends.
          </div>
        </div>
      </footer>
    </div>
  );
}
