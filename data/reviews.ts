export type Review = {
  id: number;
  name: string;
  rating: number;
  message: string;
  photo?: string;
};

export const reviews: Review[] = [
  {
    id: 1,
    name: "Customer Name",
    rating: 5,
    message: "Customer review will appear here.",
    photo: "/reviews/customer-1.jpg",
  },
  {
    id: 2,
    name: "Customer Name",
    rating: 5,
    message: "Customer review will appear here.",
  },
  {
    id: 3,
    name: "Customer Name",
    rating: 5,
    message: "Customer review will appear here.",
    photo: "/reviews/customer-3.jpg",
  },
  {
    id: 4,
    name: "Customer 4",
    rating: 5,
    message: "Review number four.",
  },
  {
    id: 5,
    name: "Customer 5",
    rating: 5,
    message: "Review number five.",
  },
  {
    id: 6,
    name: "Customer 6",
    rating: 5,
    message: "Review number six.",
  },
];