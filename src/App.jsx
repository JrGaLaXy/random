import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import { Play, Music, Users, Award, Smartphone, Headphones, Star, Download, ChevronRight, Pencil as Piano, Volume2, Zap, Target, BookOpen, Trophy, Info, Lightbulb, Gamepad2, ListMusic, BarChart3, Usb, Globe, MessageSquare } from 'lucide-react';

const App = () => {
  const handleGetStarted = () => {
    toast({
      title: "Welcome to Museji! 🎹",
      description: "Your musical journey is about to begin!",
    });
  };

  const handleDownload = () => {
    toast({
      title: "Download Coming Soon! 📱",
      description: "We'll notify you when the app is available for download.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <Toaster />
      
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full z-50 glass-effect"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Piano className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">Museji</span>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <Button onClick={handleGetStarted} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Learn Piano
                <span className="text-gradient block">Like Never Before</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your musical journey with Museji's revolutionary approach to piano learning. 
                Interactive lessons, real-time feedback, and AI-powered guidance make mastering piano fun and effective.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleGetStarted}
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-6 pulse-glow"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Start Learning Now
                </Button>
                <Button 
                  onClick={handleDownload}
                  variant="outline" 
                  size="lg" 
                  className="border-purple-500 text-purple-400 hover:bg-purple-500/10 text-lg px-8 py-6"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download App
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative z-10">
                 <img 
                  className="w-full h-auto rounded-2xl shadow-2xl floating-animation" 
                  alt="Museji piano learning app interface displayed on a modern tablet"
                  src="https://images.unsplash.com/photo-1701111310021-6c8dc5aa4a19" />
              </div>
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Piano Keys Visual */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-32 rounded-lg overflow-hidden shadow-2xl"
          >
            <div className="flex h-full">
              {[...Array(14)].map((_, i) => (
                <motion.div
                  key={i}
                  className="flex-1 piano-keys border-r border-gray-400 piano-key cursor-pointer"
                  whileHover={{ y: -4 }}
                  whileTap={{ y: 2 }}
                />
              ))}
            </div>
            <div className="absolute top-0 left-0 h-20 flex">
              {[0, 1, 3, 4, 5, 7, 8, 10, 11, 12].map((pos) => (
                <motion.div
                  key={pos}
                  className="w-8 h-full piano-key-black piano-key cursor-pointer"
                  style={{ marginLeft: `${pos * 7.14 + 5}%` }}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 1 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-gradient">Why Choose Museji?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of piano learning with cutting-edge technology and proven teaching methods
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              { icon: <Zap className="w-8 h-8" />, title: "AI-Powered Learning", description: "Personalized lessons that adapt to your pace and learning style." },
              { icon: <Volume2 className="w-8 h-8" />, title: "Real-Time Feedback", description: "Instant audio recognition and correction for perfect technique." },
              { icon: <Target className="w-8 h-8" />, title: "Goal Tracking", description: "Set and achieve musical milestones with our progress system." },
              { icon: <BookOpen className="w-8 h-8" />, title: "Interactive Lessons", description: "Engaging tutorials with visual guides and step-by-step instructions." },
              { icon: <Users className="w-8 h-8" />, title: "Multiplayer Modes", description: "Play along or compete with friends in real-time piano duels and collaborations." },
              { icon: <Usb className="w-8 h-8" />, title: "MIDI Keyboard Support", description: "Connect your own digital piano or MIDI keyboard for an authentic playing experience." },
              { icon: <BarChart3 className="w-8 h-8" />, title: "Leaderboards", description: "Challenge yourself and others! Climb the ranks and showcase your piano skills." },
              { icon: <Gamepad2 className="w-8 h-8" />, title: "Rhythm Games", description: "Sharpen your timing and coordination with fun, interactive rhythm-based challenges." },
              { icon: <ListMusic className="w-8 h-8" />, title: "Vast Song Library", description: "Learn to play your favorite tunes from a diverse collection spanning various genres." },
              { icon: <Globe className="w-8 h-8" />, title: "Explore a 3D World", description: "Immerse yourself in interactive 3D environments designed for musical exploration." },
              { icon: <MessageSquare className="w-8 h-8" />, title: "Built-in Community", description: "Connect, share, and learn with fellow Museji users in our vibrant community." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-effect p-8 rounded-2xl group cursor-pointer flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section id="about" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-gradient">About Museji</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the passion and innovation behind your favorite piano learning app.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img  
                className="w-full h-auto rounded-2xl shadow-2xl" 
                alt="Team of Museji developers collaborating"
               src="https://images.unsplash.com/photo-1565841327798-694bc2074762" />
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-4">Our Story</h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Museji was born from a simple idea: make learning piano accessible, engaging, and incredibly fun for everyone, everywhere. We're a team of musicians, educators, and tech enthusiasts who believe in the transformative power of music. We noticed that traditional piano lessons could be rigid, expensive, or just plain boring. So, we decided to shake things up!
              </p>
              <h3 className="text-3xl font-bold mb-4 mt-8">Our Mission <Lightbulb className="inline w-7 h-7 text-yellow-400" /></h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our mission is to unlock the musical potential within every individual. We strive to create an intuitive platform that not only teaches you how to play but also fosters a deep love and understanding of music. Whether you're a complete beginner or looking to refine your skills, Museji is your dedicated partner on this harmonious adventure. We're constantly innovating, adding new songs, features, and ways to make your learning experience exceptional.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-12"
          >
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "50K+", label: "Active Learners" },
                { number: "1M+", label: "Lessons Completed" },
                { number: "95%", label: "Success Rate" },
                { number: "4.9★", label: "App Rating" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">Ready to Start Your Musical Journey?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their piano skills with Museji. 
              Your first lesson is just a click away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleGetStarted}
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-12 py-6"
              >
                <Music className="w-5 h-5 mr-2" />
                Begin Your Journey
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Piano className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">Museji</span>
            </div>
            <div className="flex items-center space-x-6 text-gray-400">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Contact</span>
            </div>
            <div className="text-gray-400 mt-4 md:mt-0">
              © 2025 Museji. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;