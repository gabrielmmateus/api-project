    $(document).ready(function() {
      $.ajax({
        url: "https://www.balldontlie.io/api/v1/games",
        method: "GET",
        data: {
            per_page: 8, 
          },
        success: function(data) {
          var games = data.data;
          var alguns_jogos = $("#alguns-jogos");
          var tableBody = $("#game-table-body");
          for (var i = 0; i < games.length; i++) {
            var gameId = games[i].id;
            var homeTeam = games[i].home_team.full_name;
            var visitorTeam = games[i].visitor_team.full_name;
            var gameDate = new Date(games[i].date).getFullYear(); // Extrai o ano da data
            var gameMonthDay = games[i].date.substring(0, 10); // Extrai o mês e o dia
            var gameStatus = games[i].status;
            
            var row = "<tr><td>" + gameId + "</td><td>" + homeTeam + "</td><td>" + visitorTeam + "</td><td>" + gameDate + "</td><td>" + gameStatus + "</td></tr>";
            var jogos = '<div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100"> <div class="box"> <h3>' + gameDate + '</h3> <h5>' + gameMonthDay + '</h4> <ul> <li>' + homeTeam + '</li> <li>' + visitorTeam + '</li> </ul> <div class="btn-wrap"> <h6>Finalizado</h6> </div> </div> </div>';
            tableBody.append(row);
            alguns_jogos.append(jogos);
          }
        },
        error: function() {
          alert("Erro ao obter informações da API.");
        }
      });
    });

