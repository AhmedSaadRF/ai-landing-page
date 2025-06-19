import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";

export const CallToAction = () => {
  return (
    <section>
      <div>
        <div
          style={{
            backgroundImage: `url(${starsBg.src})`,
          }}
        >
          <div
            style={{
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></div>
          <div>
            <h2>AI-driven SEO for everyone.</h2>
            <p>Achieve clear, impactful results without the complexity.</p>
            <div>
              <Button>Join waitlist</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
