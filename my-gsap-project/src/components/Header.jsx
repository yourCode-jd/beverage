function Header() {
  return (
    <header className="sticky top-0 bg-white shadow-md p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Beverage</h1>
        <nav className="space-x-4">
          <a href="#hero" className="hover:text-blue-500">
            Hero
          </a>
          <a href="#experience" className="hover:text-blue-500">
            Experience
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
