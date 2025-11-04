// 1 - Seleção de Estilo de Filme
function selecionarFilme() {
    let opcao = prompt(
      "Escolha seu estilo de filme favorito:\n" +
      "1 - Ação\n" +
      "2 - Comédia\n" +
      "3 - Drama\n" +
      "4 - Terror\n" +
      "5 - Ficção Científica\n" +
      "6 - Romance"
    );
  
    let estilo;
  
    switch (opcao) {
      case "1":
        estilo = "Ação";
        break;
      case "2":
        estilo = "Comédia";
        break;
      case "3":
        estilo = "Drama";
        break;
      case "4":
        estilo = "Terror";
        break;
      case "5":
        estilo = "Ficção Científica";
        break;
      case "6":
        estilo = "Romance";
        break;
      default:
        estilo = null;
    }
  
    if (estilo) {
      document.getElementById("resultadoFilme").textContent =
        "🎬 Seu estilo de filme favorito é: " + estilo;
    } else {
      document.getElementById("resultadoFilme").textContent =
        "⚠️ Opção inválida. Por favor, tente novamente.";
    }
  }
  
  //  2 - Seleção de Gênero Musical 
  function selecionarMusica() {
    let opcao = prompt(
      "Escolha seu gênero musical preferido:\n" +
      "1 - Rock\n" +
      "2 - Pop\n" +
      "3 - Hip Hop\n" +
      "4 - Eletrônica\n" +
      "5 - Jazz\n" +
      "6 - Clássica"
    );
  
    let genero;
  
    switch (opcao) {
      case "1":
        genero = "Rock";
        break;
      case "2":
        genero = "Pop";
        break;
      case "3":
        genero = "Hip Hop";
        break;
      case "4":
        genero = "Eletrônica";
        break;
      case "5":
        genero = "Jazz";
        break;
      case "6":
        genero = "Clássica";
        break;
      default:
        genero = null;
    }
  
    if (genero) {
      document.getElementById("resultadoMusica").textContent =
        "🎵 Seu gênero musical preferido é: " + genero;
    } else {
      document.getElementById("resultadoMusica").textContent =
        "⚠️ Opção inválida. Por favor, tente novamente.";
    }
  }
  
  // 3 - Seleção de Tema Personalizado 
  function selecionarTema() {
    let opcao = prompt(
      "Escolha um tema para explorar:\n" +
      "1 - Tecnologia\n" +
      "2 - Esportes\n" +
      "3 - Arte\n" +
      "4 - Meio Ambiente\n" +
      "5 - Educação\n" +
      "6 - Saúde"
    );
  
    let mensagem;
  
    switch (opcao) {
      case "1":
        mensagem = "💻 Você escolheu Tecnologia! Explore o futuro digital e inove!";
        break;
      case "2":
        mensagem = "⚽ Você escolheu Esportes! Continue praticando e buscando superação!";
        break;
      case "3":
        mensagem = "🎨 Você escolheu Arte! Solte sua criatividade e expresse-se!";
        break;
      case "4":
        mensagem = "🌱 Você escolheu Meio Ambiente! Cuide do planeta e faça a diferença!";
        break;
      case "5":
        mensagem = "📚 Você escolheu Educação! O conhecimento transforma vidas!";
        break;
      case "6":
        mensagem = "💉 Você escolheu Saúde! Viva com equilíbrio e bem-estar!";
        break;
      default:
        mensagem = "⚠️ Opção inválida. Por favor, tente novamente.";
    }
  
    document.getElementById("resultadoTema").textContent = mensagem;
  }
  