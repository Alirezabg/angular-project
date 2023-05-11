import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => (
	<ChakraProvider>
		<NavBar />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about/this/site" element={<About />} />
			<Route path="*" element={<h1>404 Not Found</h1>} />
		</Routes>
		<Footer />
	</ChakraProvider>
);

export default App;


