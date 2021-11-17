const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// <span class="tag">Choice 1</span>

textarea.focus();

textarea.addEventListener('keyup', (event) => {
  createTags(event.target.value);
});

function createTags(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  tagsEl.innerHTML = '';

  tags.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}
