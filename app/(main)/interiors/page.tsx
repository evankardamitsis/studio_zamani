import { PlaceholderImage } from "../../components/PlaceholderImage";

type GalleryImage = { src: string; alt: string; aspectRatio: string };

const columns: GalleryImage[][] = [
  [
    {
      src: "/images/interiors/i1.jpg",
      alt: "Interior space 1",
      aspectRatio: "3/4",
    },
  ],
  [
    {
      src: "/images/interiors/i2.jpg",
      alt: "Interior space 2",
      aspectRatio: "4/5",
    },
  ],
  [
    {
      src: "/images/interiors/i3.jpg",
      alt: "Interior space 3",
      aspectRatio: "3/4",
    },
  ],
];

const offsets = [55, 145, 0];

export default function InteriorsPage() {
  return (
    <div className="min-h-screen bg-[#ebebeb]">
      <div className="grid grid-cols-3 gap-[18px] pl-[18px]">
        {columns.map((col, colIdx) => (
          <div
            key={colIdx}
            className="flex flex-col gap-[18px]"
            style={{ marginTop: offsets[colIdx] }}
          >
            {col.map((img, imgIdx) => (
              <div
                key={imgIdx}
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: img.aspectRatio }}
              >
                <PlaceholderImage
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
