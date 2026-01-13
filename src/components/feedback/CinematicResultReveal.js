"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CinematicResultReveal = void 0;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var CinematicImageFrame_1 = require("./CinematicImageFrame");
var motionTokens_1 = require("../../utils/motionTokens");
var CinematicResultReveal = function (_a) {
    var recipe = _a.recipe, language = _a.language;
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (recipe && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [recipe]);
    if (!recipe)
        return null;
    return (<section ref={ref} className="mt-40 flex flex-col items-center text-center gap-20">
      {recipe.imageUrl && (<CinematicImageFrame_1.CinematicImageFrame src={recipe.imageUrl} alt={recipe.title}/>)}

      <framer_motion_1.motion.h2 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{
            duration: motionTokens_1.motionTokens.duration.slow,
            ease: motionTokens_1.motionTokens.easing.luxury,
        }} className="text-5xl serif-luxury silver-glow">
        {recipe.title}
      </framer_motion_1.motion.h2>
    </section>);
};
exports.CinematicResultReveal = CinematicResultReveal;
