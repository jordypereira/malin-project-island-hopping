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
    id: 1,
    day: '8. & 11',
    hour: 11,
    minute: 30,
    points: [59.898355, 10.731086]
  },
  {
    id: 2,
    day: '8. & 11',
    hour: 13,
    points: [59.89632867057662, 10.72915352242202]
  },
  {
    id: 3,
    day: '8. & 11',
    hour: 15,
    points: [59.89480752589679, 10.728027940150765]
  },
  {
    id: '1 & 2',
    day: 9,
    hour: 11,
    minute: 30,
    hour2: 13,
    points: [59.884168268723364, 10.722233481109127]
  },
  // {
  //   id: 1,
  //   day: 10,
  //   hour: 11,
  //   points: [59.87102156506349, 10.724683602702436]
  // },
  {
    id: 1,
    day: 10,
    hour: 11,
    minute: 30,
    points: [59.87004589372316, 10.719559849870075]
  },
  {
    id: 2,
    day: 10,
    hour: 13,
    points: [59.86908715135448, 10.718502261792198]
  },
]