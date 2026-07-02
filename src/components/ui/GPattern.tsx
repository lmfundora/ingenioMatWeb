/**
 * GPattern — Decorative brand texture component
 *
 * Renders a grid of repeating "g" characters using the brand font (Kanit)
 * and brand colors as a subtle background texture. Pure CSS, zero JS.
 *
 * Props:
 *  cols       — Number of "g" columns  (default 8)
 *  rows       — Number of "g" rows     (default 5)
 *  className  — Extra classes for the wrapper (e.g. size, position)
 *  variant    — "primary" (red) | "cream" | "white" | "dark"  (default "primary")
 *  opacity    — Tailwind opacity class applied to each glyph   (default "opacity-[0.07]")
 *  fontSize   — Tailwind text-size class                       (default "text-6xl")
 */

type GPatternVariant = "primary" | "cream" | "white" | "dark";

interface GPatternProps {
  cols?: number;
  rows?: number;
  className?: string;
  variant?: GPatternVariant;
  opacity?: string;
  fontSize?: string;
}

const variantClass: Record<GPatternVariant, string> = {
  primary: "text-primary",
  cream: "text-[#f4d5b6]",
  white: "text-white",
  dark: "text-foreground",
};

const GPattern = ({
  cols = 8,
  rows = 5,
  className = "",
  variant = "primary",
  opacity = "opacity-[0.07]",
  fontSize = "text-6xl",
}: GPatternProps) => {
  const total = cols * rows;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none overflow-hidden ${className}`}
    >
      <div
        className="grid w-full h-full"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={`font-kanit font-bold leading-none text-center ${fontSize} ${variantClass[variant]} ${opacity}`}
          >
            g
          </span>
        ))}
      </div>
    </div>
  );
};

export default GPattern;
