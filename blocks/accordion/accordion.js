export default function decorate(block) {
  [...block.children].forEach((row) => {
    const details = document.createElement('details');
    details.classList.add('accordion-item');
    const summary = document.createElement('summary');
    summary.classList.add('accordion-header');
    const question = row.children[0];
    const answer = row.children[1];
    if (question) summary.append(...question.childNodes);
    details.append(summary);
    if (answer) {
      answer.classList.add('accordion-content');
      details.append(answer);
    }
    row.replaceWith(details);
  });
}