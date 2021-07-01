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
    day: '8. & 11',
    hour: 11,
    minute: 30,
    points: [59.8964267, 10.7287610]
  },
  {
    // Hovedøya Konsert 2
    id: 2,
    day: '8. & 11',
    hour: 13,
    points: [59.897231, 10.729286]
  },
  {
    // Hovedøya Konsert 3
    id: 3,
    day: '8. & 11',
    hour: 15,
    points: [59.8954658, 10.7290597]
  },
  {
    // Gressholmen Konsert 1
    id: '1 & 2',
    day: 9,
    hour: 16,
    minute: 30,
    hour2: 17,
    minute2: 30,
    points: [59.884168268723364, 10.722233481109127]
  },
  {
    // Langøyene Konsert 1
    id: 1,
    day: 10,
    hour: 13,
    points: [59.8711325, 10.7212618]
  },
  {
    // Langøyene Konsert 2
    id: 2,
    day: 10,
    hour: 11,
    minute: 45,
    points: [59.86908715135448, 10.718502261792198]
  },
  {
    // Langøyene Konsert 1 (Hvis mye vind) 
    id: 3,
    day: 10,
    hour: 13,
    points: [59.8715544, 10.7160208]
  },
  ]
