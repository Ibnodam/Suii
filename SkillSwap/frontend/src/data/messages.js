export const chats = [
  {
    id: 1,
    user: {
      id: 2,
      name: "Дмитрий Волков",
      avatar: "",
      online: true,
      lastSeen: null
    },
    lastMessage: {
      text: "Привет! Когда удобно встретиться?",
      time: "10:30",
      read: false
    },
    messages: [
      {
        id: 1,
        senderId: 2,
        text: "Привет! Вижу ты хочешь научиться играть на гитаре?",
        time: "10:15",
        read: true
      },
      {
        id: 2,
        senderId: 1,
        text: "Да, давно мечтаю! Ты преподаешь?",
        time: "10:20",
        read: true
      },
      {
        id: 3,
        senderId: 2,
        text: "Да, уже 3 года. Могу помочь с основами",
        time: "10:25",
        read: true
      },
      {
        id: 4,
        senderId: 2,
        text: "Привет! Когда удобно встретиться?",
        time: "10:30",
        read: false
      }
    ]
  },
  {
    id: 2,
    user: {
      id: 3,
      name: "Елена Морозова",
      avatar: "",
      online: false,
      lastSeen: "вчера в 18:30"
    },
    lastMessage: {
      text: "Спасибо за урок! Было очень полезно",
      time: "вчера",
      read: true
    },
    messages: [
      {
        id: 1,
        senderId: 3,
        text: "Привет! Готова к занятию по французскому?",
        time: "вчера в 14:00",
        read: true
      },
      {
        id: 2,
        senderId: 1,
        text: "Да, конечно! Во сколько встречаемся?",
        time: "вчера в 14:05",
        read: true
      },
      {
        id: 3,
        senderId: 3,
        text: "Давай в 16:00 по зуму?",
        time: "вчера в 14:10",
        read: true
      },
      {
        id: 4,
        senderId: 1,
        text: "Отлично, ссылку скинешь?",
        time: "вчера в 14:12",
        read: true
      },
      {
        id: 5,
        senderId: 3,
        text: "Конечно! До встречи",
        time: "вчера в 14:15",
        read: true
      },
      {
        id: 6,
        senderId: 1,
        text: "Спасибо за урок! Было очень полезно",
        time: "вчера в 17:45",
        read: true
      }
    ]
  }
]