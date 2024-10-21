
  //Finally, include your custom script -->

          var containerE1 = document.querySelector('.container1');
          var mixer = mixitup(containerE1);
    
    
    
    function filterCards(color) {
        var cards = document.querySelectorAll('.mix');
        cards.forEach(function (card) {
            if (color === 'all') {
                card.style.display = 'block';
            } else if (card.classList.contains(color)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
