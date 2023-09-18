import { Link } from "@inertiajs/inertia-react";

export default function ChatSidebar({ recentMessages }) {
    return (
        <>
            <div className="search-box h-10 text-slate-300">
                <div className="flex justify-between border-b border-slate-100 px-5 pb-1">
                    <form className="flex justify-center items-center">
                        <i className="fa fa-search"></i>
                        <input
                            type="search"
                            className="font-light border-0 hover:border-0 focus:border-0 focus:ring-0 !shadow-none focus:!outline-none"
                            placeholder="Search"
                        />
                    </form>
                    <div className="flex justify-center items-center">
                        <button className="relative">
                            <i className="fa fa-message"></i>
                            <i className="fa fa-plus absolute -top-2 text-sm"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="user-list h-screen overflow-y-auto">
                {recentMessages.map((user, index) => (
                    <Link
                        href={`/chat/${user.user_id}`}
                        key={index}
                        className="flex px-5 py-3 transition hover:cursor-pointer hover:bg-slate-100"
                    >
                        <div className="pr-4">
                            {user?.avatar !== undefined ? (
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
                                    width="50"
                                />
                            ) : (
                                <i className="fa fa-user-circle text-gray-300 text-5xl"></i>
                            )}
                        </div>

                        <div>
                            <h3 className="text-md text-violet-500">
                                {user.name.length > 0 ? user.name : "N/A"}
                            </h3>
                            <p className="h-5 overflow-hidden text-sm font-light text-gray-400">
                                {user.message}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
