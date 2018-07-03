(function() {
  const sqrBoxElement = document.getElementById('box');

  // defined the box movement in px;
  const boxMovementLimit = 25;

  const boxPositions = [
    getComputedStyle(sqrBoxElement).getPropertyValue('top').match(/\d+/)[0],
    getComputedStyle(sqrBoxElement).getPropertyValue('left').match(/\d+/)[0]
  ];

  document.getElementById('top').addEventListener('click', () => {
    updateBoxStyle('top', calculateNewPosition(0));
  });

  document.getElementById('bottom').addEventListener('click', () => {
    updateBoxStyle('top', calculateNewPosition(0, 'add'));
  });

  document.getElementById('right').addEventListener('click', () => {
    updateBoxStyle('left', calculateNewPosition(1, 'add'));
  });

  document.getElementById('left').addEventListener('click', () => {
    updateBoxStyle('left', calculateNewPosition(1));
  });

  function calculateNewPosition(positionIndex, operator = 'sub') {
    const currentPositionValue = boxPositions[positionIndex];
    let updatedPositionValue = 0;

    if (operator === 'add') {
      updatedPositionValue = parseInt(currentPositionValue, 10) + boxMovementLimit;
    } else {
      updatedPositionValue = parseInt(currentPositionValue, 10) - boxMovementLimit;
    }

    // Min movement allowed for left and top
    if (updatedPositionValue < 0) {
      updatedPositionValue = 0;
    }

    // Max movement compared to box layout of height = 500px, and button height(top, button)/width(right, left) = 50 + 50 = 100.
    if (updatedPositionValue > 300) {
      updatedPositionValue = 300;
    }

    boxPositions[positionIndex] = updatedPositionValue;

    return updatedPositionValue;
  }

  function updateBoxStyle(position, value) {
    if (position === 'top') {
      sqrBoxElement.style.top = `${value}px`;
    }
    if (position === 'left') {
      sqrBoxElement.style.left = `${value}px`;
    }
  }
})();
