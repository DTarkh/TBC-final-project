import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Link } from "@/i18n/routing"
// Removing the Diliya import since it's causing errors

export default function About() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-amber-600 font-medium mb-3 tracking-wide uppercase">Discover Our Story</h4>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">About Sphere</h1>
            <p className="text-lg text-slate-600 md:text-xl max-w-2xl mx-auto">
              Your universal marketplace for everything you need, bringing infinite possibilities to your fingertips
              with unmatched convenience and selection.
            </p>
          </div>
        </div>
        <div className="absolute -bottom-16 left-0 right-0 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-amber-600 opacity-10"></div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative order-2 md:order-1">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop"
                  alt="Sphere Marketplace"
                  width={700}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 z-0 w-64 h-64 rounded-lg bg-amber-600/10 hidden md:block"></div>
              <div className="absolute top-1/4 -right-8 z-20 w-48 h-48 rounded-lg overflow-hidden shadow-xl hidden md:block">
                <Image
                  src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop"
                  alt="Product Showcase"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h4 className="text-amber-600 font-medium mb-3 tracking-wide uppercase">Since 2013</h4>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Revolutionizing how the world shops online
              </h2>
              <p className="text-slate-600 mb-6 text-lg">
                Sphere began with a simple idea: create a single destination where customers could find anything they
                need. What started as a small online store has evolved into a global marketplace offering millions of
                products across countless categories.
              </p>
              <p className="text-slate-600 mb-8 text-lg">
                Our journey has been defined by innovation, customer obsession, and a commitment to making shopping
                easier, faster, and more enjoyable for everyone.
              </p>
              <div className="inline-flex items-center group">
                <a href="#values" className="text-amber-600 font-medium flex items-center group-hover:underline">
                  Explore our values
                  <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 bg-gradient-to-l from-[#E5E5E5] to-[#FCA311] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#14213D]">Our Core Values</h2>
            <p className="text-[#14213D] text-lg">The principles that guide everything we do at Sphere</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 transform transition-all duration-300 hover:translate-y-[-8px] hover:bg-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-[#14213D]">01</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-[#14213D]">Our Mission</h3>
              <p className="text-center text-[#14213D]">
                To create the most convenient and diverse shopping experience possible, connecting customers with every
                product they could imagine in one seamless marketplace.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 transform transition-all duration-300 hover:translate-y-[-8px] hover:bg-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-[#14213D]">02</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-[#14213D]">Our Vision</h3>
              <p className="text-center text-[#14213D]">
                To be the world&apos;s most customer-centric marketplace, where customers can discover anything they might
                want to buy online at unbeatable prices and convenience.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 transform transition-all duration-300 hover:translate-y-[-8px] hover:bg-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-[#14213D]">03</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-[#14213D]">Customer First</h3>
              <p className="text-center text-[#14213D]">
                Every decision we make starts with the customer. We work tirelessly to earn and maintain trust through
                transparent policies, reliable service, and exceptional support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#E5E5E5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h4 className="text-amber-600 font-medium mb-3 tracking-wide uppercase">The People Behind Sphere</h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Leadership Team</h2>
            <p className="text-slate-600 text-lg">
              Visionaries who turned an ambitious dream into a global marketplace
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            <div className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg mb-5 aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                  alt="Team Member"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-bold text-xl mb-1 text-center">David Tarkhnishvili</h3>
              <p className="text-slate-500 text-center">CEO & Co-Founder</p>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg mb-5 aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                  alt="Diliya Chanysheva"
                  fill
                  className="object-cover object-center scale-125 transition-transform duration-500 group-hover:scale-[1.35]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-bold text-xl mb-1 text-center">Diliya Chanysheva</h3>
              <p className="text-slate-500 text-center">CEO of Inspiration</p>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg mb-5 aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"
                  alt="Team Member"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-bold text-xl mb-1 text-center">Sarah Johnson</h3>
              <p className="text-slate-500 text-center">CTO & Co-Founder</p>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg mb-5 aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
                  alt="Team Member"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-bold text-xl mb-1 text-center">Michael Chen</h3>
              <p className="text-slate-500 text-center">COO & Co-Founder</p>
            </div>
          </div>

          <div className="mt-20 max-w-4xl mx-auto">
            <blockquote className="text-center">
              <p className="text-2xl md:text-3xl font-light text-slate-700 italic mb-8 leading-relaxed">
                &apos;We built Sphere on the belief that shopping should be effortless, exciting, and accessible to everyone.
                Our marketplace brings together the best products from around the world, creating a universe of
                possibilities for our customers.&apos;
              </p>
              <footer className="flex items-center justify-center">
                <div className="w-12 h-1 bg-amber-600 rounded-full"></div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-white py-20 md:py-32 px-4">
            <div className="max-w-md mx-auto md:ml-auto md:mr-0 md:pr-12">
              <h4 className="text-amber-600 font-medium mb-3 tracking-wide uppercase">Join Our Universe</h4>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Discover the Sphere difference</h2>
              <p className="text-slate-600 mb-8 text-lg">
                From everyday essentials to unique discoveries, Sphere brings the world&apos;s products to your doorstep with
                unmatched convenience, selection, and service.
              </p>
              <Link
                href="/store"
                className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Start Shopping
              </Link>
            </div>
          </div>

          <div className="relative h-80 md:h-auto">
            <Image
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
              alt="Sphere Shopping Experience"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 to-transparent"></div>
          </div>
        </div>
      </section>
    </main>
  )
}
