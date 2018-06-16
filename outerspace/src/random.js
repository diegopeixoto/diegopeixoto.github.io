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
