export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="font-bold text-xl cursor-pointer">Rogério Melo</div>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <a href="#hero" className="hover:text-blue-600 smooth-scroll">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600 smooth-scroll">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600 smooth-scroll">
              Projects
            </a>
          </li>
          <li>
            <a href="#professional" className="hover:text-blue-600 smooth-scroll">
              Professional
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
