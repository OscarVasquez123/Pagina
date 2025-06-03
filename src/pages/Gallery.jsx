import ScreenshotsGallery from "../components/ScreenshotsGallery";

export default function Gallery() {
  const images = [
    "/screenshots/imagen1.png",
    "/screenshots/imagen2.png",
    "/screenshots/imagen3.png",
  ];

  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh", padding: "2rem", color: "#fff" }}>
      <h1 style={{ color: "#FFD700", marginBottom: "1rem" }}>Galería de capturas</h1>
      <ScreenshotsGallery images={images} />
    </div>
  );
}
