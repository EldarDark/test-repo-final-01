export default function decorate(block) {
  // Wrap content for styling
  const wrapper = document.createElement('div');
  wrapper.className = 'safety-content';
  [...block.children].forEach((child) => wrapper.append(child));
  block.textContent = '';
  block.append(wrapper);
}