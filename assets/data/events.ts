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
    points: [59.896511, 10.728561]
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
    id: '1 & 2',
    day: 8,
    hour: 16,
    minute: 30,
    hour2: 17,
    minute2: 30,
    points: [59.884168268723364, 10.722233481109127]
  },
  {
    // Langøyene Konsert 1
    id: 1,
    day: 11,
    hour: 12,
    points: [59.86908715135448, 10.718502261792198]
  },
  {
    // Langøyene Konsert 2
    id: 2,
    day: 11,
    hour: 14,
    points: [59.8711325, 10.7212618]
  },
  ]
