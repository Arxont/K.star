new Glider(document.querySelector('.glider'), {
    dots: '#dots',
    slidesToShow: 1,
    draggable: false,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });
  document.addEventListener('glider-loaded', hideFFScrollBars);
  document.addEventListener('glider-refresh', hideFFScrollBars);
  function hideFFScrollBars(e){
    var scrollbarHeight = 17; 
    if(/firefox/i.test(navigator.userAgent)){
      if (window.innerWidth > 575){
        e.target.parentNode.style.height = (e.target.offsetHeight - scrollbarHeight) + 'px'
      }
    }
  }


  document.addEventListener('glider-loaded', hideFFScrollBars);
  document.addEventListener('glider-refresh', hideFFScrollBars);
  function hideFFScrollBars(e){
    var scrollbarHeight = 17; 
    if(/firefox/i.test(navigator.userAgent)){
      if (window.innerWidth > 575){
        e.target.parentNode.style.height = (e.target.offsetHeight - scrollbarHeight) + 'px'
      }
    }
  }