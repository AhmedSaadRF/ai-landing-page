import acmeLogo from '@/assets/logo-acme.png'
import apexLogo from '@/assets/logo-apex.png'
import celestialLogo from '@/assets/logo-celestial.png'
import quantumLogo from '@/assets/logo-quantum.png'
import pulseLogo from '@/assets/logo-pulse.png'
import echoLogo from '@/assets/logo-echo.png'

export const LogoTicker = () => {
  return (
    <section>
      <div>
        <div>
          <div>
            <h2>Trusted by top innovative teams</h2>
          </div>
          <div>
            <div>
              {[
                acmeLogo,
                apexLogo,
                celestialLogo,
                quantumLogo,
                pulseLogo,
                echoLogo
              ].map((logo) => (
                <img src={logo.src} key={logo.src} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
