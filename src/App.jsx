import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import { 
  Play, Music, Users, Award, Smartphone, Headphones, Star, Download, ChevronRight, 
  Pencil as Piano, Volume2, Zap, Target, BookOpen, Trophy, Info, Lightbulb, Gamepad2, 
  ListMusic, BarChart3, Usb, Globe, MessageSquare, Swords, Crown, TrendingUp, 
  Clock, Medal, Sparkles, ArrowRight, Menu, X, CheckCircle2, Quote
} from 'lucide-react';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const leaderboardData = [
    { rank: 1, name: "Alex Chen", score: 98450, avatar: "🎹", badge: "🥇" },
    { rank: 2, name: "Sarah Martinez", score: 97230, avatar: "🎵", badge: "🥈" },
    { rank: 3, name: "Jordan Kim", score: 96120, avatar: "🎶", badge: "🥉" },
    { rank: 4, name: "Taylor Swift", score: 94890, avatar: "🎼", badge: "" },
    { rank: 5, name: "Chris Brown", score: 93560, avatar: "🎤", badge: "" },
    { rank: 6, name: "Morgan Lee", score: 92340, avatar: "🎧", badge: "" },
    { rank: 7, name: "Riley Park", score: 91020, avatar: "🎸", badge: "" },
    { rank: 8, name: "Casey Wong", score: 89780, avatar: "🎺", badge: "" },
  ];

  const testimonials = [
    {
      name: "Emma Thompson",
      role: "Beginner Pianist",
      content: "Museji transformed my piano learning experience! The interactive lessons and real-time feedback helped me progress faster than I ever imagined.",
      rating: 5,
      avatar: "👩‍🎤"
    },
    {
      name: "Marcus Rodriguez",
      role: "Music Teacher",
      content: "As a music educator, I'm impressed by Museji's innovative approach. The multiplayer features make learning collaborative and fun for my students.",
      rating: 5,
      avatar: "👨‍🏫"
    },
    {
      name: "Sophie Anderson",
      role: "Advanced Player",
      content: "The versus mode is incredible! Competing with friends has pushed me to improve my skills in ways traditional practice never could.",
      rating: 5,
      avatar: "👩‍🎓"
    },
    {
      name: "David Park",
      role: "Casual Learner",
      content: "I love how accessible Museji makes piano learning. The rhythm games are addictive, and I've learned so much without even realizing it!",
      rating: 5,
      avatar: "👨‍💼"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-x-hidden">
      <Toaster />
      
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full z-50 glass-effect-strong"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('home')}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                <Piano className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">Museji</span>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-white transition-colors font-medium" aria-label="Navigate to Features section">Features</button>
              <button onClick={() => scrollToSection('multiplayer')} className="text-gray-300 hover:text-white transition-colors font-medium" aria-label="Navigate to Multiplayer section">Multiplayer</button>
              <button onClick={() => scrollToSection('leaderboard')} className="text-gray-300 hover:text-white transition-colors font-medium" aria-label="Navigate to Leaderboard section">Leaderboard</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-white transition-colors font-medium" aria-label="Navigate to Testimonials section">Reviews</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors font-medium" aria-label="Navigate to About section">About</button>
              <Button onClick={handleGetStarted} className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white border-0">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 space-y-3"
            >
              <button onClick={() => scrollToSection('features')} className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2" aria-label="Navigate to Features section">Features</button>
              <button onClick={() => scrollToSection('multiplayer')} className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2" aria-label="Navigate to Multiplayer section">Multiplayer</button>
              <button onClick={() => scrollToSection('leaderboard')} className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2" aria-label="Navigate to Leaderboard section">Leaderboard</button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2" aria-label="Navigate to Testimonials section">Reviews</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2" aria-label="Navigate to About section">About</button>
              <Button onClick={handleGetStarted} className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white border-0">
                Get Started
              </Button>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect mb-6"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-gray-300">Revolutionary Piano Learning</span>
              </motion.div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Learn Piano
                <span className="text-gradient block mt-2">Like Never Before</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your musical journey with Museji's revolutionary approach to piano learning. 
                Interactive lessons, real-time feedback, multiplayer battles, and AI-powered guidance make mastering piano fun and effective.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleGetStarted}
                  size="lg" 
                  className="bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500 hover:from-indigo-600 hover:via-purple-600 hover:to-amber-600 text-white text-lg px-8 py-6 pulse-glow border-0"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Start Learning Now
                </Button>
                <Button 
                  onClick={handleDownload}
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 text-lg px-8 py-6 backdrop-blur-sm"
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
                  alt="Museji piano learning app interface displayed on a modern tablet showing interactive piano keys and learning progress"
                  src="https://images.unsplash.com/photo-1701111310021-6c8dc5aa4a19"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-gradient-to-r from-amber-500/20 to-cyan-500/20 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Piano Keys Visual */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
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
                  aria-label={`Piano key ${i + 1}`}
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
                  aria-label={`Black piano key at position ${pos}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">Why Choose Museji?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of piano learning with cutting-edge technology and proven teaching methods
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
              { icon: <MessageSquare className="w-8 h-8" />, title: "Built-in Community", description: "Connect, share, and learn with fellow Museji users in our vibrant community." },
              { icon: <Headphones className="w-8 h-8" />, title: "High-Quality Audio", description: "Crystal-clear sound quality for the best learning and playing experience." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-effect p-6 sm:p-8 rounded-2xl group cursor-pointer flex flex-col items-center text-center hover:glass-effect-strong transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Multiplayer & Versus Modes Section */}
      <section id="multiplayer" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect mb-6">
              <Swords className="w-5 h-5 text-amber-400" />
              <span className="text-sm text-gray-300 font-medium">Competitive & Collaborative</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">Multiplayer & Versus Modes</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Challenge friends, compete globally, or collaborate in real-time. Experience piano learning like never before.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Versus Mode */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect-strong p-8 rounded-2xl hover:scale-105 transition-transform"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                  <Swords className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Versus Mode</h3>
                  <p className="text-gray-400">Head-to-head competition</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Face off against friends or players worldwide in real-time piano battles. Show off your skills, accuracy, and speed as you compete for the top spot.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Real-time synchronized gameplay",
                  "Live scoring and leaderboards",
                  "Custom difficulty levels",
                  "Tournament brackets"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white border-0">
                Start Battle <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            {/* Collaborative Mode */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect-strong p-8 rounded-2xl hover:scale-105 transition-transform"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Collaborative Mode</h3>
                  <p className="text-gray-400">Play together and connect with new users!</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Join forces with friends to create beautiful music together. Perfect for duets, group performances, and learning from each other.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Synchronized multi-player sessions",
                  "Role assignment (melody, harmony, bass)",
                  "Shared practice rooms",
                  "Record and share performances"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white border-0">
                Join Session <Users className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>

          {/* Additional Multiplayer Features */}
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: <Clock className="w-6 h-6" />, title: "Live Sessions", description: "Join or host real-time practice sessions" },
              { icon: <Trophy className="w-6 h-6" />, title: "Ranked Matches", description: "Compete in ranked versus matches" },
              { icon: <TrendingUp className="w-6 h-6" />, title: "Progress Sharing", description: "Compare progress with friends" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-xl text-center hover:glass-effect-strong transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section id="leaderboard" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect mb-6">
              <Crown className="w-5 h-5 text-amber-400" />
              <span className="text-sm text-gray-300 font-medium">Global Rankings</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">Top Players</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              See who's dominating the leaderboards and challenge yourself to reach the top!
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect-strong rounded-2xl p-6 sm:p-8 overflow-hidden"
          >
            <div className="space-y-4">
              {leaderboardData.map((player, index) => (
                <motion.div
                  key={player.rank}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center p-4 rounded-xl transition-all ${
                    index < 3 
                      ? 'bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-indigo-500/10 border-2 border-amber-500/30' 
                      : 'glass-effect hover:glass-effect-strong'
                  }`}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-lg mr-4">
                    {player.rank}
                    {player.badge && <span className="ml-1">{player.badge}</span>}
                  </div>
                  <div className="text-3xl mr-4">{player.avatar}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">{player.name}</h3>
                    <p className="text-sm text-gray-400">Total Score</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gradient">{player.score.toLocaleString()}</div>
                    {index < 3 && (
                      <div className="flex items-center justify-end mt-1">
                        <Medal className="w-4 h-4 text-amber-400" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button 
                variant="outline" 
                className="border-2 border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10"
                onClick={() => scrollToSection('home')}
              >
                View Full Leaderboard <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect mb-6">
              <Star className="w-5 h-5 text-amber-400" />
              <span className="text-sm text-gray-300 font-medium">User Reviews</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">What Our Users Say</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied learners who have transformed their piano skills with Museji
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect-strong p-8 rounded-2xl hover:scale-105 transition-transform"
              >
                <div className="flex items-start mb-6">
                  <div className="text-5xl mr-4">{testimonial.avatar}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{testimonial.role}</p>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-indigo-400/30 flex-shrink-0" />
                </div>
                <p className="text-gray-300 leading-relaxed italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">About Museji</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
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
                alt="Team of Museji developers collaborating on innovative music education technology"
                src="https://images.unsplash.com/photo-1565841327798-694bc2074762"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-4 text-white">Our Story</h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Museji was born from a simple idea: make learning piano accessible, engaging, and incredibly fun for everyone, everywhere. We're a team of musicians, educators, and tech enthusiasts who believe in the transformative power of music. We noticed that traditional piano lessons could be rigid, expensive, or just plain boring. So, we decided to shake things up!
              </p>
              <h3 className="text-3xl font-bold mb-4 mt-8 text-white">
                Our Mission <Lightbulb className="inline w-7 h-7 text-amber-400" />
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our mission is to unlock the musical potential within every individual. We strive to create an intuitive platform that not only teaches you how to play but also fosters a deep love and understanding of music. Whether you're a complete beginner or looking to refine your skills, Museji is your dedicated partner on this harmonious adventure. We're constantly innovating, adding new songs, features, and ways to make your learning experience exceptional.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect-strong rounded-3xl p-8 sm:p-12"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Ready to Start Your Musical Journey?</h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their piano skills with Museji. 
              Your first lesson is just a click away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleGetStarted}
                size="lg" 
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500 hover:from-indigo-600 hover:via-purple-600 hover:to-amber-600 text-white text-lg px-12 py-6 border-0 pulse-glow"
              >
                <Music className="w-5 h-5 mr-2" />
                Begin Your Journey
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                onClick={handleDownload}
                variant="outline" 
                size="lg" 
                className="border-2 border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 text-lg px-8 py-6 backdrop-blur-sm"
              >
                <Download className="w-5 h-5 mr-2" />
                Download App
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500 rounded-lg flex items-center justify-center">
                <Piano className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">Museji</span>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm" aria-label="Footer navigation">
              <button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors" aria-label="Navigate to Features section">Features</button>
              <button onClick={() => scrollToSection('multiplayer')} className="hover:text-white transition-colors" aria-label="Navigate to Multiplayer section">Multiplayer</button>
              <button onClick={() => scrollToSection('leaderboard')} className="hover:text-white transition-colors" aria-label="Navigate to Leaderboard section">Leaderboard</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors" aria-label="Navigate to About section">About</button>
              <button className="hover:text-white transition-colors" aria-label="View Privacy Policy">Privacy Policy</button>
              <button className="hover:text-white transition-colors" aria-label="View Terms of Service">Terms of Service</button>
              <button className="hover:text-white transition-colors" aria-label="Contact us">Contact</button>
            </nav>
            <div className="text-gray-400 text-sm text-center md:text-right">
              © 2025 Museji. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;