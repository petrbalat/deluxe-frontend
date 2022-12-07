/**
 * Kontrola zda došlo ke kliku mimo target - pro skrytí např. našeptávače nebo košíku
 * @param target
 * @param onClick
 */
export const onBoundariesClick = (target: any | null, onClick: (within: boolean) => void): { unsubscribe: () => void } | null => {
  if (!target || typeof document === 'undefined') return null;
  const listener = (event: Event) => {
    const withinBoundaries = event.composedPath().includes(target)

    if (withinBoundaries) {
      onClick(true);
    } else {
      onClick(false);
    }
  };

  document.addEventListener('click', listener)
  const unsubscribe = () => document.removeEventListener('click', listener);
  return {unsubscribe};
}
