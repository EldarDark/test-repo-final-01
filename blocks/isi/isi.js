export default function decorate(block) {
  const content = document.createElement('div');
  content.classList.add('isi-content');
  [...block.children].forEach((row) => {
    content.append(...row.children);
  });
  block.textContent = '';
  const header = document.createElement('div');
  header.classList.add('isi-header');
  header.innerHTML = '<h3>Important Safety Information</h3>';
  const toggle = document.createElement('button');
  toggle.classList.add('isi-toggle');
  toggle.textContent = 'Expand/Collapse';
  toggle.onclick = () => block.classList.toggle('expanded');
  header.append(toggle);
  block.append(header, content);
}