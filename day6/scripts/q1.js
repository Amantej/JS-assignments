let c = ["red", "blue","gray", "green", "yellow"];
  let currentColorIndex = 0;

  function changeColor() {
    document.bgColor = c[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % c.length;
    setTimeout(changeColor, 5000);
  }