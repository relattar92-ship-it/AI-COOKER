import { brand } from '../../core/brand/brandTokens';

export const SilentHeader = ({
  onOpenSettings,
}: {
  onOpenSettings: () => void;
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div
        className="flex items-center justify-between px-6 py-5 backdrop-blur-xl"
        style={{
          background: 'linear-gradient(to bottom, rgba(5,5,5,0.9), rgba(5,5,5,0.6))',
          borderBottom: `1px solid ${brand.colors.whiteSoft}`,
        }}
      >
        <div>
          <div
            className="text-sm tracking-[0.35em]"
            style={{ color: brand.colors.silver }}
          >
            R2H.AI–COOKER
          </div>
          <div
            className="text-[10px] tracking-[0.4em] mt-1"
            style={{ color: brand.colors.silver }}
          >
            CULINARY INTELLIGENCE
          </div>
        </div>

        <button
          onClick={onOpenSettings}
          className="text-xs tracking-widest"
          style={{ color: brand.colors.roseGlow }}
        >
          SETTINGS
        </button>
      </div>
    </header>
  );
};
