/* Estilos generales de la página */
body {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

/* Contenedores principales */
.container {
  width: 90%;
  max-width: 500px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  display: none;
  margin: 20px auto;
}

h1, h2 {
  color: #4CAF50;
  text-align: center;
}

/* Botones y formularios */
.button, .vote-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}

.admin-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #2196F3;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}

.admin-button:hover {
  background-color: #1976D2;
}

.back-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #666;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}

.button:hover, .vote-button:hover {
  background-color: #45a049;
}

.back-button:hover {
  background-color: #555;
}

input, select {
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Estilos para los candidatos */
.candidate {
  border: 2px solid #4CAF50;
  padding: 15px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.candidate:hover {
  transform: translateY(-2px);
}

.candidate img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
}

.candidate-info {
  flex: 1;
}

.candidate-info h3 {
  margin: 0 0 5px 0;
  color: #4CAF50;
}

/* Estilos para las imágenes de perfil */
.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 20px auto;
  display: block;
  object-fit: cover;
  border: 3px solid #4CAF50;
}

/* Panel de administrador */
.admin-form {
  padding: 20px;
}

#admin-resultados {
  margin-top: 20px;
}

#admin-lista-resultados {
  list-style: none;
  padding: 0;
}

#admin-lista-resultados li {
  padding: 10px;
  margin: 5px 0;
  background-color: #f5f5f5;
  border-radius: 4px;
  font-size: 1.1em;
}

/* Estilos del mensaje después de votar */
#mensaje-final {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffeb3b;
  padding: 30px;
  border-radius: 10px;
  display: none;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

/* Créditos */
#credits {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 5px;
  background-color: #4CAF50;
  color: white;
  z-index: 1000;
}
