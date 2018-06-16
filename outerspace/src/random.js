axios.get('https://code.diegopeixoto.net/outerspace/src/topics.json')
  .then(function (response) {
    console.log(response.data.topicos.link);
  })
  .catch(function (error) {
    console.log(error);
  });



