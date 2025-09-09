function showPage(pageId) {
  document.querySelectorAll('.content > div').forEach(div => div.classList.add('hidden'));
  document.getElementById(pageId).classList.remove('hidden');
}

function showModal() {
  document.getElementById('loginModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('loginModal').style.display = 'none';
}
