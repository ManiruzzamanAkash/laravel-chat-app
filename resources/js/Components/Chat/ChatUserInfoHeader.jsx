export default function ChatUserInfoHeader({ receiver }) {
    return (
        <div className="user-info-header bg-white px-5 py-3">
            <div className="flex justify-between">
                <div className="flex items-center">
                    {receiver?.avatar !== undefined ? (
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
                            width="50"
                        />
                    ) : (
                        <i className="fa fa-user-circle text-gray-300 text-5xl"></i>
                    )}

                    <h3 className="text-md pl-4 text-gray-400">
                        {receiver?.name}
                    </h3>
                </div>
                <div>
                    <i className="fa fa-message text-violet-300"></i>
                    <i className="fa fa-video ml-3 text-gray-200"></i>
                    <i className="fa fa-phone ml-3 text-gray-200"></i>
                </div>
            </div>
        </div>
    );
}
