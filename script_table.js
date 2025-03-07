document.addEventListener('DOMContentLoaded', function() {
    // Seleciona elementos
    const searchInput = document.querySelector('.barradepesq');
    const tableBody = document.querySelector('#minhatabela tbody');
    let originalRows = [];

    // Carrega dados iniciais 
    function loadInitialData() {
        
        const dummyData = [
            ["RN", "Natal", "Cidade da Esperança", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/RAO/conjunto cidade da esperança.pdf'\">Ficha</button>"],
            ["RN", "Natal", "Promorar Santa Esmeralda", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/RAO/conjunto santa esmeralda.pdf'\">Ficha</button>"],
            ["RN", "Natal", "Promorar Felipe Camarão I, II, III", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/RAO/conjunto felipe camarao.pdf'\">Ficha</button>"],
            ["RN", "Natal", "Lagoa Nova I", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/RAS/lagoa nova.pdf'\">Ficha</button>"],
            ["RN", "Natal", "Lagoa Nova II", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/RAS/lagoa nova 2.pdf'\">Ficha</button>"],
            ["RN", "Natal", "Jiqui", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/RAS/jiqui.pdf'\">Ficha</button>"],
            ["RN", "Natal", "Pirangi", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/RAS/pirangi.pdf'\">Ficha</button>"],
            ["RN", "Natal", "Panatis I", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/RAN/panatis.pdf'\">Ficha</button>"],
            ["RN", "Natal", "Panatis II", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/RAN/panatis promorar.pdf'\">Ficha</button>"],
            ["RN", "Natal", "Nova Natal", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/RAN/nova natal.pdf'\">Ficha</button>"],
            ["RN", "Natal", "Gramoré", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/RAN/gramore.pdf'\">Ficha</button>"],
            ["RN", "Natal", "Eldorado", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/RAN/eldorado.pdf'\">Ficha</button>"],
            ["RN", "Natal", "Santarém", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/RAN/santarem.pdf'\">Ficha</button>"],
            ["RN", "Natal", "Pajuçara", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/RAN/pajucara.pdf'\">Ficha</button>"],
            ["RN", "Natal", "Panorama", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/RAN/panorama.pdf'\">Ficha</button>"],
            ["RN", "Natal", "Potengi", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/RAN/potengi.pdf'\">Ficha</button>"],
            ["RN", "Natal", "Igapó", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/RAN/igapo.pdf'\">Ficha</button>"],
            ["RN", "Natal", "Soledade", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/RAN/soledade.pdf'\">Ficha</button>"],
            ["RN", "Natal", "Santa Catarina", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/RAN/santa catarina.pdf'\">Ficha</button>"],
            ["RN", "Ceará-Mirim", "Luiz Lopes Varela", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/DM/luiz lopes varela.pdf'\">Ficha</button>"],
            ["RN", "Goianinha", "Nossa Senhora dos Prazeres", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/DM/nossa senhora dos prazeres.pdf'\">Ficha</button>"],
            ["RN", "Macaíba", "Auta de Souza, Alfredo Mesquita, Auto de Souza", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/DM/macaiba.pdf'\">Ficha</button>"],
            ["RN", "Parnamirim", "Eduardo Gomes", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/DM/parnamirim.pdf'\">Ficha</button>"],
            ["RN", "São Gonçalo do Amarante", "Amarante", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/DM/sao goncalo do amarante.pdf'\">Ficha</button>"],
            ["RN", "São José de Mipibu", "São José do Mipibu", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/DM/sao jose de mipibu.pdf'\">Ficha</button>"],
            ["RN", "Açu", "Janduís", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/DM/janduis.pdf'\">Ficha</button>"],
            ["RN", "Açu", "Promorar Açu", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/DM/promorar acu.pdf'\">Ficha</button>"],
            ["RN", "Caicó", "Presidente Castelo Branco", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/DM/presidente castelo branco.pdf'\">Ficha</button>"],
            ["RN", "Caicó", "Vila do Príncipe", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/DM/vila do principe.pdf'\">Ficha</button>"],
            ["RN", "Currais Novos", "Santa Maria Goretti", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/DM/santa maria goretti.pdf'\">Ficha</button>"],
            ["RN", "Currais Novos", "Promorar Currais Novos", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/DM/promorar currais novos.pdf'\">Ficha</button>"],
            ["RN", "Currais Novos", "Princesa do Seridó", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/DM/princesa do serido.pdf'\">Ficha</button>"],
            ["RN", "Mossoró", "Monsenhor Walfredo Gurgel", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/DM/walfredo gurgel.pdf'\">Ficha</button>"],
            ["RN", "Mossoró", "Abolição I, II, III, IV", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/DM/abolicao.pdf'\">Ficha</button>"],
            ["RN", "Mossoró", "Liberdade", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/DM/liberdade.pdf'\">Ficha</button>"],
            ["RN", "Mossoró", "Santa Delmira", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/DM/santa delmira.pdf'\">Ficha</button>"],
            ["RN", "Mossoró", "Redenção e Independência", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/DMs/redencao e independencia.pdf'\">Ficha</button>"],
            ["RN", "Pau dos Ferros", "Marechal Dutra e Princesinha do Oeste", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/DM/pau dos ferros.pdf'\">Ficha</button>"],
            ["RN", "Santa Cruz", "Aluízio Bezerra", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/imagem.png\" alt=\"\"></a>", "<a href=\"arquivos/resumo.pdf\"><img src=\"assets/mapa.png\" alt=\"\"></a>", "<button class=\"btn-ficha\" onclick=\"window.location.href='arquivos/DM/santa cruz.pdf'\">Ficha</button>"]

        ]     
        // Popula tabela
        tableBody.innerHTML = dummyData.map(row => `
            <tr>
                ${row.map(cell => `<td>${cell}</td>`).join('')}
            </tr>
        `).join('');

        // Salva cópia original dos dados
        originalRows = Array.from(tableBody.querySelectorAll('tr'));
    }

    // Função de busca
    function searchTable(searchTerm) {
        const searchText = searchTerm.toLowerCase();
        
        originalRows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const matches = Array.from(cells).some(cell => 
                cell.textContent.toLowerCase().includes(searchText)
            );
            row.style.display = matches ? '' : 'none';
        });
    }

    // Evento de input na barra de pesquisa
    searchInput.addEventListener('input', function(e) {
        searchTable(e.target.value);
    });

    // Carrega dados iniciais
    loadInitialData();

    // Opcional: Ordenação por coluna
    document.querySelectorAll('#minhatabela th').forEach(headerCell => {
        headerCell.addEventListener('click', function() {
            const columnIndex = this.cellIndex;
            const isAsc = this.classList.toggle('asc');
            
            const rows = Array.from(tableBody.querySelectorAll('tr'))
                .sort((a, b) => {
                    const aText = a.cells[columnIndex].textContent.toLowerCase();
                    const bText = b.cells[columnIndex].textContent.toLowerCase();
                    return isAsc ? aText.localeCompare(bText) : bText.localeCompare(aText);
                });

            tableBody.innerHTML = '';
            rows.forEach(row => tableBody.appendChild(row));
        });
    });
    function handleMunicipioClick(municipio) {
        const searchInput = document.querySelector('.barradepesq');
        
        // Atualiza a barra de pesquisa
        searchInput.value = municipio.trim().toLowerCase();
            
        // Dispara o evento de busca
        const event = new Event('input', {
            bubbles: true,
            cancelable: true,
        });
        searchInput.dispatchEvent(event);
        
        // Rolagem suave para a tabela
        document.querySelector('.table').scrollIntoView({
            behavior: 'smooth'
        });
    }
    
    document.querySelectorAll('svg a').forEach(area => {
        const title = area.getAttribute('xlink:title');
        area.addEventListener('click', (e) => {
            e.preventDefault();
            handleMunicipioClick(title);
        });
    });

});