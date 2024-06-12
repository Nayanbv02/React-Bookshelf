import React from 'react';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import '../assets/styles/Home.css';

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <div className="home-content">
          <div>
            <h2>Biblioteca para los amantes de la lectura</h2>
            <p>¿Quieres ver recomendaciones de libros, autores o participar en el foro para dar tu opinion de alguna lectura recomendada? Esta es tu pagina, podras compartir tus gustos y descubrir generos nuevos.</p>
            <h2>¿Por que leer?</h2>
            <p>Frente a otras alternativas de ocio, el hecho de leer posee una serie de ventajas que hacen que sea la opción favorita de muchos. También se trata de una forma de entretenerse que incita a la tranquilidad. El estrés del día a día puede pasarte factura e incluso en los peores casos causarte ansiedad. Por ello hay que encontrar maneras de relajarse y la lectura puede ser una de ellas.</p>
            <img src="https://lh5.googleusercontent.com/proxy/spFasLT2gAIqrE_7nYXiSseU-XYcVpzHt0h6PI0eR14vKlCFzg4mbZEyamaYBg6BHoSV89JGvkFZOySK1xYxCMYhxKqBi4HteMOl-2dvyT9NGZe2odc-d_iGz39kQVxIunX4FSucMlg" alt="Lectura" />
            <p>No debemos dejar pasar el hecho de que al mismo tiempo que nos entretenemos, con la lectura estamos culturizándonos. Al leer obtenemos información que nos resulta relevante para nuestro bagaje vital, nos da nuevos conocimientos y nos amplía las miras.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
