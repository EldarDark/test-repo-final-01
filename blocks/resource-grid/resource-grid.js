export default function decorate(block) {
  const title = block.firstElementChild;
  if (title) title.classList.add('resource-grid-title');

  const list = block.children[1];
  if (list) {
    list.classList.add('resource-grid-items');
    [...list.querySelectorAll('a')].forEach((link) => {
      if (link.href.endsWith('.pdf')) {
        link.classList.add('pdf-link');
        link.setAttribute('target', '_blank');
      } else if (!link.href.includes(window.location.hostname)) {
        link.classList.add('external-link');
      }
    });
  }
}