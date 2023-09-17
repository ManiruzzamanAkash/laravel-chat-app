import { Fragment } from "react";

export default function ChatMessages({ messages, ...props }) {
    const isReceivedChat = (message) => {
        return message?.receiver_id === props?.auth?.user?.id;
    };

    return (
        <>
            {messages.map((message, index) => (
                <Fragment key={index}>
                    {isReceivedChat(message) ? (
                        <div className="receive-chat relative flex justify-start">
                            <div className="mb-2 max-w-[80%] rounded bg-violet-400 px-5 py-2 text-sm text-white">
                                <i className="fa fa-caret-up absolute -top-2 text-violet-400"></i>
                                <p>{message?.message}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="send-chat relative flex justify-end">
                            <div className="mb-2 max-w-[80%] rounded bg-violet-200 px-5 py-2 text-sm text-slate-500">
                                <p>{message?.message}</p>
                            </div>
                        </div>
                    )}
                </Fragment>
            ))}
        </>
    );
}
