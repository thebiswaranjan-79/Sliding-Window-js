const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('mouseover', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

// 2nd Way of Writing this Code 

// const panelContainer = document.querySelector('.panel-container');

// panelContainer.addEventListener('mouseover', (event) => {
//     if (event.target.classList.contains('panel')) {
//         removeActiveClasses();
//         event.target.classList.add('active');
//     }
// });

// function removeActiveClasses() {
//     const activePanel = document.querySelector('.panel.active');
//     if (activePanel) {
//         activePanel.classList.remove('active');
//     }
// }
