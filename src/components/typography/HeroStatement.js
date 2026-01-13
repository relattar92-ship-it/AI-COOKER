"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroStatement = void 0;
var framer_motion_1 = require("framer-motion");
var types_1 = require("../../types");
var HeroStatement = function (_a) {
    var mealType = _a.mealType, language = _a.language;
    var content = {
        ar: {
            titles: {
                Breakfast: 'بداية فاخرة',
                Lunch: 'منتصف راقٍ',
                Dinner: 'ختام أنيق',
            },
            subtitles: {
                breakfast: 'حيث يبدأ الإيقاع',
                lunch: 'توازن في القلب',
                dinner: 'طقس المساء',
            },
        },
        en: {
            titles: {
                Breakfast: 'A Refined Beginning',
                Lunch: 'A Balanced Interlude',
                Dinner: 'An Elegant Finale',
            },
            subtitles: {
                breakfast: 'Where rhythm begins',
                lunch: 'Balance at the center',
                dinner: 'An evening ritual',
            },
        },
    };
    var subtitleKey = mealType === types_1.MealType.Breakfast
        ? 'breakfast'
        : mealType === types_1.MealType.Lunch
            ? 'lunch'
            : 'dinner';
    return (<div className="text-center mt-32 mb-20">
      <framer_motion_1.motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="serif-luxury text-6xl italic mb-6">
        {content[language].titles[mealType]}
      </framer_motion_1.motion.h1>

      <framer_motion_1.motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 0.6, duration: 1 }} className="text-sm tracking-widest uppercase">
        {content[language].subtitles[subtitleKey]}
      </framer_motion_1.motion.p>
    </div>);
};
exports.HeroStatement = HeroStatement;
