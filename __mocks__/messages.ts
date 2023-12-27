import { MessageProps, UserType } from "@/components/Message";

export const messagesMock: MessageProps[] = [
  {
    user: UserType.BOT,
    message: "Hello, how can I help you?",
  },
  {
    user: UserType.USER,
    message: "I need help with my order",
  },
  {
    user: UserType.BOT,
    message: "What is your order number?",
  },
  {
    user: UserType.USER,
    message: "123456",
  },
  {
    user: UserType.BOT,
    message: "Your order is on the way",
  },
  {
    user: UserType.USER,
    message: "Thank you",
  },
  {
    user: UserType.BOT,
    message: "You're welcome",
  },
  {
    user: UserType.USER,
    message: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. ",
  },
  {
    user: UserType.USER,
    message: "Thank you",
  },
  {
    user: UserType.BOT,
    message: "You're welcome",
  },
  {
    user: UserType.USER,
    message: "Thank you",
  },
  {
    user: UserType.BOT,
    message: "You're welcome",
  },
  {
    user: UserType.USER,
    message: "Thank you",
  },
  {
    user: UserType.BOT,
    message: "You're welcome",
  },
]