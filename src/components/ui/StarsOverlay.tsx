/**
 * Warstwa z gwiazdkami z makiety Figma ("image" 1920×1910 nad tłem strony).
 * Jest statyczna i nie przechwytuje kliknięć.
 */
export const StarsOverlay = () => (
  <img
    src="/hero/stars.webp"
    alt=""
    aria-hidden="true"
    draggable={false}
    className="pointer-events-none absolute left-0 top-0 z-[5] w-full h-[max(99.5vw,1200px)] select-none object-fill"
  />
);
