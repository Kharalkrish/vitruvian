// Get HTML elements using DOM
const toggleButton = document.getElementById('three-dots');
const moveIcons = document.querySelector('.move-icons');
const leftIcons = document.getElementById('left-icons');
const rightIcons = document.getElementById('right-icons');
const bottomIcons = document.getElementById('bottom-icons');
const mapContainer = document.getElementById('default-map-container');
const sidebar = document.getElementById('sidebar');
const minimizeIcons = document.getElementById("minimize-icons");
const leftSidebarContainer = document.getElementById("left-sidebar-container");
const topListItem = document.getElementById("top-list-item");


// Initialize default classes
sidebar.classList.add('left');
mapContainer.classList.add('default-map-containers');

// Define a map of positions to animation names
const positionToAnimation = {
    left: 'slideInLeft',
    right: 'slideInRight',
    bottom: 'slideInBottom',
    minimize: 'slideInLeft',
};

// Toggle button click event
toggleButton.addEventListener('click', toggleIcons);

// Left icons click event
leftIcons.addEventListener('click', () => setPosition('left'));

// Right icons click event
rightIcons.addEventListener('click', () => setPosition('right'));

bottomIcons.addEventListener('click', () => setPosition('bottom'));

minimizeIcons.addEventListener('click', () => {
    leftSidebarContainer.classList.add("hidden");
    topListItem.classList.add("left-sidebars")
    // sidebar.classList.remove("left","right","bottom");
    sidebar.style.height = "50px";
    sidebar.style.zIndex = 1;
    mapContainer.style.width = "100%";
    topListItem.style.width = "56px";
    setPosition('minimize');
});

const minimizeButton = document.getElementById("minimize-icons");
const minimizedContainer = document.getElementById("minimized-container");

let isMinimized = false;

minimizeIcons.addEventListener("click", () => {
    isMinimized = !isMinimized;

    if (isMinimized) {
        minimizedContainer.classList.add("minimized");
    } else {
        minimizedContainer.classList.remove("minimized");
    }

    if(leftSidebarContainer.classList.contains("minimize")){
    }
    alert(leftSidebarContainer.classList.contains("minimize"))

    leftSidebarContainer.classList.add("hidden");
    sidebar.style.height = "50px";
    sidebar.style.zIndex = 1;
    mapContainer.style.width = "100%";
    setPosition('minimize');
});


// Function to toggle icons visibility
function toggleIcons() {
    moveIcons.classList.toggle('hidden');
}

// Function to set sidebar position
function setPosition(position) {
    const positions = ['left', 'right', 'bottom', 'minimize'];

    sidebar.style.animationName = 'none';
    sidebar.style.transition = 'none';

    const animationName = positionToAnimation[position];
    if (animationName) {
        sidebar.style.animationName = animationName;
    }

    sidebar.style.animationDuration = '0.3s';
    sidebar.style.animationTimingFunction = 'ease-in-out';

    sidebar.classList.remove(...positions);
    mapContainer.classList.remove('sidebar-to-left', 'sidebar-to-right', 'sidebar-to-bottom');

    sidebar.classList.add(position);
    mapContainer.classList.add(`sidebar-to-${position}`);
}
