$(document).ready(function() {
    var wikipediaEndpoint = "https://en.wikipedia.org/api/rest_v1/page/summary/basketball";
    
    $.ajax({
      url: wikipediaEndpoint,
      method: "GET",
      dataType: "json",
      success: function(data) {
        var introduction = data.extract;
        $("#sobre").text(introduction);
      },
      error: function() {
        alert("Erro ao obter informações da API.");
      }
    });
  });