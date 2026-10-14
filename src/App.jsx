import { useEffect } from "react";

const DESTINATION = "https://www.rpi.edu/";

export default function App() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.href = DESTINATION;
    }, 5000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="redirect-page">
      <section className="hero" aria-label="正在跳转至 RPI">
        <div className="seal-wrap" aria-hidden="true">
          <div className="spinner" />
          <div className="seal">
            {/* 将 public/rpi-seal.png 替换为你提供的校徽图片即可。 */}
            <img
              src="/rpi-seal.png"
              alt=""
              onError={(event) => {
                event.currentTarget.style.display = "none";
                event.currentTarget.nextElementSibling.style.display = "grid";
              }}
            />
            <div className="seal-fallback">
              <span className="fallback-monogram">RPI</span>
              <span className="fallback-caption">EST. 1824</span>
            </div>
          </div>
        </div>

        <a className="redirect-link" href={DESTINATION}>
          立即拥抱奶龙
        </a>
      </section>
    </main>
  );
}
