import ChatInput from "@/Components/Chat/ChatInput";
import ChatMessages from "@/Components/Chat/ChatMessages";
import ChatSidebar from "@/Components/Chat/ChatSidebar";
import ChatUserInfoHeader from "@/Components/Chat/ChatUserInfoHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Chat(props) {
    const { auth, errors, recentMessages, receiver, messages } = props;
    return (
        <AuthenticatedLayout auth={auth} errors={errors}>
            <div className="">
                <div className="messanger h-screen overflow-hidden p-4">
                    <div className="flex">
                        <div className="basis-2/6 border-r border-slate-100 bg-white pt-3">
                            <ChatSidebar recentMessages={recentMessages} />
                        </div>

                        <div className="basis-4/6">
                            {receiver?.id ? (
                                <>
                                    <ChatUserInfoHeader receiver={receiver} />
                                    <div className="messanger mt-4">
                                        <div className="px-4">
                                            <ChatMessages
                                                messages={messages}
                                                auth_id={auth?.user?.id}
                                            />
                                        </div>

                                        <ChatInput receiver={receiver} />
                                    </div>
                                </>
                            ) : (
                                <div className="flex justify-center items-center bg-slate-100 h-screen">
                                    <p className="font-bold text-3xl text-gray-500">
                                        Please select a User to start
                                        chatting...
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
