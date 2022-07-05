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
    // Hovedøya Konsert 1 & 3
    id: 1,
    day: '7. & 9',
    hour: 11,
    minute: 30,
    points: [59.8978423, 10.7308809]
  },
  {
    // Hovedøya Konsert 2
    id: 2,
    day: '7. & 9',
    hour: 13,
    minute: 30,
    points: [59.8954658, 10.7290597]
  },
  {
    // Gressholmen Konsert 1
    id: '1',
    day: 8,
    hour: 17,
    minute: 30,
    points: [59.884168268723364, 10.722233481109127]
  },
  {
    // Langøyene Konsert 1
    id: 1,
    day: 10,
    hour: 12,
    points: [59.8711325, 10.7212618]
  },
  ]
