const Header = () => {

  return (
    <header className="bg-gray-800 text-white p-3 shadow-orange-500">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-lg font-bold">My Portfolio</h1>
            <nav>
             <ul className="flex justify-between items-center space-x-3">
                <li><a href="Home" className="hover:text-gray-500">Home</a></li>
                <li><a href="Project" className="hover:text-gray-500">Project</a></li>
                <li><a href="Contact" className="hover:text-gray-500">Contact</a></li>
             </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header
