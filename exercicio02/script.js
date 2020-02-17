function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
      window.alert('[ERRO] Verifique os dados e tente novamente')
  } else {
      var fsex = document.getElementsByName('radiosex')
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked) {
          genero = 'Homem' 
          if (idade > 0 && idade < 15) {
              //criança
              img.setAttribute('src', 'fotocriancamas.jpeg')
          } else if (idade < 21) {
              //jovem
              img.setAttribute('src','fotojovemmas.jpeg')
          } else if (idade < 65) {
              //adulto
              img.setAttribute('src', 'fotoadulto.jpeg')
          } else {
              //idoso
              img.setAttribute('src', 'fotoidoso.jpeg')
          }
      } else if (fsex[1].checked) {
          genero = 'Mulher'
          if (idade >=0 && idade < 15) {
            //criança
            img.setAttribute('src', 'fotocriancafem.jpeg')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src','fotojovemfem.jpeg')
        } else if (idade < 65) {
            //adulto
            img.setAttribute('src', 'fotoadulta.jpeg')
        } else {
            //idoso
            img.setAttribute('src', 'fotoidosa.jpeg')
        }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
      res.appendChild(img)
  }
}