export enum UserType {
  "USER",
  "BOT"
}

export interface MessageProps {
  user: UserType;
  message: string;
};

const Avatar = ({ type }: { type: UserType }) => {
  if (type === UserType.BOT) {
    return (
      <div className="text-gray-500" data-testid="bot-avatar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
        </svg>
        <span className="sr-only">GenCopy.ai</span>
      </div>
    );
  }

  return (
    <div className="text-gray-500" data-testid="user-avatar">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="6" r="4" fill="currentColor" />
        <path d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z" fill="currentColor" />
      </svg>
    </div>
  );
};

const Message = ({ user, message }: MessageProps) => {
  return (
    <article className="w-full flex justify-between border border-gray-200 px-[20px] pt-[10px] pb-[15px] rounded-md shadow-sm">
      <div className="size-10 grid place-content-center">
        <Avatar type={user} />
      </div>
      <p className="w-[93%] pt-[7px]">{message}</p>
    </article>
  )
}

export default Message;