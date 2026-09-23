import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  [...block.children].forEach((row) => {
    const [imgCell, copyCell] = [...row.children];
    if (imgCell) {
      imgCell.className = 'basic-columns-image';
      const img = imgCell.querySelector('img');
      if (img) {
        imgCell.replaceChildren(createOptimizedPicture(img.src, img.alt, false, [{ width: '235' }]));
      }
    }
    if (copyCell) copyCell.className = 'basic-columns-copy';
  });
}
