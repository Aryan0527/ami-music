"use client";
export default function AlbumGrid() {
  // All your albums (this could also come from an API or database)
  const allAlbums = [
    {
      id: 1,
      title: "Tuff Skin",
      artist: "Stone Rebel",
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400",
      genre: "Rock",
      year: "2023",
      language: "English",
      type: "Album",
    },
    {
      id: 2,
      title: "Ghulaam",
      artist: "Ezlan Quest",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
      genre: "Pop",
      year: "2024",
      language: "Hindi",
      type: "Album",
    },
    {
      id: 3,
      title: "ONE STROKE",
      artist: "Maya Storm",
      image:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400",
      genre: "Hip Hop",
      year: "2024",
      language: "English",
      type: "Single",
    },
    {
      id: 4,
      title: "Jahanpana",
      artist: "Dizlaw",
      image:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400",
      genre: "Jazz",
      year: "2023",
      language: "Hindi",
      type: "Album",
    },
    {
      id: 5,
      title: "Raaha",
      artist: "Stone Rebel",
      image:
        "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400",
      genre: "Rock",
      year: "2022",
      language: "English",
      type: "EP",
    },
    {
      id: 6,
      title: "Night Visions",
      artist: "Maya Storm",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400",
      genre: "Pop",
      year: "2024",
      language: "English",
      type: "Album",
    },
    {
      id: 7,
      title: "Shop Class",
      artist: "Ezlan Quest",
      image:
        "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=400",
      genre: "Rock",
      year: "2023",
      language: "English",
      type: "Album",
    },
    {
      id: 8,
      title: "Andhbhakt",
      artist: "Dizlaw",
      image:
        "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=400",
      genre: "Hip Hop",
      year: "2024",
      language: "Hindi",
      type: "Single",
    },
    {
      id: 9,
      title: "Like You",
      artist: "Kbir",
      image: "/likeyou.jpg",
      genre: "Hip Hop",
      year: "2024",
      language: "Hindi",
      type: "Single",
    },
  ];

  return (
    <>
      <div className="bg-black min-h-screen p-6">
        <div className="mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-medium mb-2 text-center cursor-default">
            Catalogue
          </h2>
          <div className="h-0.5 w-28 bg-red-600 mx-auto"></div>
        </div>
        {/* Flex layout with flex-wrap */}
        <div className="flex flex-wrap gap-6">
          {allAlbums.map((album) => (
            <div
              key={album.id}
              className="group cursor-pointer w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(33.333%-16px)]"
            >
              {/* Album Cover */}
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-800">
                <img
                  src={album.image}
                  alt={album.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
              </div>

              {/* Album Info */}
              <div className="mt-3">
                <h3 className="text-white font-bold text-lg truncate">
                  {album.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{album.artist}</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                    {album.genre}
                  </span>
                  <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                    {album.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show count of albums */}
        <div className="text-center text-gray-500 mt-8">
          Showing {allAlbums.length} albums
        </div>
      </div>
    </>
  );
}
