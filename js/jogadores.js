
    $(document).ready(function() {
      $.ajax({
        url: "https://www.balldontlie.io/api/v1/players",
        method: "GET",
        data: {
          per_page: 6, // Número de jogadores a serem exibidos
          page: 0, // Página dos resultados
          //search: "LeBron", // Pesquisa por jogadores específicos
          
          
        },
        success: function(data) {
          var players = data.data;
          var tableBody = $("#player-table-body");
          var jogadores = $("#alguns-jogadores");
          for (var i = 0; i < players.length; i++) {
            var playerId = players[i].id;
            var playerName = players[i].first_name + " " + players[i].last_name;
            var playerTeam = players[i].team.full_name;
            var playerPosition = players[i].position;
            var playerHeight = players[i].height_feet + "." + players[i].height_inches;
            var playerWeight = players[i].weight_pounds;
            
            playerWeight = playerWeight / 2.205;
            playerHeight = playerHeight / 3.281;
            var row = "<tr><td>" + playerId + "</td><td>" + playerName + "</td><td>" + playerTeam + "</td></tr>";
            var list = '<div class="col-lg-4 col-md-6  align-items-stretch" data-aos="zoom-in" data-aos-delay="100"> <div class="icon-box iconbox-blue" style="background-color: orange; border-radius: 5px;"> <h4><a style="color: white;">' + playerName + '</a></h4> <h6 style="color: white;">Time: ' + playerTeam + '</h6> <h6 style="color: white;">Posição: ' + playerPosition + '</h6>' + '</p> </div> </div>';
            tableBody.append(row);
            jogadores.append(list);
          }
        },
        error: function() {
          alert("Erro ao obter informações da API.");
        }
      });
    });


