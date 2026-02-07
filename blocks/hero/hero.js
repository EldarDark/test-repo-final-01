import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const row = block.firstElementChild;
  if (!row) return;

  const bgContainer = row.children[0];
  const contentContainer = row.children[1];

  // Background image optimization
  const img = bgContainer.querySelector('img');
  if (img) {
    const optimizedPic = createOptimizedPicture(img.src, img.alt || 'Hero Background', true, [{ width: '2000' }]);
    bgContainer.innerHTML = '';
    bgContainer.append(optimizedPic);
  }

  // Add class for overlay positioning
  contentContainer.classList.add('hero-content');
  
  // Optional: check for alignment class on the block
  if (block.classList.contains('left-align')) {
    contentContainer.classList.add('align-left');
  } else {
    contentContainer.classList.add('align-center');
  }
}