
function Galeria(callback) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*'; // Aceitar apenas imagens

   // Adicione um ouvinte de evento para capturar a seleção do arquivo
  input.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file) {
      // Execute a função de retorno de chamada com o arquivo selecionado
      callback(file);
    }
  });

  // Dispare o clique no input para abrir a galeria do celular
  input.click();

}

export default Galeria

