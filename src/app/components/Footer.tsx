import { useNavigate } from "react-router";
import logo from "figma:asset/b5f733e9f3a9a1b57f73caac2b271fc375e22b21.png";

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#0a0f1a] border-t border-[#1f2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={logo} alt="Signal Cab" className="h-8 mb-4" />
            <p className="text-[#6b7280] max-w-xs" style={{ fontFamily: 'Inter, sans-serif', fontSize: 14 }}>
              The modern DCC locomotive controller for model railroad enthusiasts.
            </p>
          </div>
          <div>
            <h4 className="text-[#f3f4f6] mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14 }}>Product</h4>
            <ul className="space-y-3">
              <li><a href="/#features" className="text-[#6b7280] hover:text-[#00ffaa] transition-colors" style={{ fontFamily: 'Inter, sans-serif', fontSize: 14 }}>Features</a></li>
              <li><a href="/#how-it-works" className="text-[#6b7280] hover:text-[#00ffaa] transition-colors" style={{ fontFamily: 'Inter, sans-serif', fontSize: 14 }}>How It Works</a></li>
              <li><a href="/#specs" className="text-[#6b7280] hover:text-[#00ffaa] transition-colors" style={{ fontFamily: 'Inter, sans-serif', fontSize: 14 }}>Specs</a></li>
              <li><span onClick={() => { navigate("/pricing"); window.scrollTo({ top: 0 }); }} className="text-[#6b7280] hover:text-[#00ffaa] transition-colors cursor-pointer" style={{ fontFamily: 'Inter, sans-serif', fontSize: 14 }}>Pricing</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#f3f4f6] mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14 }}>Support</h4>
            <ul className="space-y-3">
              <li><span onClick={() => { navigate("/contact"); window.scrollTo({ top: 0 }); }} className="text-[#6b7280] hover:text-[#00ffaa] transition-colors cursor-pointer" style={{ fontFamily: 'Inter, sans-serif', fontSize: 14 }}>Contact</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#f3f4f6] mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14 }}>Legal</h4>
            <ul className="space-y-3">
              <li><span onClick={() => { navigate("/privacy"); window.scrollTo({ top: 0 }); }} className="text-[#6b7280] hover:text-[#00ffaa] transition-colors cursor-pointer" style={{ fontFamily: 'Inter, sans-serif', fontSize: 14 }}>Privacy</span></li>
              <li><span onClick={() => { navigate("/terms"); window.scrollTo({ top: 0 }); }} className="text-[#6b7280] hover:text-[#00ffaa] transition-colors cursor-pointer" style={{ fontFamily: 'Inter, sans-serif', fontSize: 14 }}>Terms</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#1f2937] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#4b5563]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 13 }}>&copy; 2026 Cascade Made, LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/wemps" target="_blank" rel="noopener noreferrer" className="text-[#4b5563] hover:text-[#00ffaa] transition-colors" style={{ fontFamily: 'Inter, sans-serif', fontSize: 13 }}>GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}