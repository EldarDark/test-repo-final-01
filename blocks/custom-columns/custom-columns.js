export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);
  [...block.children].forEach((row) => {
    row.classList.add('columns-row');
    [...row.children].forEach((col) => {
      col.classList.add('columns-col');
    });
  });
}