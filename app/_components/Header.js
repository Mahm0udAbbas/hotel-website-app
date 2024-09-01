import Logo from "@/app/_components/Logo";
import NavigationToggle from "./NavigationToggle";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="h-[100px] border-b border-primary-900 px-8 py-5">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <NavigationToggle>
          <Navigation />
        </NavigationToggle>
      </div>
    </header>
  );
}

export default Header;
