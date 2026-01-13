"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SilentHeader = void 0;
var brandTokens_1 = require("../../core/brand/brandTokens");
var SilentHeader = function (_a) {
    var onOpenSettings = _a.onOpenSettings;
    return (<header className="fixed top-0 left-0 right-0 z-40">
      <div className="flex items-center justify-between px-6 py-5 backdrop-blur-xl" style={{
            background: 'linear-gradient(to bottom, rgba(5,5,5,0.9), rgba(5,5,5,0.6))',
            borderBottom: "1px solid ".concat(brandTokens_1.brand.colors.whiteSoft),
        }}>
        <div>
          <div className="text-sm tracking-[0.35em]" style={{ color: brandTokens_1.brand.colors.silver }}>
            R2H.AI–COOKER
          </div>
          <div className="text-[10px] tracking-[0.4em] mt-1" style={{ color: brandTokens_1.brand.colors.silver }}>
            CULINARY INTELLIGENCE
          </div>
        </div>

        <button onClick={onOpenSettings} className="text-xs tracking-widest" style={{ color: brandTokens_1.brand.colors.roseGlow }}>
          SETTINGS
        </button>
      </div>
    </header>);
};
exports.SilentHeader = SilentHeader;
