axios.get('https://code.diegopeixoto.net/outerspace/src/topics.json')
  .then(function (response) {
        var topicos = response.data.topicos;
        gerarTopicoAleatorio(topicos);
    
  })
  .catch(function (error) {
    console.log(error);
  });


  function gerarTopicoAleatorio(topicos) {
      const topico = Math.round(Math.random() * (topicos.length - 1));
    abrirTopico('https://'+topicos[topico].link);      
  }



  function abrirTopico(link) {
    $.ajax({
      url: link,
      method: 'POST',
      succes: function (data) {
        $('#content').html(data);
      }
    })
  }

  // function abrirUrlAjax(link){
    
  //   $.ajax({ 
  //    url: link,
  //     method: 'GET',      
  //   success: function (data) {
  //      setTimeout(function() { 
  //             $('#content').html(data);
         
  //    });  
               
         
  //   }