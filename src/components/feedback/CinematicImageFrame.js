"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CinematicImageFrame = void 0;
var framer_motion_1 = require("framer-motion");
var motionTokens_1 = require("../../utils/motionTokens");
var CinematicImageFrame = function (_a) {
    var src = _a.src, alt = _a.alt;
    return (<framer_motion_1.motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{
            duration: motionTokens_1.motionTokens.duration.ultraSlow,
            ease: motionTokens_1.motionTokens.easing.luxury,
        }} className="
        relative
        rounded-[3rem]
        overflow-hidden
        bg-white/5
        border border-white/10
        backdrop-blur-xl
        max-w-4xl mx-auto
      ">
      <img src={src} alt={alt} className="w-full h-full object-cover"/>
    </framer_motion_1.motion.div>);
};
exports.CinematicImageFrame = CinematicImageFrame;
