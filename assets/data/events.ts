export interface EventConcert {
  id: number | string
  day?: number | string
  points: [number, number]
  hour?: number
  hour2?: number
  minute?: number | string
  minute2?: number
  customText?: string
}

export const events: Array<EventConcert> = [
  {
    // Hovedøya Konsert 1
    id: 1,
    points: [59.8978423, 10.7308809],
    customText: 'Konsert 1<br> 13. juli - 13:00<br> 15. juli - 14:00',
  },
  {
    // Hovedøya Konsert 2
    id: 2,
    points: [59.8954658, 10.7290597],
    customText: 'Konsert 2<br> 13. juli - 15:00<br> 15. juli - 16:00',
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
]
