document.addEventListener('DOMContentLoaded', () => {
    const mainElement = document.querySelector('main');
    mainElement.addEventListener('click', () => {
        alert('You clicked the main content area!');
    });
});
