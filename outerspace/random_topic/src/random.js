axios.get('https://code.diegopeixoto.net/outerspace/random_topic/src/topics.json')
  .then(function (response) {
        var topicos = response.data.topicos;
        gerarTopicoAleatorio(topicos);
    
  })
  .catch(function (error) {
    alert (error);
    console.log(error);
  });


  function gerarTopicoAleatorio(topicos) {
      console.log ('Achamos esses tópicos: '+topicos);
      const topico = Math.round(Math.random() * (topicos.length - 1));
      console.log ('Vamos abrir este tópico aqui:'+topicos[topico].link);
      abrirTopico(topicos[topico].link);      
  }



  function abrirTopico(link) {

    window.location.href = link;

    /// OUTERSPACE NÃO SUPORTA REQUEST VIA AJAX
    // $.ajax({
    //   url: link,
    //   method: 'GET',
    //   succes: function (data) {
    //     $('#content').html(data);
    //   }
    // })
  }
