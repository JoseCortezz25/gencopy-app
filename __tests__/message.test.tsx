import Message, { UserType } from "@/components/Message";
import { render } from "@testing-library/react";

describe("Message Component", () => {
  it("should render the message", () => {
    const messageComponent = render(<Message user={UserType.USER} message="Hello" />);
    messageComponent.getByText('Hello');
  })

  it("should render the bot avatar", () => {
    const messageComponent = render(<Message user={UserType.BOT} message="Hello" />);
    messageComponent.getByTestId('bot-avatar');
  });

  it("should render the user avatar", () => {
    const messageComponent = render(<Message user={UserType.USER} message="Hello" />);
    messageComponent.getByTestId('user-avatar');
  });

});