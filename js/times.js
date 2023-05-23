$(document).ready(function() {
    $.ajax({
      url: "https://www.balldontlie.io/api/v1/teams",
      method: "GET",
      data: {
        per_page: 6, 
      },
      success: function(data) {
        var teams = data.data;
        var teamsList = $("#teams-list");
        var teamscities = $("#teams-cities");
        var teamsteste = $("#teams-teste");
        for (var i = 0; i < teams.length; i++) {
          var teamName = teams[i].full_name;
          var teamCity = teams[i].city;
          var teamConference = teams[i].conference;
          var teamDivision = teams[i].division;
          var listItem = "<li><strong>" + teamName + "</strong> (" + teamCity + ") - Conference: " + teamConference + ", Division: " + teamDivision + "</li>";
          var listCity = "<li><strong>" + teamCity + "</strong></li>";
          var list = '<div class="col-lg-4 col-md-6  align-items-stretch" data-aos="zoom-in" data-aos-delay="100"> <div class="icon-box iconbox-blue"> <h4><a>' + teamName + '</a></h4> <h6>Cidade: ' + teamCity + '</h6> <h6>Divisão: ' + teamDivision + '</h6> <p>Conference: ' + teamConference + '</p> </div> </div>';

          teamsList.append(listItem);
          teamscities.append(listCity);
          teamsteste.append(list);
        }
      },
      error: function() {
        alert("Erro ao obter informações da API.");
      }
    });
  });