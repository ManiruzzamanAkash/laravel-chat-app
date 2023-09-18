import { Fragment } from "react";

export default function ChatMessages({ messages, auth_id }) {
    const isReceivedMessage = (message) => {
        return message.receiver_id === auth_id;
    };

    return (
        <>
            {(messages || []).map((message, index) => (
                <Fragment key={index}>
                    <div
                        className={`${
                            isReceivedMessage(message)
                                ? "receive-chat justify-start"
                                : "send-chat justify-end"
                        } relative flex`}
                    >
                        <div
                            className={`mb-2 max-w-[80%] rounded ${
                                isReceivedMessage(message)
                                    ? "bg-violet-400"
                                    : "bg-violet-200"
                            } px-5 py-2 text-sm ${
                                isReceivedMessage(message)
                                    ? "text-white"
                                    : "text-slate-500"
                            }`}
                        >
                            <p>{message?.message}</p>
                        </div>
                    </div>
                </Fragment>
            ))}
        </>
    );
}
