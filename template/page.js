function checkOnlyOne(element) {
  
    const checkboxes 
        = document.getElementsByName(element.name);
    
    checkboxes.forEach((cb) => {
      cb.checked = false;
      cb.style.backgroundColor = '#ccc';
    })
    
    element.checked = true;
    element.style.backgroundColor = '#eee'
}

function check_color(self) {
    var bg = document.querySelector(self);
    bg.style.backgroundColor = '#ccc';
}