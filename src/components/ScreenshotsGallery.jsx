export default function ScreenshotsGallery({ images }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Captura ${i + 1}`}
          style={{ maxWidth: "300px", borderRadius: "12px", boxShadow: "0 4px 10px rgba(255,215,0,0.3)" }}
        />
      ))}
    </div>
  );
}
