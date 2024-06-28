document.addEventListener('DOMContentLoaded', function() {
    const userName = localStorage.getItem('user-name') || 'User';
    document.getElementById('user-name').textContent = userName;
});

function openMeditatePage(type) {
    location.href = `${type}.html`;
}
