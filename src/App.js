import Header from "./Components/Header";
import FirstContent from "./Components/FirstContent";
import MyProjects from "./Components/MyProjects";
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import Calculator from "./Pages/Calculator";

function App() {
  return (
    <div className="App">
        <Header skills='Мои навыки' projects='Мои работы' about='Обо мне' contacts='Контакты'/>
        <FirstContent/>
        <MyProjects/>
        <AboutMe/>
        {/*<Calculator/>*/}
        <Footer/>
    </div>
  );
}

export default App;
