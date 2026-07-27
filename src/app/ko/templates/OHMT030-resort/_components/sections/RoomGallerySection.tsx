type RoomGallerySectionProps = {
  images: string[];
  label?: string;
};

export function RoomGallerySection({
  images,
  label = "갤러리",
}: RoomGallerySectionProps) {
  return (
    <section className="pb-16 md:pb-32" style={{ backgroundColor: "var(--bg)" }}>
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/30">
          {label}
        </p>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={image}
              className={`overflow-hidden rounded-xl ${
                index === 0 ? "aspect-[16/9] md:col-span-2" : "aspect-[4/3]"
              }`}
            >
              <img
                src={`/templates/OHMT030-resort/${image}`}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
