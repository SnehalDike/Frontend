import { Link, Route, Routes } from "react-router-dom"

function About(){
    return(<>
    <h1>About section</h1>
    </>)
}

function Home()
{
    return(<>
    <h1>Home section</h1>
    </>)
}

function Listing()
{
    return(<>
    <h1>Listing Section</h1>
    </>)
}

function RouterDemo()
{
    return(<>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/listing">Listing</Link>
                <h1 className="text-3xl font-bold text-blue-500">
      Tailwind is Working!
    </h1>
            </li>
        </ul>
    </nav>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/listing" element={<Listing/>}></Route>
        <Route path="*" element={<h1>404 not found</h1>}/>
    </Routes>
    </>)
}

//export default RouterDemo;