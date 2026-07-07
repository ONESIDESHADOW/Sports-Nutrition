import AnnouncementBar from "./AnnouncementBar";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import Button from "../ui/Button";

const Navbar = () => {
  return (
    <>
      <AnnouncementBar />

      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          <Logo />

          <SearchBar />

          <NavLinks />

          <div className="hidden lg:block">
            <Button>Contact Us</Button>
          </div>

          <MobileMenu />
        </div>
      </header>
    </>
  );
};

export default Navbar;