export default function decorate(block) {
  const row = block.firstElementChild;
  if (!row) return;
  const [iconCell, copyCell] = [...row.children];
  if (iconCell) iconCell.className = 'basic-icon-single-icon';
  if (copyCell) copyCell.className = 'basic-icon-single-copy';
}
