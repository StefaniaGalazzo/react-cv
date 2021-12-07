import './App.css';

function App() {
  return (
  <div className="app-div">
    <div className="CV">
      <header>
        <div className="logo"> <h1>SG</h1> </div>
        <h2> Stefania Galazzo</h2>
      </header>

      <div className="description"> 
      <h3>Descrizione</h3>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit sapien id diam molestie ultricies. Donec sollicitudin porttitor tortor vel venenatis. Cras pharetra aliquet ornare. Etiam vel interdum tellus. In hac habitasse platea dictumst. In euismod aliquet felis, sed molestie turpis interdum ut. Vivamus ut posuere orci, nec vehicula arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In eget nisi vitae metus iaculis placerat at ac velit.</p>
      </div>
      

      <div className="categories">
        <div className="work">
          <h3>Esperienze Lavorative</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit sapien id diam molestie ultricies. Donec sollicitudin porttitor tortor vel venenatis. Cras pharetra aliquet ornare. Etiam vel interdum tellus. </p>
        </div>
        <div className="langueges">
          <h3>Lingue</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit sapien id diam molestie ultricies. Donec sollicitudin porttitor tortor vel venenatis. Cras pharetra aliquet ornare. Etiam vel interdum tellus. </p>
        </div>
        <div className="hobby">
          <h3>Hobby</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit sapien id diam molestie ultricies. Donec sollicitudin porttitor tortor vel venenatis. Cras pharetra aliquet ornare. Etiam vel interdum tellus. </p>
        </div>
      </div>
    </div>
      
      <div className="contattami">
        <h3>Contattami</h3>
        <form className="flex-form"> 
          <label>Oggetto</label>
          <input type="text"></input>
          
          <label >Messaggio</label>
          <input type="text" className="message"></input>
        </form>
      </div>

      <footer>Stefania galazzo - galazzostefania@gmail.com</footer>
    </div>
  );
}

export default App;
