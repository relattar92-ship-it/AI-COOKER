"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObsidianOverlay = void 0;
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var ObsidianOverlay = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, title = _a.title, children = _a.children;
    return (<framer_motion_1.AnimatePresence>
      {isOpen && (<framer_motion_1.motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            }} className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/70
            backdrop-blur-2xl
          ">
          {/* Click outside to close */}
          <div className="absolute inset-0" onClick={onClose}/>

          {/* Glass Panel */}
          <framer_motion_1.motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
            }} className="
              relative z-10
              w-[90%] max-w-md
              rounded-[2.5rem]
              bg-white/[0.05]
              border border-white/10
              backdrop-blur-xl
              px-10 py-12
              text-center
            ">
            {/* Close */}
            <framer_motion_1.motion.button whileTap={{ scale: 0.9 }} onClick={onClose} className="
                absolute top-6 right-6
                w-9 h-9
                rounded-full
                flex items-center justify-center
                bg-white/5
                border border-white/10
              ">
              <lucide_react_1.X size={14} strokeWidth={1.5} className="text-white/70"/>
            </framer_motion_1.motion.button>

            {/* Title */}
            <framer_motion_1.motion.h2 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
            }} className="
                serif-luxury text-3xl italic
                text-white mb-10
              ">
              {title}
            </framer_motion_1.motion.h2>

            {/* Content */}
            <framer_motion_1.motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.9 }} transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
            }} className="space-y-6">
              {children}
            </framer_motion_1.motion.div>
          </framer_motion_1.motion.div>
        </framer_motion_1.motion.div>)}
    </framer_motion_1.AnimatePresence>);
};
exports.ObsidianOverlay = ObsidianOverlay;
