
document.getElementById('logo').addEventListener('click', function() {
  location.href = 'index.html';
});
document.addEventListener('DOMContentLoaded', function() {
  const personalMenu = document.querySelector('.nav-item.personal');
  
  personalMenu.addEventListener('mouseenter', function() {
    this.classList.add('active');
  });
  
  personalMenu.addEventListener('mouseleave', function() {
    this.classList.remove('active');
  });
});

function showSearchInput() {
  document.querySelector('.search-input').style.display = 'block';
  document.addEventListener('click', function(event) {
    if (!event.target.classList.contains('search-input') && !event.target.classList.contains('search-icon')) {
      document.querySelector('.search-input').style.display = 'none';
    }
  });
}

function showSearchInput() {
  document.querySelector('.search-input').style.display = 'block';
  document.querySelector('.main-header').style.height = '120px';
  document.addEventListener('click', function(event) {
    if (!event.target.classList.contains('search-input') && 
      !event.target.classList.contains('search-icon')) {
      document.querySelector('.search-input').style.display = 'none';
      document.querySelector('.main-header').style.height = '60px';
    }
  });
}

