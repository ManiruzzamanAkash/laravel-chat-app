<?php

namespace App\Repositories;

use App\Models\Message;

class ChatRepository
{
    public function getUserMessages(int $senderId, int $receiverId)
    {
        return Message::whereIn('sender_id', [$senderId, $receiverId])
            ->whereIn('receiver_id', [$senderId, $receiverId])
            ->get();
    }

    public function sendMessage(array $data)
    {
        return Message::create($data);
    }
}
