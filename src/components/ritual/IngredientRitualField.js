"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientRitualField = void 0;
// src/components/ritual/IngredientRitualField.tsx
var framer_motion_1 = require("framer-motion");
var IngredientRitualField = function (_a) {
    var value = _a.value, onChange = _a.onChange, placeholder = _a.placeholder;
    return (<framer_motion_1.motion.textarea initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} value={value} onChange={function (e) { return onChange(e.target.value); }} placeholder={placeholder} className="
        w-full h-56 mt-32
        bg-transparent
        border border-white/10
        rounded-[2.5rem]
        p-10
        text-center text-xl italic
        placeholder-white/20
        outline-none
        focus:border-white/30
        obsidian-glass
      "/>);
};
exports.IngredientRitualField = IngredientRitualField;
