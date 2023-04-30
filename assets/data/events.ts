interface event {
  id: number | string;
  day: number | string;
  hour: number;
  hour2?: number;
  minute?: number;
  minute2?: number;
  points: [number, number];
}

export const events: Array<event> = [
  {
    // Hovedøya Konsert 1
    id: 1,
    day: "13 & 15",
    hour: 13,
    points: [59.8978423, 10.7308809],
  },
  {
    // Hovedøya Konsert 2
    id: 2,
    day: "13 & 15",
    hour: 15,
    points: [59.8954658, 10.7290597],
  },
  {
    // Gressholmen Konsert 1
    id: 1,
    day: 14,
    hour: 18,
    points: [59.884168268723364, 10.722233481109127],
  },
  {
    // Langøyene Konsert 1
    id: 1,
    day: 16,
    hour: 14,
    points: [59.8696777, 10.7195264],
  },
];
