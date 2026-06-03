export interface AlumniEvent {
  id: string;
  title: string;
  speaker?: string;
  date: string;
  description: string;
  category: string;
}

export interface LeadershipMessage {
  name: string;
  designation: string;
  image: string;
  message: string;
}

export interface GalleryImage {
  id: number;
  image: string;
  title: string;
}

export interface Testimonial {
  id: number;
  name: string;
  batch: string;
  company: string;
  message: string;
}