export interface Exhibition {
  slug: string;
  name: string;
  artist: string;
  status: 'on-show' | 'opening-soon' | 'permanent';
  dateFrom: string;
  dateTo: string;
  showroom: string;
  tags: { genre: string; theme: string; ageRating: string };
  image: string;
  heroImage: string;
  description: string;
}

export interface GalleryEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  type: '워크숍' | '작가 토크' | '투어' | '퍼포먼스';
  ageRating: string;
  image: string;
}
