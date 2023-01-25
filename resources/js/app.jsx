import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
});

InertiaProgress.init({ color: '#4B5563' });

Echo.private(`messenger.1.2`)
    .listen('MessageSent', (e) => {
        console.log(e);
        console.log(e.message);
    });


// Echo.join(`group_chat.1`)
//     .here((users) => {
//         console.log(users);
//     })
//     .joining((user) => {
//         console.log(user.name);
//     })
//     .leaving((user) => {
//         console.log(user.name);
//     })
//     .listen('GroupChatMessage', (e) => {
//         console.log(e);
//     })
//     .error((error) => {
//         console.error(error);
//     });
