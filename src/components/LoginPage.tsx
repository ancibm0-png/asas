import { useState } from 'react';
import { Lock, Mail, User, GraduationCap, AlertCircle, Shield, Building2, Briefcase, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageView } from '../types/credential';

interface LoginPageProps {
  onLogin: (role: PageView, userInfo: { name: string; email: string }) => void;
  onBack: () => void;
}

const mockUsers = {
  admin: {
    email: 'admin@acadchain.com',
    password: 'admin123',
    name: 'System Administrator',
    role: 'admin' as PageView
  },
  institution: {
    email: 'institution@university.edu',
    password: 'inst123',
    name: 'University Registrar',
    role: 'institution' as PageView
  },
  student: {
    email: 'student@university.edu',
    password: 'student123',
    name: 'John Doe',
    role: 'student' as PageView
  },
  verify: {
    email: 'verifier@employer.com',
    password: 'verify123',
    name: 'HR Manager',
    role: 'verify' as PageView
  }
};

export default function LoginPage({ onLogin, onBack }: LoginPageProps) {
  const [selectedRole, setSelectedRole] = useState<PageView | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!selectedRole) {
      setError('Please select a role first');
      return;
    }

    if (!email.trim() || !password.trim()) {
      setError('Please enter email and password');
      return;
    }

    onLogin(selectedRole, { name: email, email });
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!selectedRole) {
      setError('Please select a role first');
      return;
    }

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('Please fill in all fields');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    onLogin(selectedRole, { name, email });
  };

  const handleQuickLogin = (userType: keyof typeof mockUsers) => {
    const user = mockUsers[userType];
    onLogin(user.role, { name: user.name, email: user.email });
  };

  const roleOptions = [
    {
      role: 'admin' as PageView,
      title: 'Admin',
      description: 'Platform administrator',
      icon: Shield,
      color: 'from-red-500 to-pink-600'
    },
    {
      role: 'student' as PageView,
      title: 'Student',
      description: 'View and share credentials',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      role: 'institution' as PageView,
      title: 'Institution',
      description: 'Issue credentials',
      icon: Building2,
      color: 'from-green-500 to-emerald-600'
    },
    {
      role: 'verify' as PageView,
      title: 'Employer',
      description: 'Verify credentials',
      icon: Briefcase,
      color: 'from-orange-500 to-amber-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-40 left-10 w-80 h-80 bg-blue-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-emerald-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8 relative z-10">
        <motion.div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-slate-700/50" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div className="flex items-center justify-center mb-6" variants={itemVariants}>
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9SDhWvIaGwyyoH9wENFZ4EFEqQCr4UXIVjw&s"
                alt="CredSphere Logo"
                className="w-8 h-8 rounded-lg object-cover"
              />
            </div>
          </motion.div>

          {!selectedRole ? (
            <motion.div variants={containerVariants}>
              <motion.h2 className="text-4xl font-bold text-white text-center mb-2" variants={itemVariants}>
                Select Your Role
              </motion.h2>
              <motion.p className="text-slate-300 text-center mb-8" variants={itemVariants}>
                Choose your role to continue
              </motion.p>

              <motion.div className="grid grid-cols-2 gap-4 mb-6" variants={containerVariants}>
                {roleOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <motion.button
                      key={option.role}
                      onClick={() => setSelectedRole(option.role)}
                      className="group relative overflow-hidden bg-slate-700/50 border border-slate-600 hover:border-slate-500 rounded-xl p-6 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      variants={itemVariants}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                      <div className="relative">
                        <div className={`w-12 h-12 bg-gradient-to-br ${option.color} rounded-lg flex items-center justify-center mb-3 mx-auto shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1">{option.title}</h3>
                        <p className="text-sm text-slate-300">{option.description}</p>
                      </div>
                    </motion.button>
                  );
                })}
              </motion.div>

              <motion.div className="mt-6 text-center" variants={itemVariants}>
                <button
                  onClick={onBack}
                  className="text-slate-400 hover:text-slate-200 text-sm font-medium transition-colors"
                >
                  Back to Home
                </button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div variants={containerVariants}>
              <motion.div className="flex items-center justify-between mb-6" variants={itemVariants}>
                <button
                  onClick={() => {
                    setSelectedRole(null);
                    setEmail('');
                    setPassword('');
                    setName('');
                    setError('');
                  }}
                  className="flex items-center text-slate-400 hover:text-slate-200 text-sm font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Change Role
                </button>
                <div className="flex items-center space-x-2">
                  {(() => {
                    const selected = roleOptions.find(r => r.role === selectedRole);
                    if (!selected) return null;
                    const Icon = selected.icon;
                    return (
                      <>
                        <div className={`w-8 h-8 bg-gradient-to-br ${selected.color} rounded-lg flex items-center justify-center`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-slate-200">{selected.title}</span>
                      </>
                    );
                  })()}
                </div>
              </motion.div>

              <motion.h2 className="text-3xl font-bold text-white text-center mb-2" variants={itemVariants}>
                {isSignUp ? 'Create Account' : 'Welcome Back'}
              </motion.h2>
              <motion.p className="text-slate-300 text-center mb-8" variants={itemVariants}>
                {isSignUp ? 'Sign up to access your credentials' : 'Sign in to access the platform'}
              </motion.p>

              {error && (
                <motion.div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-start" variants={itemVariants}>
                  <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-sm text-red-300">{error}</p>
                </motion.div>
              )}

              <motion.form onSubmit={isSignUp ? handleSignUp : handleLogin} className="space-y-5" variants={containerVariants}>
                {isSignUp && (
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-slate-200 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </motion.div>
                )}

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-slate-200 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-slate-200 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-11 pr-11 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-200"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  variants={itemVariants}
                >
                  {isSignUp ? 'Create Account' : 'Sign In'}
                </motion.button>
              </motion.form>

              <motion.div className="mt-6 text-center" variants={itemVariants}>
                <button
                  onClick={() => {
                    setIsSignUp(!isSignUp);
                    setError('');
                  }}
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
                </button>
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        <motion.div className="bg-gradient-to-br from-blue-600/20 to-emerald-600/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-slate-700/50 text-slate-100" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <motion.h3 className="text-2xl font-bold mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Demo Credentials
          </motion.h3>
          <motion.p className="text-slate-300 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            Use these credentials to explore different roles in the platform
          </motion.p>

          <motion.div className="space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, staggerChildren: 0.1 }}>
            {[
              { title: 'Administrator', email: 'admin@acadchain.com', password: 'admin123', key: 'admin' },
              { title: 'Institution', email: 'institution@university.edu', password: 'inst123', key: 'institution' },
              { title: 'Student', email: 'student@university.edu', password: 'student123', key: 'student' },
              { title: 'Employer', email: 'verifier@employer.com', password: 'verify123', key: 'verify' }
            ].map((cred) => (
              <motion.div
                key={cred.key}
                className="bg-white/5 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 hover:bg-white/10 hover:border-slate-600 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-lg text-white">{cred.title}</h4>
                  <motion.button
                    onClick={() => handleQuickLogin(cred.key as keyof typeof mockUsers)}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded text-sm font-medium hover:from-blue-600 hover:to-cyan-600 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Quick Login
                  </motion.button>
                </div>
                <p className="text-sm text-slate-300 mb-2">
                  Email: <span className="font-mono bg-slate-700/30 px-2 py-1 rounded text-slate-200">{cred.email}</span>
                </p>
                <p className="text-sm text-slate-300">
                  Password: <span className="font-mono bg-slate-700/30 px-2 py-1 rounded text-slate-200">{cred.password}</span>
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="mt-6 p-4 bg-slate-700/30 backdrop-blur-sm border border-slate-600/50 rounded-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <p className="text-sm text-slate-300">
              <strong className="text-slate-100">Note:</strong> This is a demo system. You can also sign up with any email to explore the student portal.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
