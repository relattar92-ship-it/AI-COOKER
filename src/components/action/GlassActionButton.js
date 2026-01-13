"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlassActionButton = void 0;
var framer_motion_1 = require("framer-motion");
var motionTokens_1 = require("../../utils/motionTokens");
var GlassActionButton = function (_a) {
    var label = _a.label, _b = _a.loading, loading = _b === void 0 ? false : _b, onPress = _a.onPress;
    return (<framer_motion_1.motion.button onClick={onPress} disabled={loading} whileTap={{ scale: motionTokens_1.motionTokens.scale.press }} className="
        relative w-full h-24
        rounded-[3rem]
        overflow-hidden
        bg-[#070707]
        border border-white/10
      ">
      <framer_motion_1.motion.div animate={{
            opacity: loading
                ? motionTokens_1.motionTokens.glow.focusOpacity
                : motionTokens_1.motionTokens.glow.softOpacity,
        }} transition={{
            duration: motionTokens_1.motionTokens.glow.breath,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: motionTokens_1.motionTokens.easing.soft,
        }} className="
          absolute inset-0
          bg-gradient-to-r
          from-pink-300/30 via-transparent to-pink-300/30
          blur-2xl
        "/>

      <div className="relative z-10 flex items-center justify-center h-full">
        <framer_motion_1.AnimatePresence mode="wait">
          {!loading && (<framer_motion_1.motion.span key="label" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{
                duration: motionTokens_1.motionTokens.duration.normal,
                ease: motionTokens_1.motionTokens.easing.luxury,
            }} className="serif-luxury text-3xl italic text-white">
              {label}
            </framer_motion_1.motion.span>)}

          {loading && (<framer_motion_1.motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} className="text-[10px] tracking-[0.5em] uppercase text-pink-200">
              THE CHEF IS COMPOSING
            </framer_motion_1.motion.span>)}
        </framer_motion_1.AnimatePresence>
      </div>
    </framer_motion_1.motion.button>);
};
exports.GlassActionButton = GlassActionButton;
