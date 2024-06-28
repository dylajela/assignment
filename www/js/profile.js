document.addEventListener('DOMContentLoaded', function() {
    const userName = localStorage.getItem('user-name') || 'User';
    document.getElementById('name').value = userName;
    document.getElementById('user-name').textContent = userName;

    const taskCheckboxes = document.querySelectorAll('.task-checkbox');
    taskCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateProgressBar);
    });

    updateProgressBar(); // Initial call to update progress bar based on checked checkboxes

    function updateProgressBar() {
        const totalTasks = taskCheckboxes.length;
        const completedTasks = Array.from(taskCheckboxes).filter(cb => cb.checked).length;
        const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
        document.getElementById('progress-bar').style.width = `${progress}%`;
    }
});

function saveName() {
    const name = document.getElementById('name').value;
    localStorage.setItem('user-name', name);
    document.getElementById('user-name').textContent = name;
    alert('Name saved!');
}
