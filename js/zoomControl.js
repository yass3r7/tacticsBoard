const   minZoomLevel        = 200,
        defaultZoomLevel    = 1200,
        maxZoomLevel        = 2000;

let currentZoomLevel = defaultZoomLevel;

function resetZoomLevel() {
    currentZoomLevel = defaultZoomLevel;
    board.style.width = defaultZoomLevel + "px";
    board.style.height = defaultZoomLevel + "px";
}

function zoomIn() {
    if (currentZoomLevel >= maxZoomLevel) {
        return false;
    }

    if (currentZoomLevel < 400) {
        currentZoomLevel += 50;
    } else if (currentZoomLevel < 1400) {
        currentZoomLevel += 100;
    } else {
        currentZoomLevel += 200;
    }

    board.style.width = (currentZoomLevel) + "px";
    board.style.height = (currentZoomLevel) + "px";
}

function zoomOut() {
    if (currentZoomLevel <= minZoomLevel) {
        return false;
    }

    if (currentZoomLevel <= 400) {
        currentZoomLevel -= 50;
    } else if (currentZoomLevel <= 1400) {
        currentZoomLevel -= 100;
    } else {
        currentZoomLevel -= 200;
    }

    board.style.width = (currentZoomLevel) + "px";
    board.style.height = (currentZoomLevel) + "px";
}