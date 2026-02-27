export const meetings = [
  {
    id: 1,
    userId: 2,
    userName: "Дмитрий Волков",
    userAvatar: "",
    skill: "Гитара",
    date: "2026-03-15",
    time: "16:00",
    duration: 60,
    format: "online",
    status: "confirmed",
    topic: "Основы игры на гитаре"
  },
  {
    id: 2,
    userId: 3,
    userName: "Елена Морозова",
    userAvatar: "",
    skill: "Французский язык",
    date: "2026-03-16",
    time: "14:30",
    duration: 90,
    format: "online",
    status: "pending",
    topic: "Разговорный французский"
  },
  {
    id: 3,
    userId: 2,
    userName: "Дмитрий Волков",
    userAvatar: "",
    skill: "Гитара",
    date: "3024-03-18",
    time: "18:00",
    duration: 60,
    format: "offline",
    status: "confirmed",
    topic: "Аккорды и бой"
  },
  {
    id: 4,
    userId: 4,
    userName: "Анна Смирнова",
    userAvatar: "",
    skill: "Английский язык",
    date: "2025-03-20",
    time: "11:00",
    duration: 60,
    format: "online",
    status: "completed",
    topic: "Подготовка к интервью"
  }
]

export const timeSlots = [
  { time: "09:00", available: true },
  { time: "10:00", available: true },
  { time: "11:00", available: false },
  { time: "12:00", available: true },
  { time: "13:00", available: false },
  { time: "14:00", available: true },
  { time: "15:00", available: true },
  { time: "16:00", available: true },
  { time: "17:00", available: false },
  { time: "18:00", available: true },
  { time: "19:00", available: true },
  { time: "20:00", available: false }
]