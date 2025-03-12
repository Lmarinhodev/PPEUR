document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.barradepesq');
    const tableBody = document.querySelector('#minhatabela tbody');
    
    // Dados 
    const dummyData = [
        { estado: "RN", cidade: "Natal", nome: "Cidade da Esperança", 
          resumo: "arquivos/resumo.pdf", mapa: "assets/mapa.png", 
          ficha: "arquivos/RAO/conjunto cidade da esperança.pdf" },
    ];

    //Cria o botão ficha
    function createButton(link) {
        const button = document.createElement('button');
        button.className = 'btn-ficha';
        button.textContent = 'Ficha';
        button.addEventListener('click', () => window.location.href = link);
        return button;
    }

    //Tranforma a imagem em clicável
    function createImageCell(src, link) {
        const a = document.createElement('a');
        a.href = link;
        const img = document.createElement('img');
        img.src = src;
        img.alt = '';
        a.appendChild(img);
        return a;
    }

    // Carrega dados iniciais
    function loadInitialData() {
        tableBody.innerHTML = '';
        dummyData.forEach(item => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${item.estado}</td>
                <td>${item.cidade}</td>
                <td>${item.nome}</td>
            `;

            // Células com componentes dinâmicos
            const resumoCell = document.createElement('td');
            resumoCell.appendChild(createImageCell("assets/imagem.png", item.resumo));
            
            const mapaCell = document.createElement('td');
            mapaCell.appendChild(createImageCell("assets/mapa.png", item.resumo));
            
            const fichaCell = document.createElement('td');
            fichaCell.appendChild(createButton(item.ficha));

            row.append(resumoCell, mapaCell, fichaCell);
            tableBody.appendChild(row);
        });
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

    loadInitialData();

    // Ordenação por coluna
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