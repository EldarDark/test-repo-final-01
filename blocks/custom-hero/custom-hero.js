export default function decorate(block) {
  const [imgRow, contentRow] = [...block.children];
  const picture = imgRow?.querySelector('picture');
  const textDiv = document.createElement('div');
  textDiv.classList.add('hero-content');
  if (contentRow) textDiv.append(...contentRow.children);
  block.textContent = '';
  if (picture) block.append(picture);
  block.append(textDiv);
}