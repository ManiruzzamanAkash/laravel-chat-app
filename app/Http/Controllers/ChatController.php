<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ChatController extends Controller
{
    /**
     * Chat view.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Chat/Chat');
    }
}
