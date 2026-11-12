export interface Review {
  author: string;
  role: string;
  rating: number;
  text: string;
}

export interface Film {
  id: string;
  title: string;
  year: number;
  director: string;
  genre: 'Drama' | 'Sci-Fi' | 'Thriller' | 'Dokumenter' | 'Action';
  rating: number;
  duration: string;
  poster: string;
  synopsis: string;
  curatorNote: string;
  reviews: Review[];
}

export const films: Film[] = [
  {
    id: 'past-lives',
    title: 'Past Lives',
    year: 2023,
    director: 'Celine Song',
    genre: 'Drama',
    rating: 8.8,
    duration: '106 menit',
    poster: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=800&q=80',
    synopsis: 'Dua teman masa kecil di Korea Selatan terpisah ketika keluarga Nora beremigrasi. Dua dekade kemudian, mereka kembali dipertemukan di New York selama satu pekan krusial yang mempertanyakan takdir, cinta, dan konsep In-Yun.',
    curatorNote: 'Eksplorasi mendalam tentang kerinduan dan kemungkinan yang tak pernah terwujud dengan arahan visual hening yang puitis.',
    reviews: [
      {
        author: 'Maya Lestari',
        role: 'Penulis Jurnal Film',
        rating: 9.0,
        text: 'Naskah Celine Song adalah meditasi yang jujur tentang waktu. CineVault membuat saya bisa mencatat kutipan adegan terakhir dengan sangat presisi.'
      },
      {
        author: 'Arisandi Wardhana',
        role: 'Kurator Sinema Alternatif',
        rating: 8.7,
        text: 'Sinematografi Shabier Kirchner menangkap keheningan New York tanpa pretensi visual berlebihan.'
      }
    ]
  },
  {
    id: 'blade-runner-2049',
    title: 'Blade Runner 2049',
    year: 2017,
    director: 'Denis Villeneuve',
    genre: 'Sci-Fi',
    rating: 9.1,
    duration: '164 menit',
    poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    synopsis: 'Tiga puluh tahun setelah peristiwa film pertama, Blade Runner K dari LAPD mengungkap rahasia lama terkubur yang berpotensi menjerumuskan sisa peradaban manusia ke dalam kekacauan.',
    curatorNote: 'Mahakarya tata artistik modern dari Roger Deakins dengan gradasi warna oranye distopia yang tak tertandingi.',
    reviews: [
      {
        author: 'Bagas Perkasa',
        role: 'Arsiparis Sinema Sci-Fi',
        rating: 9.5,
        text: 'Skala visual yang megah namun tetap intim dalam pencarian makna kemanusiaan buatan.'
      }
    ]
  },
  {
    id: 'parasite',
    title: 'Parasite',
    year: 2019,
    director: 'Bong Joon-ho',
    genre: 'Thriller',
    rating: 9.3,
    duration: '132 menit',
    poster: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    synopsis: 'Keluarga Kim yang miskin secara bertahap menyusup ke dalam rumah tangga keluarga Park yang kaya raya dengan memalsukan kualifikasi profesional mereka satu per satu hingga insiden tak terduga terjadi di ruang bawah tanah.',
    curatorNote: 'Kritik sosial kelas berbalut komedi satir gelap dengan penguasaan ritme naratif dan pemanfaatan arsitektur ruang yang brilian.',
    reviews: [
      {
        author: 'Dian Sastrodimedjo',
        role: 'Kritikus Film Independen',
        rating: 9.4,
        text: 'Peralihan tonal di paruh kedua adalah salah satu pencapaian penyutradaraan terbaik abad ke-21.'
      }
    ]
  },
  {
    id: 'fire-of-love',
    title: 'Fire of Love',
    year: 2022,
    director: 'Sara Dosa',
    genre: 'Dokumenter',
    rating: 8.7,
    duration: '98 menit',
    poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80',
    synopsis: 'Katia dan Maurice Krafft, pasangan vulkanolog asal Prancis yang mendedikasikan hidup mereka merekam erupsi gunung berapi aktif dari jarak paling dekat di dunia selama dua dekade.',
    curatorNote: 'Dokumenter arsip 16mm yang menyatukan puisi visual, romansa tak lazim, dan keagungan alam semesta.',
    reviews: [
      {
        author: 'Hendra Gunawan',
        role: 'Dokumentaris Lingkungan',
        rating: 8.8,
        text: 'Penyusunan montase arsip video analognya memberikan getaran emosional yang luar biasa.'
      }
    ]
  },
  {
    id: 'mad-max-fury-road',
    title: 'Mad Max: Fury Road',
    year: 2015,
    director: 'George Miller',
    genre: 'Action',
    rating: 9.0,
    duration: '120 menit',
    poster: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=800&q=80',
    synopsis: 'Di dunia pasca-kehancuran yang gersang, Imperator Furiosa memimpin pelarian dramatis melintasi gurun pasir bersama lima istri tiran Immortan Joe dengan bantuan seorang penyendiri bernama Max Rockatansky.',
    curatorNote: 'Standar emas koreografi aksi praktis dan penyuntingan kinetik dalam sejarah sinema kontemporer.',
    reviews: [
      {
        author: 'Reza Aditya',
        role: 'Sutradara Film Pendek',
        rating: 9.2,
        text: 'Setiap potongan gambar diatur dengan presisi visual crosshair di tengah frame untuk ritme aksi tanpa henti.'
      }
    ]
  },
  {
    id: 'interstellar',
    title: 'Interstellar',
    year: 2014,
    director: 'Christopher Nolan',
    genre: 'Sci-Fi',
    rating: 9.2,
    duration: '169 menit',
    poster: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    synopsis: 'Ketika bumi terancam kekeringan dan kepunahan pangan global, sekelompok penjelajah luar angkasa menembus lubang cacing untuk mencari habitat baru bagi kelangsungan hidup umat manusia.',
    curatorNote: 'Perpaduan teori fisika relativitas dengan dinamika hubungan ayah dan anak yang menyentuh kalbu.',
    reviews: [
      {
        author: 'Maya Lestari',
        role: 'Penulis Jurnal Film',
        rating: 9.1,
        text: 'Skor musik Hans Zimmer dengan instrumen organ pipa gereja memberikan bobot spiritual pada ruang hampa kosmik.'
      }
    ]
  },
  {
    id: 'drive',
    title: 'Drive',
    year: 2011,
    director: 'Nicolas Winding Refn',
    genre: 'Thriller',
    rating: 8.6,
    duration: '100 menit',
    poster: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80',
    synopsis: 'Seorang pemeran pengganti otomotif Hollywood yang bekerja sambilan sebagai pengemudi bayaran untuk aksi perampokan terseret ke dalam skema kekerasan mafia demi melindungi tetangga yang ia cintai.',
    curatorNote: 'Estetika synthwave neo-noir Los Angeles dengan dialog minimalis dan ledakan tensi yang tajam.',
    reviews: [
      {
        author: 'Arisandi Wardhana',
        role: 'Kurator Sinema Alternatif',
        rating: 8.6,
        text: 'Penggunaan tempo lambat yang disandingkan dengan ritme synth 80an menciptakan atmosfer hipnotik.'
      }
    ]
  },
  {
    id: 'oppenheimer',
    title: 'Oppenheimer',
    year: 2023,
    director: 'Christopher Nolan',
    genre: 'Drama',
    rating: 9.2,
    duration: '180 menit',
    poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    synopsis: 'Kisah fisikawan J. Robert Oppenheimer yang memimpin Proyek Manhattan di Los Alamos untuk menciptakan bom atom pertama di dunia dan pergulatan nurani politik setelah perang usai.',
    curatorNote: 'Biopik struktural tiga babak dengan desain tata suara yang intens dan performa akting terbaik Cillian Murphy.',
    reviews: [
      {
        author: 'Dian Sastrodimedjo',
        role: 'Kritikus Film Independen',
        rating: 9.3,
        text: 'Montase adegan Trinity Test adalah salah satu pencapaian audio-visual paling mencekam yang pernah dibuat.'
      }
    ]
  }
];

export const genres = ['Semua', 'Drama', 'Sci-Fi', 'Thriller', 'Dokumenter', 'Action'] as const;
export type GenreFilter = (typeof genres)[number];
