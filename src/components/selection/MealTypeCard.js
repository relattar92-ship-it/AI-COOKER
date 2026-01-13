"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealTypeCard = void 0;
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var ICONS = {
    breakfast: lucide_react_1.Coffee,
    lunch: lucide_react_1.Sun,
    dinner: lucide_react_1.Moon,
};
var MealTypeCard = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, type = _a.type, selected = _a.selected, onSelect = _a.onSelect;
    var Icon = ICONS[type];
    return (<framer_motion_1.motion.button onClick={onSelect} initial={false} animate={{
            scale: selected ? 1.04 : 1,
            boxShadow: selected
                ? '0 0 0 1px rgba(255,255,255,0.35), 0 0 40px rgba(255,182,193,0.25)'
                : '0 0 0 1px rgba(255,255,255,0.08)',
            backgroundColor: selected
                ? 'rgba(255,255,255,0.06)'
                : 'rgba(255,255,255,0.03)',
        }} transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        }} className="
        relative w-full
        px-6 py-6
        rounded-3xl
        backdrop-blur-xl
        border border-white/10
        text-left
        overflow-hidden
      ">
      {/* Icon */}
      <framer_motion_1.motion.div animate={{
            opacity: selected ? 1 : 0.6,
            y: selected ? 0 : 4,
        }} transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        }} className="mb-4">
        <Icon size={22} strokeWidth={1.5} className="text-pink-300"/>
      </framer_motion_1.motion.div>

      {/* Text */}
      <div className="space-y-1">
        <span className="block text-sm uppercase tracking-[0.35em] text-white/80">
          {title}
        </span>
        <span className="block text-[11px] italic text-white/50">
          {subtitle}
        </span>
      </div>

      {/* Ambient glow */}
      {selected && (<framer_motion_1.motion.div layoutId="meal-glow" className="
            absolute inset-0
            bg-gradient-to-br from-pink-300/10 via-transparent to-transparent
            pointer-events-none
          "/>)}
    </framer_motion_1.motion.button>);
};
exports.MealTypeCard = MealTypeCard;
