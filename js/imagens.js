    $(document).ready(function() {
      var unsplashAccessKey = 'VYVoGiWr5n3Lm9l6DLDDz2wb3IOTr04wwOYlOTdZLYs';
      
      $.ajax({
        url: "https://api.unsplash.com/search/photos",
        method: "GET",
        headers: {
          Authorization: "Client-ID " + unsplashAccessKey
        },
        data: {
          query: "basketball game", // Termo de pesquisa para imagens de jogos de basquete
          per_page: 5 // Número de imagens a serem exibidas
        },
        success: function(data) {
          var photos = data.results;
          var portfolio = $("#imagens-basket");
          for (var i = 0; i < photos.length; i++) {
            var imageUrl = photos[i].urls.regular;
            var altDescription = photos[i].alt_description;
            
            var imagens = '<div class="col-lg-4 col-md-6 portfolio-item filter-app"> <div class="portfolio"> <img src="' + imageUrl + '" class="img-fluid" alt=""> </div> </div>';
            portfolio.append(imagens);
          }
        },
        error: function() {
          alert("Erro ao obter imagens da API.");
        }
      });
    });

