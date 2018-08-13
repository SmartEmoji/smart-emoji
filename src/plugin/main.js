// Check if focused in on a editable text area
function onFocusIn(event) {
  const target = event.target;
  if (target.isContentEditable || target.matches('input, textarea')) {
    console.log(target);
  }
}

function main() {
  document.addEventListener('focusin', (e) => { onFocusIn(e); });
}

main();