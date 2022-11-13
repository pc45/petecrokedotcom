import Image from 'next/image'

const albums = [
  {
    id: 21,
    name: 'VOL3TUS',
    imageSrc: '/img/2022/a2370028262_10.jpeg',
    imageAlt: "VOL3TUS",
    bandcamp: "https://volutus.bandcamp.com/album/vol3tus",
    applemusic: "",
    spotify: "",
  },
  {
    id: 22,
    name: 'VOL2TUS',
    imageSrc: '/img/2022/a1580627811_10.jpeg',
    imageAlt: "VOL2TUS",
    bandcamp: "https://volutus.bandcamp.com/album/vol2tus",
    applemusic: "",
    spotify: "",
  },
  {
    id: 23,
    name: 'VOL1TUS',
    imageSrc: '/img/2022/a1015699033_10.jpeg',
    imageAlt: "VOL1TUS",
    bandcamp: "https://volutus.bandcamp.com/album/vol1tus",
    applemusic: "",
    spotify: "",
  },
    {
    id: 1,
    name: 'Hovering Company',
    imageSrc: '/img/2020/10/hoveringcompany.jpg',
    imageAlt: "Hovering Company",
    bandcamp: "https://volutus.bandcamp.com/album/hovering-company",
    applemusic: "https://music.apple.com/us/album/hovering-company/1542836815",
    spotify: "https://open.spotify.com/album/2sTIqJBqXE3pwvP1IWPH6T",
  },
  {
    id: 2,
    name: 'Illinois River Valley Blues',
    imageSrc: '/img/2022/a1832016987_10.jpeg',
    imageAlt: "Illinois River Valley Blues",
    bandcamp: "https://brokeback.bandcamp.com/album/illinois-river-valley-blues",
    applemusic: "https://music.apple.com/us/album/illinois-river-valley-blues/1191961984",
    spotify: "https://open.spotify.com/album/1Y4meUQ3onD6MSKaw034Wi?si=dnWX8WhAQB6yak_OrullGA",
  },
  {
    id: 3,
    name: 'Grant No Glory',
    imageSrc: '/img/2016/10/41lPh-6RaL._SS500.jpg',
    imageAlt: "Grant No Glory",
    bandcamp: "https://exitverse.bandcamp.com/album/grant-no-glory",
    applemusic: "https://music.apple.com/us/album/grant-no-glory/1162883208",
    spotify: "https://open.spotify.com/album/5KdWxMb9YdRzmiSJY4oD2j?si=KJGSvddPRAi2XoqyulbTwQ",
  },
  {
    id: 4,
    name: 'The Luminous Heart of Nowhere',
    imageSrc: '/img/2016/10/PF016_Cover_Final_Web_1500x1500.jpg',
    imageAlt: "The Luminous Heart of Nowhere",
    bandcamp: "https://pinkavalanche.bandcamp.com/album/the-luminous-heart-of-nowhere",
    applemusic: "https://music.apple.com/us/album/the-luminous-heart-of-nowhere/931593548",
    spotify: "https://open.spotify.com/album/6x7HTaueijiGkAKJth1xev?si=nGO5dJ3FQ--emSS8WRAR4g",
  },
  {
    id: 5,
    name: 's/t',
    imageSrc: '/img/2016/10/61CQLIftmwL._SS500.jpg',
    imageAlt: "s/t",
    bandcamp: "https://exitverse.bandcamp.com/album/exit-verse",
    applemusic: "https://music.apple.com/us/album/exit-verse/912876650",
    spotify: "https://open.spotify.com/album/2zURs6m8qK8Cq6rI70i8Oq?si=8XoSj7fBRiymISgbhmKQ8A",
  },
  {
    id: 6,
    name: 'Bring Time',
    imageSrc: '/img/2016/10/a0586925340_16.jpg',
    imageAlt: "Bring Time",
    bandcamp: "https://redsandblue.bandcamp.com/album/bring-time",
    applemusic: "",
    spotify: "",
  },
  {
    id: 7,
    name: 'Brokeback and the Black Rock',
    imageSrc: '/img/2022/Brokeback-Brokeback-and-the-black-rock-.jpeg',
    imageAlt: "Brokeback and the Black Rock",
    bandcamp: "https://brokeback.bandcamp.com/album/brokeback-and-the-black-rock",
    applemusic: "https://music.apple.com/us/album/brokeback-and-the-black-rock/591511866",
    spotify: "https://open.spotify.com/album/5N2IKCEHIaDGaRzjaUd6Go?si=dNAW438RQXOkkJoKZS7mlQ",
  },
  {
    id: 8,
    name: 'Silk Prison',
    imageSrc: '/img/2016/10/617y3XHrFiL._SS500.jpg',
    imageAlt: "Silk Prison",
    bandcamp: "https://forgeagainrecords.bandcamp.com/album/silk-prison-part-1",
    applemusic: "https://music.apple.com/us/album/silk-prison/573046090",
    spotify: "https://open.spotify.com/album/4H7kdKnF7wbszPfTrkFJkN?si=4NiAJJtSR524JwWt36qD2A",
  },
  {
    id: 9,
    name: 'Black Cat Found',
    imageSrc: '/img/2016/10/a1819981120_16.jpg',
    imageAlt: "Black Cat Found",
    bandcamp: "https://sleepout.bandcamp.com/album/black-cat-found",
    applemusic: "https://music.apple.com/us/album/black-cat-found/539720363",
    spotify: "https://open.spotify.com/album/0qgbeNFvtirPqBZBAc7tDK?si=XLOHkJnlTdKq49Hw56PpQA",
  },
  {
    id: 10,
    name: 'Son of the Stars',
    imageSrc: '/img/2016/10/NDA-003_front.jpg',
    imageAlt: "Son of the Stars",
    bandcamp: "https://redsandblue.bandcamp.com/album/son-of-the-stars",
    applemusic: "",
    spotify: "",
  },
  {
    id: 11,
    name: 'Like Revenge',
    imageSrc: '/img/2016/10/51omvg8eyUL._SS500.jpg',
    imageAlt: "Like Revenge",
    bandcamp: "",
    applemusic: "https://music.apple.com/us/album/like-revenge/317302511",
    spotify: "https://open.spotify.com/album/4Xg5CSwNuH5ulhVeo7MnUU?si=O8zsNC-WQge8NXFzr5emnA",
  },
  {
    id: 12,
    name: 'The World I Know',
    imageSrc: '/img/2017/04/61y7Zv-aeLL._SS500.jpeg',
    imageAlt: "The World I Know",
    bandcamp: "https://undercomm.bandcamp.com/album/the-world-i-know",
    applemusic: "https://music.apple.com/us/album/the-world-i-know-a-tribute-to-pegboy/280521895",
    spotify: "https://open.spotify.com/album/6706Hg8v48e4cRzaPkwhEZ?si=nRqzlSAaTOWLLQ-59hnsqQ",
  },
  {
    id: 13,
    name: 'Petty Theft',
    imageSrc: '/img/2016/10/petty.jpg',
    imageAlt: "Petty Theft",
    bandcamp: "",
    applemusic: "",
    spotify: "",
  },
  {
    id: 14,
    name: 'Work Slow Crush Foes',
    imageSrc: '/img/2016/10/a2430129526_16.jpg',
    imageAlt: "Work Slow Crush Foes",
    bandcamp: "https://rollotomasi.bandcamp.com/album/work-slow-crush-foes",
    applemusic: "https://music.apple.com/us/album/work-slow-crush-foes/280423190",
    spotify: "https://open.spotify.com/album/2GwgY6R9ZQYGyyEx1MnZQg?si=TUTA1atBRluujKt8e3k4YQ",
  },
  {
    id: 15,
    name: 'Parts and Accessories',
    imageSrc: '/img/2016/10/61XhSl-AiTL._SS500.jpg',
    imageAlt: "Parts and Accessories",
    bandcamp: "https://hanalei.bandcamp.com/album/parts-and-accessories",
    applemusic: "https://music.apple.com/us/album/parts-and-accessories/213178189",
    spotify: "https://open.spotify.com/album/2VoRc6lZPS7xwZjCSc8ixu?si=X9nza3-WSxieESYy23AgnA",
  },
  {
    id: 16,
    name: 'Foreign Nationals',
    imageSrc: '/img/2022/R-3828960-1415216567-7545.jpeg',
    imageAlt: "Foreign Nationals",
    bandcamp: "",
    applemusic: "",
    spotify: "",
  },
]

export function Album() {
  return (
      <div>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="border-white border-2">
            <h2 className="p-2 font-display text-4xl font-bold tracking-wide text-white">Discography</h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-3 xl:gap-x-8">
            {albums.map((album) => (
                <div key={album.id} className="group relative">
                  <div className="bg-gray-200 relative aspect-square overflow-hidden group-hover:opacity-75">
                    <Image
                        src={album.imageSrc}
                        layout="fill"

                        className="object-center shadow-lg"
                        alt={album.name}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-md text-white font-extrabold font-display">
                          {album.name}
                      </h3>
                    </div>
                    <div className="flex space-x-2 items-center mt-2">
                      {album.bandcamp !== "" &&
                          <a href={album.bandcamp} target="_blank" rel="noreferrer">
                            <img className="w-16 h-12 bg-red-700 hover:bg-white rounded-lg"
                               src="img/2022/bandcamp-logotype-svgrepo-com.svg"
                               alt="Bandcamp"/>
                          </a>
                      }
                      {album.applemusic !== "" &&
                          <a href={album.applemusic} target="_blank" rel="noreferrer">
                          <img className="w-16 h-12 bg-red-700 hover:bg-white rounded-lg"
                               src="img/2022/apple-music-logo.png"
                               alt="Apple Music"/>
                          </a>
                      }
                      {album.spotify !== "" &&
                          <a href={album.spotify} target="_blank" rel="noreferrer">
                          <img className="w-16 h-12 bg-red-700 hover:bg-white rounded-lg"
                               src="img/2022/Spotify-Black-Logo.wine.svg"
                               alt="Spotify"/>
                          </a>
                      }
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  )
}
