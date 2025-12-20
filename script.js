// =========================================
// DADOS DOS PRODUTOS - COM IMAGENS
// =========================================
const produtos = [
    // Smash Burgers Artesanal (1-7)
    { id: 1, nome: "Smash Simples", descricao: "Pão, carne de 90g, cheddar cremoso e maionese.", preco: 21.00, imagem: "smash-simples.jpeg", categoria: "smash" },
    { id: 2, nome: "Smash Cheddar", descricao: "Pão, carne de 90g, bacon, cheddar cremoso, alface, tomate e maionese.", preco: 28.00, imagem: "smash-cheddar.jpeg", categoria: "smash" },
    { id: 3, nome: "Smash Catupiry", descricao: "Pão, carne de 90g, bacon, catupiry cremoso, alface, tomate e maionese.", preco: 28.00, imagem: "smash-catupiry.jpeg", categoria: "smash" },
    { id: 4, nome: "Smash Salada", descricao: "Pão, carne de 90g, cheddar cremoso, calabresa, maionese, alface e tomate.", preco: 23.00, imagem: "smash-salada.jpeg", categoria: "smash" },
    { id: 5, nome: "Smash Duplo", descricao: "Pão, duas carne de 90g, cheddar cremoso, bacon e maionese.", preco: 35.00, imagem: "smash-duplo.jpeg", categoria: "smash" },
    { id: 6, nome: "Smash Triplo", descricao: "Pão, três carnes de 90g, bacon, cheddar cremoso e maionese.", preco: 40.00, imagem: "smash-triplo.jpeg", categoria: "smash" },
    { id: 7, nome: "Smash Duplo Catupiry", descricao: "Pão, duas carne de 90g, catupiry cremoso, bacon e maionese.", preco: 35.00, imagem: "smash-duplo-catupiry.jpeg", categoria: "smash" },

    // GB Artesanal (8-12)
    { id: 8, nome: "GB Kids", descricao: "Pão, carne de 150g, cheddar cremoso e maionese. Acompanha batata frita P", preco: 28.00, imagem: "kids.jpeg", categoria: "gb" },
    { id: 9, nome: "GB Salada", descricao: "Pão, carne de 150g, calabresa, cheddar cremoso, maionese, alface, tomate. Acompanha batata frita P", preco: 32.00, imagem: "gb-salada.jpeg", categoria: "gb" },
    { id: 10, nome: "GB Bacon", descricao: "Pão, carne de 150g, bacon, ovo, cheddar e maionese. Acompanha batata frita P", preco: 34.00, imagem: "gb-bacon.jpeg", categoria: "gb" },
    { id: 11, nome: "GB Catupiry", descricao: "Pão, carne de 150g, bacon, Catupiry, alface, tomate e maionese. Acompanha batata frita P", preco: 33.00, imagem: "gb-catupiry.jpeg", categoria: "gb" },
    { id: 12, nome: "GB Duplo", descricao: "Pão, duas carne de 150g, cheddar cremoso e maionese. Acompanha batata frita P", preco: 39.00, imagem: "gb-duplo.jpeg", categoria: "gb" },

    // Hambúrguer Tradicional (13-16)
    { id: 13, nome: "X-Egg", descricao: "Pão, hambúrguer de boi 90g, presunto, mussarela, ovo, barbecue, maionese e ketchup.", preco: 18.00, imagem: "x-egg.jpeg", categoria: "tradicional" },
    { id: 14, nome: "X-Salada", descricao: "Pão, hambúrguer de boi 90g, presunto, mussarela, ovo, calabresa, barbecue, maionese, ketchup, alface e tomate.", preco: 23.00, imagem: "x-salada.jpeg", categoria: "tradicional" },
    { id: 15, nome: "X-Bacon", descricao: "Pão, hamburguer de boi 90g, presunto, mussarela, ovo, bacon, barbecue, maionese e ketchup.", preco: 23.00, imagem: "x-bacon.jpeg", categoria: "tradicional" },
    { id: 16, nome: "X-Tudão", descricao: "Pão, duas hambúrguer de boi 90g, presunto, mussarela, ovo, bacon, calabresa, alface, tomate, barbecue, maionese e ketchup.", preco: 28.00, imagem: "x-tudo.jpeg", categoria: "tradicional" },

    // Combos e Porções (17-23)
    { id: 17, nome: "Combo Casal", descricao: "2 deliciosos Smash cheddar + porção de batata frita, (cheddar, catupiry ou mussarela), bacon picado e calabresa.", preco: 90.00, imagem: "combo-casal.jpeg", categoria: "combos" },
    { id: 18, nome: "Combo Casal com Frango", descricao: "2 deliciosos Smash cheddar + porção de batata frita, (cheddar, catupiry ou mussarela), bacon picado e calabresa e frango empanado.", preco: 110.00, imagem: "combo-casal-frango.jpeg", categoria: "combos" },
    { id: 19, nome: "Combo 1 Artesanal", descricao: "2 smash simples + porção de batata frita, (cheddar, catupiry ou mussarela), bacon picado e calabresa.", preco: 77.00, imagem: "combo-1.jpeg", categoria: "combos" },
    { id: 20, nome: "Combo 2 Artesanal", descricao: "2 smash simples + porção de batata frita, (cheddar, catupiry ou mussarela), bacon picado e calabresa e frango empanado.", preco: 97.00, imagem: "combo-2.jpeg", categoria: "combos" },
    { id: 21, nome: "Combo 3 Artesanal", descricao: "4 smash simples + porção de batata frita, (cheddar, catupiry ou mussarela), bacon picado e calabresa e frango empanado.", preco: 139.00, imagem: "combo-3.jpeg", categoria: "combos" },
    { id: 22, nome: "Porção de Batata", descricao: "Batata frita, (cheddar, catupiry ou mussarela), bacon picado e calabresa.", preco: 40.00, imagem: "monte-sua-batata.jpeg", categoria: "combos" },
    { id: 23, nome: "Porção de Batata com Frango", descricao: "Batata frita, (cheddar, catupiry ou mussarela), bacon e calabresa + frango empanado.", preco: 60.00, imagem: "porcao-batata-frango.jpeg", categoria: "combos" },

    // Bebidas (24-29) - COM GUARANÁ 2L
    { id: 24, nome: "Mate Couro 1L", descricao: "Sabor guaraná 1 litro.", preco: 7.00, imagem: "mate-couro.jpeg", categoria: "bebidas" },
    { id: 25, nome: "Guaraná Antártica 2L", descricao: "Guaraná Antártica 2 litros.", preco: 12.00, imagem: "guarana-2l.jpeg", categoria: "bebidas" }, // ← GUARANÁ 2L ADICIONADO
    { id: 26, nome: "Coca-Cola 2L", descricao: "Coca-Cola 2 litros.", preco: 15.00, imagem: "coca-cola-2l.jpeg", categoria: "bebidas" },
    { id: 27, nome: "Coca-Cola Lata", descricao: "Coca-Cola lata 350ml.", preco: 5.00, imagem: "coca-lata.jpeg", categoria: "bebidas" },
    { id: 28, nome: "Guaraná Antártica Lata", descricao: "Guaraná Antártica lata 350ml.", preco: 5.00, imagem: "guarana-lata.jpeg", categoria: "bebidas" },
    { id: 29, nome: "Água Mineral", descricao: "Água mineral sem gás.", preco: 3.00, imagem: "agua.jpeg", categoria: "bebidas" }
];

// =========================================
// FILTRO: Produtos que funcionam
// =========================================
const produtosComImagemValida = [
    1, 2, 3, 4, 5, 6, 7,     // Smash Burgers (todos)
    8, 9, 10, 11, 12,        // GB Artesanal (todos)
    13, 14, 15, 16,          // Tradicional (todos)
    17, 18, 19, 20, 21, 22, 23, // Combos
    24, 25, 26, 27, 28, 29   // Bebidas (COM 25 - GUARANÁ 2L)
];

// Array filtrado para exibição
const produtosParaExibir = produtos.filter(p => produtosComImagemValida.includes(p.id));

// =========================================
// VARIÁVEIS GLOBAIS
// =========================================
let carrinho = [];
let quantidadeAtual = 1;
let queijoBatata = "";
let observacao = "";
let formaPagamento = "pix";

// =========================================
// INICIALIZAÇÃO
// =========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ GOOD BURGUER - Site carregado!");
    console.log(`📊 Total de produtos: ${produtosParaExibir.length}`);
    
    carregarCardapio();
    atualizarContadorCarrinho();
    
    // Menu mobile
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const menu = document.getElementById('main-menu');
    
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
            document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : 'auto';
        });
        
        if (menuClose) {
            menuClose.addEventListener('click', function() {
                menu.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        }
        
        // Fechar menu ao clicar em link
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                menu.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }
    
    // Adicionar event listener para o carrinho
    const btnPedido = document.querySelector('.btn-pedido');
    if (btnPedido) {
        btnPedido.addEventListener('click', abrirCarrinho);
    }
    
    // Fechar modais com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            fecharModal('modal-produto');
            fecharModal('modal-carrinho');
        }
    });
});

// =========================================
// FUNÇÕES DO CARDÁPIO
// =========================================
function carregarCardapio() {
    const grid = document.getElementById('grid-cardapio');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    produtosParaExibir.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'card-hamburguer';
        card.setAttribute('data-categoria', produto.categoria);
        card.setAttribute('data-id', produto.id);
        
        // Fallback para imagem
        const imgFallback = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMkQyRDJEIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmaWxsPSIjRkZGIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7imYLvuI/wn5G9PC90ZXh0Pgo8L3N2Zz4K';
        
        card.innerHTML = `
            <div class="card-imagem-container">
                <img src="${produto.imagem}" alt="${produto.nome}" class="card-imagem" 
                     onerror="this.onerror=null; this.src='${imgFallback}'; console.log('Imagem não carregou: ${produto.imagem}')">
            </div>
            <div class="card-info">
                <span class="card-categoria">${getCategoriaNome(produto.categoria)}</span>
                <h3 class="card-nome">${produto.nome}</h3>
                <p class="card-descricao">${produto.descricao}</p>
                <div class="card-preco">R$ ${produto.preco.toFixed(2)}</div>
                <button class="btn-pedir" onclick="abrirModal(${produto.id})">
                    <i class="fas fa-cart-plus"></i> Fazer Pedido
                </button>
            </div>
        `;
        
        grid.appendChild(card);
    });
    
    console.log("✅ Cardápio carregado!");
}

function getCategoriaNome(categoria) {
    const nomes = {
        'smash': 'Smash Burger',
        'gb': 'GB Artesanal',
        'tradicional': 'Tradicional',
        'combos': 'Combo',
        'bebidas': 'Bebida'
    };
    return nomes[categoria] || categoria;
}

function filtrarCategoria(categoria) {
    const cards = document.querySelectorAll('.card-hamburguer');
    const botoes = document.querySelectorAll('.filtro-btn');
    
    // Atualizar botão ativo
    botoes.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filtrar cards
    cards.forEach(card => {
        if (categoria === 'todos' || card.getAttribute('data-categoria') === categoria) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// =========================================
// FUNÇÕES DO MODAL
// =========================================
function abrirModal(idProduto) {
    const produto = produtos.find(p => p.id === idProduto);
    if (!produto) {
        mostrarNotificacao('❌ Produto não encontrado!');
        return;
    }

    // Atualizar informações do modal
    document.getElementById('modal-nome').textContent = produto.nome;
    document.getElementById('modal-descricao').textContent = produto.descricao;
    document.getElementById('modal-preco').textContent = `R$ ${produto.preco.toFixed(2)}`;
    
    // Configurar imagem
    const imgElement = document.getElementById('modal-imagem');
    const modalFallback = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMkQyRDJEIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmaWxsPSIjRkZGIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNDgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7imYLvuI/wn5G9PC90ZXh0Pgo8L3N2Zz4K';
    
    imgElement.src = produto.imagem;
    imgElement.alt = produto.nome;
    imgElement.onerror = function() {
        this.src = modalFallback;
        console.log('Modal: Imagem não carregou:', produto.imagem);
    };
    
    // CONTROLE DE SELEÇÃO DE QUEIJO
    const selecaoQueijo = document.getElementById('selecao-queijo-batata');
    const produtosComBatata = [8, 9, 10, 11, 12, 17, 18, 19, 20, 21, 22, 23];
    
    if (produtosComBatata.includes(produto.id)) {
        selecaoQueijo.style.display = 'block';
        resetarSelecaoQueijo();
    } else {
        selecaoQueijo.style.display = 'none';
        queijoBatata = "";
    }
    
    // Reseta valores
    quantidadeAtual = 1;
    observacao = "";
    
    document.getElementById('quantidade').textContent = quantidadeAtual;
    document.getElementById('observacao-produto').value = '';
    document.getElementById('contador-caracteres').textContent = '0';
    
    // Armazenar ID do produto
    document.getElementById('btn-pedido-modal').setAttribute('data-produto-id', idProduto);
    
    // Mostrar modal
    document.getElementById('modal-produto').style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    console.log(`📱 Modal aberto: ${produto.nome}`);
}

function fecharModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

function fecharModalFora(event, modalId) {
    if (event.target.classList.contains('modal')) {
        fecharModal(modalId);
    }
}

function incrementarQuantidade() {
    quantidadeAtual++;
    document.getElementById('quantidade').textContent = quantidadeAtual;
}

function decrementarQuantidade() {
    if (quantidadeAtual > 1) {
        quantidadeAtual--;
        document.getElementById('quantidade').textContent = quantidadeAtual;
    }
}

function resetarSelecaoQueijo() {
    document.querySelectorAll('.btn-queijo').forEach(btn => {
        btn.classList.remove('selecionado');
    });
    queijoBatata = "";
}

function selecionarQueijo(elemento, tipo) {
    document.querySelectorAll('.btn-queijo').forEach(btn => {
        btn.classList.remove('selecionado');
    });
    elemento.classList.add('selecionado');
    queijoBatata = tipo;
    console.log(`🧀 Queijo selecionado: ${tipo}`);
}

function atualizarContadorCaracteres() {
    const textarea = document.getElementById('observacao-produto');
    const contador = document.getElementById('contador-caracteres');
    observacao = textarea.value;
    contador.textContent = observacao.length;
    
    if (observacao.length > 200) {
        textarea.value = observacao.substring(0, 200);
        contador.textContent = '200';
        observacao = textarea.value;
        mostrarNotificacao('⚠️ Limite de 200 caracteres atingido!');
    }
}

// =========================================
// FUNÇÕES DO CARRINHO
// =========================================
function adicionarAoCarrinho() {
    const produtoId = parseInt(document.getElementById('btn-pedido-modal').getAttribute('data-produto-id'));
    const produto = produtos.find(p => p.id === produtoId);
    
    if (!produto) {
        console.error("Produto não encontrado");
        mostrarNotificacao('❌ Erro ao adicionar produto!');
        return;
    }

    // Verifica produtos que precisam de seleção de queijo
    const produtosComBatata = [8, 9, 10, 11, 12, 17, 18, 19, 20, 21, 22, 23];
    
    if (produtosComBatata.includes(produtoId) && !queijoBatata) {
        mostrarNotificacao('⚠️ Escolha o tipo de queijo para a batata!');
        return;
    }

    // Cria item do carrinho
    const itemId = `${produtoId}_${queijoBatata}_${Date.now()}`;
    
    // Verifica se item já existe
    let itemExistente = null;
    for (let item of carrinho) {
        if (item.produtoId === produtoId && item.queijoBatata === queijoBatata && item.observacao === observacao) {
            itemExistente = item;
            break;
        }
    }
    
    if (itemExistente) {
        itemExistente.quantidade += quantidadeAtual;
        console.log(`📦 Atualizado: ${itemExistente.nome} (${itemExistente.quantidade}x)`);
    } else {
        carrinho.push({
            id: itemId,
            produtoId: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            quantidade: quantidadeAtual,
            queijoBatata: queijoBatata,
            observacao: observacao,
            imagem: produto.imagem
        });
        console.log(`🛒 Adicionado: ${produto.nome} (${quantidadeAtual}x)`);
    }

    atualizarContadorCarrinho();
    fecharModal('modal-produto');
    
    // Mostrar notificação
    mostrarNotificacao(`✅ ${quantidadeAtual}x ${produto.nome} adicionado ao carrinho!`);
}

function mostrarNotificacao(mensagem) {
    // Remove notificação anterior se existir
    const notificacaoAnterior = document.querySelector('.notificacao-flutuante');
    if (notificacaoAnterior) {
        notificacaoAnterior.remove();
    }

    const notificacao = document.createElement('div');
    notificacao.className = 'notificacao-flutuante';
    
    notificacao.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 1.2rem;">${mensagem.includes('✅') ? '✅' : '⚠️'}</span>
            <span>${mensagem.replace('✅ ', '').replace('⚠️ ', '')}</span>
        </div>
    `;
    
    document.body.appendChild(notificacao);
    
    setTimeout(() => {
        notificacao.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notificacao.parentNode) {
                notificacao.parentNode.removeChild(notificacao);
            }
        }, 300);
    }, 3000);
}

function atualizarContadorCarrinho() {
    const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
    const contador = document.getElementById('contador-carrinho');
    if (contador) {
        contador.textContent = totalItens;
        
        // Adicionar animação
        if (totalItens > 0) {
            contador.style.animation = 'pulse 0.5s';
            setTimeout(() => {
                contador.style.animation = '';
            }, 500);
        }
    }
}

function abrirCarrinho() {
    if (carrinho.length === 0) {
        mostrarNotificacao('🛒 Seu carrinho está vazio! Adicione alguns produtos primeiro.');
        return;
    }

    const itensCarrinho = document.getElementById('itens-carrinho');
    itensCarrinho.innerHTML = '';
    
    let subtotal = 0;

    carrinho.forEach((item, index) => {
        const itemTotal = item.preco * item.quantidade;
        subtotal += itemTotal;

        const itemElement = document.createElement('div');
        itemElement.className = 'item-carrinho';
        
        let infoExtra = '';
        if (item.queijoBatata) {
            infoExtra += `<p style="margin: 5px 0 0 0; color: #ffc107; font-size: 12px;">🧀 Queijo: ${item.queijoBatata}</p>`;
        }
        if (item.observacao) {
            infoExtra += `<p style="margin: 5px 0 0 0; color: #ffc107; font-size: 12px;">📝 ${item.observacao.substring(0, 50)}${item.observacao.length > 50 ? '...' : ''}</p>`;
        }

        itemElement.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px; flex: 1;">
                <div>
                    <h4 style="margin: 0 0 5px 0; color: white; font-size: 16px;">${item.nome}</h4>
                    <p style="margin: 0; color: #ccc; font-size: 14px;">${item.quantidade}x R$ ${item.preco.toFixed(2)}</p>
                    ${infoExtra}
                </div>
            </div>
            <div style="display: flex; align-items: center; gap: 15px;">
                <span style="color: white; font-weight: bold; font-size: 16px;">R$ ${itemTotal.toFixed(2)}</span>
                <button onclick="removerDoCarrinho(${index})" style="background: #dc3545; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 12px; min-height: 36px; min-width: 36px; display: flex; align-items: center; justify-content: center;">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;

        itensCarrinho.appendChild(itemElement);
    });

    // Calcula totais
    const taxaEntrega = 5.00;
    const total = subtotal + taxaEntrega;

    document.getElementById('subtotal').textContent = `R$ ${subtotal.toFixed(2)}`;
    document.getElementById('taxa-entrega').textContent = `R$ ${taxaEntrega.toFixed(2)}`;
    document.getElementById('total-geral').textContent = `R$ ${total.toFixed(2)}`;

    // Resetar formulário
    document.getElementById('nome-cliente').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('endereco').value = '';
    document.getElementById('cidade').value = 'Nova Lima';
    formaPagamento = "pix";
    selecionarFormaPagamento('pix');

    document.getElementById('modal-carrinho').style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    console.log(`🛒 Carrinho aberto com ${carrinho.length} itens`);
}

function removerDoCarrinho(index) {
    if (confirm('Remover este item do carrinho?')) {
        const itemRemovido = carrinho[index];
        carrinho.splice(index, 1);
        atualizarContadorCarrinho();
        
        if (carrinho.length > 0) {
            abrirCarrinho();
        } else {
            fecharModal('modal-carrinho');
            mostrarNotificacao('🛒 Carrinho esvaziado!');
        }
        
        console.log(`🗑️ Removido: ${itemRemovido.nome}`);
    }
}

// =========================================
// FUNÇÕES DE PAGAMENTO
// =========================================
function selecionarFormaPagamento(tipo) {
    formaPagamento = tipo;
    document.querySelectorAll('.opcao-pagamento input').forEach(input => {
        input.checked = input.value === tipo;
    });
    console.log(`💳 Forma de pagamento selecionada: ${tipo}`);
}

function validarDadosEntrega() {
    const nome = document.getElementById('nome-cliente').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const endereco = document.getElementById('endereco').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    
    if (!nome) {
        mostrarNotificacao('⚠️ Por favor, informe seu nome completo!');
        return null;
    }
    
    if (!telefone) {
        mostrarNotificacao('⚠️ Por favor, informe seu telefone!');
        return null;
    }
    
    // Validar telefone
    const telefoneLimpo = telefone.replace(/\D/g, '');
    if (telefoneLimpo.length < 10) {
        mostrarNotificacao('⚠️ Telefone inválido! Informe um número com DDD.');
        return null;
    }
    
    if (!endereco) {
        mostrarNotificacao('⚠️ Por favor, informe seu endereço completo!');
        return null;
    }
    
    if (!cidade) {
        mostrarNotificacao('⚠️ Por favor, informe sua cidade!');
        return null;
    }
    
    return { 
        nome, 
        telefone: telefoneLimpo, 
        endereco, 
        cidade 
    };
}

function calcularTotalCarrinho() {
    const subtotal = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    const taxaEntrega = 5.00;
    return subtotal + taxaEntrega;
}

function finalizarComPix() {
    const dados = validarDadosEntrega();
    if (!dados) return;
    
    const total = calcularTotalCarrinho();
    const numeroPedido = 'GB' + Date.now().toString().slice(-6);
    
    // Montar mensagem para WhatsApp
    let mensagem = `*🍔 NOVO PEDIDO - GOOD BURGER 🍔*\n\n`;
    mensagem += `*📋 Nº do Pedido:* ${numeroPedido}\n`;
    mensagem += `*💰 Valor Total:* R$ ${total.toFixed(2)}\n`;
    mensagem += `*🛵 Taxa de Entrega:* R$ 5,00\n`;
    mensagem += `*💳 Forma de Pagamento:* PIX\n\n`;
    
    mensagem += `*👤 DADOS DO CLIENTE:*\n`;
    mensagem += `• Nome: ${dados.nome}\n`;
    mensagem += `• Telefone: ${dados.telefone}\n`;
    mensagem += `• Endereço: ${dados.endereco}\n`;
    mensagem += `• Cidade: ${dados.cidade}\n\n`;
    
    mensagem += `*🛒 ITENS DO PEDIDO:*\n`;
    carrinho.forEach((item, index) => {
        mensagem += `${index + 1}. ${item.quantidade}x ${item.nome} - R$ ${(item.preco * item.quantidade).toFixed(2)}\n`;
        if (item.queijoBatata) {
            mensagem += `   🧀 Queijo: ${item.queijoBatata}\n`;
        }
        if (item.observacao) {
            mensagem += `   📝 Obs: ${item.observacao}\n`;
        }
        mensagem += `\n`;
    });
    
    mensagem += `*📋 RESUMO DO PEDIDO:*\n`;
    const subtotal = total - 5.00;
    mensagem += `Subtotal: R$ ${subtotal.toFixed(2)}\n`;
    mensagem += `Taxa de Entrega: R$ 5,00\n`;
    mensagem += `*TOTAL: R$ ${total.toFixed(2)}*\n\n`;
    
    mensagem += `*🔑 CHAVE PIX:* (31) 99999-9999\n`;
    mensagem += `⚠️ *ENVIAR COMPROVANTE PARA ESTE MESMO NÚMERO*\n\n`;
    
    mensagem += `🕒 *Horário do Pedido:* ${new Date().toLocaleString('pt-BR')}\n`;
    mensagem += `✅ *Pedido confirmado!*\n`;
    mensagem += `⏱️ *Tempo estimado:* 40-60 minutos`;
    
    // **SUBSTITUA ESTE NÚMERO PELO SEU WHATSAPP REAL**
    const numeroWhatsApp = "5531999999999"; // SUBSTITUA AQUI
    
    const mensagemCodificada = encodeURIComponent(mensagem);
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`, '_blank');
    
    // Limpar carrinho após envio
    setTimeout(() => {
        carrinho = [];
        atualizarContadorCarrinho();
        fecharModal('modal-carrinho');
        
        mostrarNotificacao('🎉 Pedido enviado com sucesso! Obrigado!');
        console.log(`📤 Pedido ${numeroPedido} enviado para WhatsApp`);
    }, 1000);
}

function finalizarPedidoWhatsApp() {
    finalizarComPix();
}

// =========================================
// UTILITÁRIOS
// =========================================
console.log(`
╔══════════════════════════════════════╗
║    GOOD BURGER - SISTEMA ATIVADO     ║
║    Produtos carregados: ${produtosParaExibir.length}           ║
║    Guaraná 2L ID: 25 ✅              ║
╚══════════════════════════════════════╝
`);
