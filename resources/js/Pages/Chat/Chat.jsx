
import ChatInput from '@/Components/Chat/ChatInput';
import ChatMessages from '@/Components/Chat/ChatMessages';
import ChatSidebar from '@/Components/Chat/ChatSidebar';
import ChatUserInfoHeader from '@/Components/Chat/ChatUserInfoHeader';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Chat(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <div className="">
                <div className="messanger h-screen overflow-hidden p-4">
                    <div className="flex">
                        <div className="basis-2/6 border-r border-slate-100 bg-white pt-3">
                            <ChatSidebar />
                        </div>

                        <div className="basis-4/6">
                            <ChatUserInfoHeader />

                            <div className="messanger mt-4">
                                <div className="px-4">
                                    <ChatMessages />
                                </div>

                                <ChatInput />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
