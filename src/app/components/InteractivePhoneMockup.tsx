import { useState, useRef, useCallback } from "react";
import { Sun, Bell, Volume2, ArrowDown, ArrowUp, Square, Train, Gauge, Settings, AlertCircle } from "lucide-react";

const functionButtons = [
  { id: "f3", label: "F3", sub: "FUNC 3" },
  { id: "f4", label: "F4", sub: "FUNC 4" },
  { id: "f5", label: "F5", sub: "FUNC 5" },
  { id: "f6", label: "F6", sub: "FUNC 6" },
  { id: "f7", label: "F7", sub: "FUNC 7" },
  { id: "f8", label: "F8", sub: "FUNC 8" },
  { id: "f9", label: "F9", sub: "FUNC 9" },
  { id: "f10", label: "F10", sub: "FUNC 10" },
  { id: "f11", label: "F11", sub: "FUNC 11" },
  { id: "f12", label: "F12", sub: "FUNC 12" },
];

export function InteractivePhoneMockup() {
  const [speed, setSpeed] = useState(54);
  const [direction, setDirection] = useState<"FWD" | "REV">("FWD");
  const [headlight, setHeadlight] = useState(true);
  const [bell, setBell] = useState(true);
  const [horn, setHorn] = useState(false);
  const [activeFuncs, setActiveFuncs] = useState<Set<string>>(new Set());
  const [isStopped, setIsStopped] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleThrottleInteraction = useCallback((clientY: number) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const relativeY = clientY - rect.top;
    const percentage = Math.round(Math.max(0, Math.min(100, 100 - (relativeY / rect.height) * 100)));
    setSpeed(percentage);
    if (isStopped && percentage > 0) setIsStopped(false);
  }, [isStopped]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    handleThrottleInteraction(e.clientY);
  }, [handleThrottleInteraction]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    handleThrottleInteraction(e.clientY);
  }, [handleThrottleInteraction]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const toggleFunc = (id: string) => {
    setActiveFuncs(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleStop = () => {
    setSpeed(0);
    setIsStopped(true);
  };

  const displaySpeed = isStopped ? 0 : speed;

  // Gradient color based on speed
  const getThumbColor = () => {
    if (displaySpeed === 0) return "#374151";
    if (displaySpeed <= 50) return "#00ffaa";
    return "#00d9ff";
  };

  return (
    <div className="w-[280px] sm:w-[300px] select-none">
      {/* Phone Frame */}
      <div className="bg-[#111827] rounded-[36px] p-2.5 border border-[#1f2937] shadow-[0_0_80px_rgba(0,255,170,0.08)]">
        <div className="bg-[#000000] rounded-[28px] overflow-hidden" style={{ aspectRatio: "9/19.2" }}>
          {/* Status Bar */}
          <div className="flex items-center justify-between px-5 pt-3 pb-1">
            <span className="text-[#f9fafb]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10 }}>9:01</span>
            <div className="w-20 h-5 bg-[#1a1a1a] rounded-full" />
            <div className="flex items-center gap-1">
              <div className="flex gap-[1px]">
                {[1,2,3,4].map(i => <div key={i} className="w-[2.5px] rounded-sm bg-[#f9fafb]" style={{ height: 4 + i * 2 }} />)}
              </div>
              <span className="text-[#f9fafb]" style={{ fontSize: 9 }}>32</span>
            </div>
          </div>

          {/* Nav Bar */}
          <div className="flex items-center justify-between px-4 py-2">
            <div className="w-8 h-8 rounded-lg border border-[#00ffaa]/30 flex items-center justify-center">
              <div className="flex flex-col gap-[2px]">
                {[1,2,3].map(i => <div key={i} className="w-3.5 h-[1.5px] bg-[#00ffaa]" />)}
              </div>
            </div>
            <span className="text-[#f9fafb]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 11 }}>Offline Library</span>
            <div className="w-8 h-8 rounded-full border-2 border-[#ef4444]/60 bg-[#ef4444]/10 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full border-2 border-[#ef4444]" />
            </div>
          </div>

          {/* Locomotive Header */}
          <div className="bg-[#111827]/80 mx-3 rounded-xl py-2.5 px-3 text-center mb-2">
            <div className="text-[#f9fafb]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 14 }}>
              Santa Fe 5038
            </div>
            <div className="flex items-center justify-center gap-2 mt-0.5">
              <span className="w-2 h-2 bg-[#00ffaa] rounded-full" />
              <span className="text-[#9ca3af]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 9 }}>
                {direction} &bull; {displaySpeed}%
              </span>
            </div>
          </div>

          {/* Main Content: Throttle + Functions */}
          <div className="px-3 flex gap-2" style={{ height: 260 }}>
            {/* Throttle Track */}
            <div className="flex flex-col items-center pt-1 w-10 shrink-0">
              <div
                ref={trackRef}
                className="relative w-8 flex-1 bg-[#1a2332] rounded-full cursor-pointer touch-none"
                style={{ border: '1px solid #1f2937' }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
              >
                {/* Fill */}
                <div
                  className="absolute bottom-1 left-1 right-1 rounded-full transition-[height] duration-75"
                  style={{
                    height: `${Math.max(0, displaySpeed)}%`,
                    background: displaySpeed > 50
                      ? 'linear-gradient(to top, #00ffaa, #00d9ff, #a78bfa)'
                      : 'linear-gradient(to top, #00ffaa, #00d9ff)',
                    opacity: displaySpeed > 0 ? 0.85 : 0,
                    boxShadow: displaySpeed > 0 ? `0 0 12px ${displaySpeed > 50 ? '#a78bfa' : '#00ffaa'}40` : 'none',
                  }}
                />
                {/* Thumb */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-[bottom] duration-75 z-10"
                  style={{
                    bottom: `calc(${displaySpeed}% - 18px)`,
                    backgroundColor: getThumbColor(),
                    boxShadow: displaySpeed > 0 ? `0 0 16px ${getThumbColor()}60` : 'none',
                    border: `2px solid ${displaySpeed === 0 ? '#4b5563' : displaySpeed <= 50 ? '#00cc88' : '#0099cc'}`,
                  }}
                >
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: 10,
                    color: displaySpeed === 0 ? '#6b7280' : '#0a0f1a',
                  }}>
                    {displaySpeed}
                  </span>
                </div>
              </div>
            </div>

            {/* Function Buttons Grid */}
            <div className="flex-1 overflow-hidden">
              {/* Top row: Headlight, Bell, Horn */}
              <div className="grid grid-cols-3 gap-1.5 mb-1.5">
                <button
                  onClick={() => setHeadlight(!headlight)}
                  className="flex flex-col items-center justify-center py-2 rounded-lg transition-all"
                  style={{
                    backgroundColor: headlight ? '#00ffaa20' : '#1a2332',
                    border: `1px solid ${headlight ? '#00ffaa50' : '#1f2937'}`,
                  }}
                >
                  <Sun size={12} style={{ color: headlight ? '#00ffaa' : '#6b7280' }} />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 7, color: headlight ? '#00ffaa' : '#6b7280', marginTop: 2 }}>
                    HEADLIGHT
                  </span>
                </button>
                <button
                  onClick={() => setBell(!bell)}
                  className="flex flex-col items-center justify-center py-2 rounded-lg transition-all"
                  style={{
                    backgroundColor: bell ? '#5b8aff20' : '#1a2332',
                    border: `1px solid ${bell ? '#5b8aff50' : '#1f2937'}`,
                  }}
                >
                  <Bell size={12} style={{ color: bell ? '#5b8aff' : '#6b7280' }} />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 7, color: bell ? '#5b8aff' : '#6b7280', marginTop: 2 }}>
                    BELL
                  </span>
                </button>
                <button
                  onClick={() => setHorn(!horn)}
                  className="flex flex-col items-center justify-center py-2 rounded-lg transition-all"
                  style={{
                    backgroundColor: horn ? '#00ffaa20' : '#1a2332',
                    border: `1px solid ${horn ? '#00ffaa50' : '#1f2937'}`,
                  }}
                >
                  <Volume2 size={12} style={{ color: horn ? '#00ffaa' : '#6b7280' }} />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 7, color: horn ? '#00ffaa' : '#6b7280', marginTop: 2 }}>
                    HORN
                  </span>
                </button>
              </div>

              {/* Function Grid */}
              <div className="grid grid-cols-3 gap-1.5">
                {functionButtons.map((fn) => {
                  const isActive = activeFuncs.has(fn.id);
                  return (
                    <button
                      key={fn.id}
                      onClick={() => toggleFunc(fn.id)}
                      className="flex flex-col items-center justify-center py-1.5 rounded-lg transition-all"
                      style={{
                        backgroundColor: isActive ? '#00ffaa15' : '#1a2332',
                        border: `1px solid ${isActive ? '#00ffaa40' : '#1f293780'}`,
                      }}
                    >
                      <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 9, color: isActive ? '#00ffaa' : '#9ca3af' }}>
                        {fn.label}
                      </span>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 6, color: '#4b5563', marginTop: 1 }}>
                        {fn.sub}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Controls: REV / STOP / FWD */}
          <div className="px-3 pt-2 pb-1 flex items-center justify-center gap-3">
            <button
              onClick={() => setDirection("REV")}
              className="flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl transition-all"
              style={{
                backgroundColor: direction === "REV" ? '#1f2937' : '#111827',
                border: `1.5px solid ${direction === "REV" ? '#9ca3af' : '#1f2937'}`,
              }}
            >
              <ArrowDown size={14} style={{ color: direction === "REV" ? '#f9fafb' : '#6b7280' }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 8, color: direction === "REV" ? '#f9fafb' : '#6b7280' }}>
                REV
              </span>
            </button>

            <button
              onClick={handleStop}
              className="flex items-center justify-center w-10 h-10 transition-all"
            >
              <Square size={16} fill="#f59e0b" className="text-[#f59e0b]" style={{ borderRadius: 2 }} />
            </button>

            <button
              onClick={() => setDirection("FWD")}
              className="flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl transition-all"
              style={{
                backgroundColor: direction === "FWD" ? '#00ffaa15' : '#111827',
                border: `1.5px solid ${direction === "FWD" ? '#00ffaa' : '#1f2937'}`,
              }}
            >
              <ArrowUp size={14} style={{ color: direction === "FWD" ? '#00ffaa' : '#6b7280' }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 8, color: direction === "FWD" ? '#00ffaa' : '#6b7280' }}>
                FWD
              </span>
            </button>
          </div>

          {/* Tab Bar */}
          <div className="mx-2 mt-1 mb-2 flex items-center justify-around bg-[#111827]/80 rounded-2xl py-2 border border-[#1f2937]/60">
            {[
              { icon: Train, label: "Library", active: false },
              { icon: Gauge, label: "Throttle", active: true },
              { icon: Settings, label: "Settings", active: false },
            ].map((tab) => (
              <div key={tab.label} className="flex flex-col items-center gap-0.5">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: tab.active ? '#00ffaa20' : 'transparent',
                    border: tab.active ? '1.5px solid #00ffaa50' : '1.5px solid transparent',
                  }}
                >
                  <tab.icon size={13} style={{ color: tab.active ? '#00ffaa' : '#6b7280' }} />
                </div>
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 7,
                  fontWeight: tab.active ? 600 : 400,
                  color: tab.active ? '#00ffaa' : '#6b7280',
                }}>
                  {tab.label}
                </span>
              </div>
            ))}
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#ef4444]/15 border-[1.5px] border-[#ef4444]/50">
                <AlertCircle size={13} style={{ color: '#ef4444' }} />
              </div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 7, color: '#ef4444' }}>E-Stop</span>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="flex justify-center pb-2">
            <div className="w-24 h-1 bg-[#374151] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
