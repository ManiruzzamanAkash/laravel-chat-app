
import ChatInput from '@/Components/Chat/ChatInput';
import ChatMessages from '@/Components/Chat/ChatMessages';
import ChatSidebar from '@/Components/Chat/ChatSidebar';
import ChatUserInfoHeader from '@/Components/Chat/ChatUserInfoHeader';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Chat(props) {
    console.log(props);
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <div className="">
                <div className="messanger h-screen overflow-hidden p-4">
                    <div className="flex">
                        <div className="basis-2/6 border-r border-slate-100 bg-white pt-3">
                            <ChatSidebar recentMessages={props.recentMessages} />
                        </div>

                        <div className="basis-4/6">
                            <div className="flex justify-center items-center bg-slate-100 h-screen">
                                <p className="font-bold text-3xl text-gray-500">
                                    Please select a User to start chatting...
                                </p>
                            </div>
                            {/* <ChatUserInfoHeader />

                            <div className="messanger mt-4">
                                <div className="px-4">
                                    <ChatMessages />
                                </div>

                                <ChatInput />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
