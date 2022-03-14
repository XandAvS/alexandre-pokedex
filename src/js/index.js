/*
quando clicar no pokemon na listagem temos que esconder o atual e mostrar o correspondente ao selecionado

pra isso vamos trabalhar com 2 elementos
1- listagem
2- cartão pokemon

precisa criar duas variaveis no js paraa trabalhar com os elementos da tela

vamos precisar trabalhar com evento de clique feito pelo usuario na listagem de pokemon

-remover a classe averto só do cartão que está aberto
-ao clicar em um pokemon da listagem pegamos o id do pokemon para saber qual cartão mostrar 
-remover classe ativa que marca o pokemon selecionado

adicionar a classe ativo no selecionado
*/

// criar duas variaveis  para trabalhar com os elementos na tela

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')



listaSelecaoPokemons.forEach(pokemon => {
    // vamos precisar trabalhar com evento de clique feito pelo usuario na listagem de pokemon

    pokemon.addEventListener('click', () => {
        // -remover a classe averto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        // ao clicar em um pokemon da listagem pegamos o id do pokemon para saber qual cartão mostrar 
       const idPokemonSelecionado = pokemon.attributes.id.value

       const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
       const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
       cartaoPokemonParaAbrir.classList.add('aberto')

    //  -remover classe ativa que marca o pokemon selecionado
        const pokemonAtivoNalistagem = document.querySelector('.ativo')
        pokemonAtivoNalistagem.classList.remove('ativo')
        
    // adicionar a classe ativo no selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})