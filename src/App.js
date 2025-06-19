import { useState } from 'react';
import './App.css';
import Navbar from './portcomp/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './portcomp/Home';
import Project from './portcomp/Project';
import Footer from './portcomp/Footer';
import Contact from './portcomp/Contact';
import CppNotes from './portcomp/CppNotes';
import JavaNotes from './portcomp/JavaNotes';
import KotlinNotes from './portcomp/KotlinNotes';
import PythonNotes from './portcomp/PythonNotes';
import MySQL from './portcomp/MySQL';

function App() {

  if (!localStorage.getItem("mode")) {
    localStorage.setItem("mode", "light");
  }

  const [mode, setMode] = useState(localStorage.getItem("mode"));

  const toggleMode = () => {
    if (mode === 'light') {
      localStorage.setItem("mode", "dark");
      setMode("dark");
    }
    else {
      localStorage.setItem("mode", "light");
      setMode("light");
    }
  }

  return (
    <div>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />

        <Routes>
          <Route exact path="/" element={<Home mode={mode} />}></Route>
          <Route exact path="/project" element={<Project mode={mode} />}></Route>
          <Route exact path="/contact" element={<Contact mode={mode} />}></Route>
          <Route exact path="/cppnotes" element={<CppNotes mode={mode} />}></Route>
          <Route exact path="/javanotes" element={<JavaNotes mode={mode} />}></Route>
          <Route exact path="/kotlinnotes" element={<KotlinNotes mode={mode} />}></Route>
          <Route exact path="/pythonnotes" element={<PythonNotes mode={mode} />}></Route>
          <Route exact path="/mysqlotes" element={<MySQL mode={mode} />}></Route>
        </Routes>

        <Footer mode={mode} />

      </Router>
    </div>

  );
}

export default App;