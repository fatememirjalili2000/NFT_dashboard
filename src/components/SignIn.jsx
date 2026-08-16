
import { FcGoogle } from "react-icons/fc";

export default function SignIn({ setCurrentTab }) {
  const handleLogin = (e) => {
    e.preventDefault();  
    setCurrentTab('dashboard');
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 xl:p-24">
        <div className="w-full max-w-[420px] space-y-8">
<button 
  onClick={() => setCurrentTab('dashboard')}
  className="absolute top-6 left-6 sm:top-10 sm:left-10 flex items-center gap-2 text-gray-500 hover:text-navy-700 transition-colors font-medium text-sm"
>
  <span>&larr; Back to Dashboard</span>
</button>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-700 mb-2">Sign In</h2>
            <p className="text-sm text-gray-500 font-medium">
              Enter your email and password to sign in!
            </p>
          </div>

          <button className="w-full flex items-center justify-center gap-2 bg-[#F4F7FE] text-navy-700 font-bold py-3 rounded-xl hover:bg-gray-100 transition-all">
            <FcGoogle className="text-xl" />
            <span>Sign in with Google</span>
          </button>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200"></div>
            <p className="text-sm font-medium text-gray-500">or</p>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-navy-700 mb-1">
                Email<span className="text-brand-500">*</span>
              </label>
              <input 
                type="email" 
                placeholder="mail@simmmple.com" 
                className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-700 mb-1">
                Password<span className="text-brand-500">*</span>
              </label>
              <input 
                type="password" 
                placeholder="Min. 8 characters" 
                className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                required
              />
            </div>

            <div className="flex items-center justify-between mt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500" />
                <span className="text-sm font-medium text-navy-700">Keep me logged in</span>
              </label>
              <a href="#" className="text-sm font-medium text-brand-500 hover:underline">
                Forgot password?
              </a>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#4318FF] text-white font-bold py-3 rounded-xl hover:bg-brand-600 transition-all mt-4 shadow-md shadow-brand-500/30"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm font-medium text-navy-700 text-center">
            Not registered yet? <a href="#" className="text-brand-500 font-bold hover:underline">Create an Account</a>
          </p>

        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2 p-4 relative">
        <div className="w-full h-full bg-gradient-to-br from-[#4318FF] to-[#11047A] rounded-bl-[120px] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] overflow-hidden relative flex items-center justify-center">
           <div className="text-center text-white z-10 p-10">
              <h1 className="text-4xl font-bold mb-4 border-2 border-white inline-block px-6 py-2 rounded-2xl">
                HORIZON UI
              </h1>
              <p className="text-lg font-medium opacity-80">
                Learn more about Horizon UI on official website.
              </p>
           </div>
           
           <div className="absolute w-64 h-64 border-4 border-white/10 rounded-full -bottom-10 -left-10"></div>
           <div className="absolute w-96 h-96 border-4 border-white/10 rounded-full -top-10 -right-10"></div>
        </div>
      </div>

    </div>
  );
}