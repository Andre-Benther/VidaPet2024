import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';

function Commit({ capturedImages, closeWebcam }) {  
  const [captureDatetime, setCaptureDatetime] = useState(null);
  const [comments, setComments] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);


  useEffect(() => {
    // Obter a data e hora atual quando o componente for montado
    const currentDate = new Date();
    setCaptureDatetime(currentDate.toISOString());
  }, []);

  useEffect(() => {
    // Obter a localização quando o componente for montado
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error('Erro ao obter a localização:', error);
        }
      );
    } else {
      console.error('Geolocalização não suportada pelo navegador.');
    }
  }, []); // O segundo parâmetro vazio assegura que o efeito só seja executado uma vez, quando o componente for montado.


  const handleSalvar = async () => {
    try {
      // Obter a data e hora atual
      const currentDate = new Date();
      setCaptureDatetime(currentDate.toISOString());

      // Enviar os dados e imagens
      const formData = new FormData();
  
      // Adicione as informações adicionais (latitude, longitude, etc.)
      formData.append('latitude', latitude); // Substitua "latitude" pelo valor real
      formData.append('longitude', longitude); // Substitua "longitude" pelo valor real
      formData.append('capture_datetime', captureDatetime); // Substitua "capture_datetime" pelo valor real
      formData.append('comments', comments); // Substitua "comments" pelo valor real
  
      // Adicione as imagens
      capturedImages.forEach((image, index) => {
        formData.append(`capturedImage${index + 1}`, dataURLtoFile(image, `capturada${index + 1}.jpg`));
      });
  
      // Envie os dados para o servidor
      const response = await fetch('https://vidapet.tech/upload.php', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        console.log('Dados e imagens enviados com sucesso!');
      } else {
        console.error('Erro ao enviar dados e imagens.');
      }      
      closeWebcam();
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }

  };

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
  

  return (
    <Container >
      <div className="formulario-container">
        <h2>Observação</h2>
        <textarea
          type="text"
          id="texto"
          name="texto"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          rows="5"
          required
          className="caixa-texto"
        />
      </div>
      <div>
        <button type="button" onClick={handleSalvar} className="botao-salvar">
          Salvar
        </button>
      </div>
    </Container>
  );
}

export default Commit;

const Container = styled.section`

.formulario-container {
  color:white;
  font-family: Arial, sans-serif;
  left:10px;
  margin: 40px;
  max-width: 600px;
  padding:10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.caixa-texto {
  width: 100%;
  height: 200px;
  padding: 10px;
  margin-bottom: 10px;
}

.botao-salvar {
  padding: 12px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.botao-salvar:hover {
  background-color: #45a049;
}

@media(max-width: 900px) {
  
  .caixa-texto {
    width: 400px;
    padding: 70px;
    margin-bottom: 20px;
  }

}
@media(max-width: 900px) {
  
  .caixa-texto {
    width: 250px;
    height:200px;
    padding: 10px;
    margin-bottom: 20px;
  }

}

`
