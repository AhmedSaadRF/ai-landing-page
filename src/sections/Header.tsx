import LogoIcon from "@/assets/logo.svg";
import MenuIcon from '@/assets/icon-menu.svg'

export const Header = () => {
  return (
    <header>
      <div>
        <div>
          <div>
            <div>
              <LogoIcon />
            </div>
          </div>
          <div>
            <nav>
              <a href="#">Features</a>
              <a href="#">Developers</a>
              <a href="#">Pricing</a>
              <a href="#">Changelog</a>
            </nav>
          </div>
          <div>
            <button>
              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span>Join waitlist</span>
            </button>
            <MenuIcon />
          </div>
        </div>
      </div>
    </header>
  );
};
