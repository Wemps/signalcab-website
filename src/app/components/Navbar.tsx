import { useState } from "react";
import { useNavigate } from "react-router";
import { Menu, X } from "lucide-react";
import logo from "figma:asset/b5f733e9f3a9a1b57f73caac2b271fc375e22b21.png";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0f1a]/80 border-b border-[#1f2937]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <img src={logo} alt="Signal Cab" className="h-8 sm:h-10" />
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#features" className="text-[#9ca3af] hover:text-[#00ffaa] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Features</a>
            <a href="/#how-it-works" className="text-[#9ca3af] hover:text-[#00ffaa] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>How It Works</a>
            <a href="/#specs" className="text-[#9ca3af] hover:text-[#00ffaa] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Specs</a>
            <span className="cursor-pointer text-[#9ca3af] hover:text-[#00ffaa] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => navigate("/pricing")}>Pricing</span>
            <button
              className="bg-[#00ffaa] text-[#0a0f1a] px-6 py-2.5 rounded-xl hover:shadow-[0_0_24px_rgba(0,255,170,0.3)] transition-all active:translate-y-0.5"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              Download App
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button className="md:hidden text-[#f3f4f6]" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0f1a]/95 backdrop-blur-xl border-t border-[#1f2937]/60 px-4 pb-6 pt-4 space-y-4">
          <a href="/#features" className="block text-[#9ca3af] hover:text-[#00ffaa] py-2" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => setMobileOpen(false)}>Features</a>
          <a href="/#how-it-works" className="block text-[#9ca3af] hover:text-[#00ffaa] py-2" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => setMobileOpen(false)}>How It Works</a>
          <a href="/#specs" className="block text-[#9ca3af] hover:text-[#00ffaa] py-2" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => setMobileOpen(false)}>Specs</a>
          <span className="block text-[#9ca3af] hover:text-[#00ffaa] py-2 cursor-pointer" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => { setMobileOpen(false); navigate("/pricing"); }}>Pricing</span>
          <button
            className="w-full bg-[#00ffaa] text-[#0a0f1a] px-6 py-3 rounded-xl"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
          >
            Download App
          </button>
        </div>
      )}
    </nav>
  );
}