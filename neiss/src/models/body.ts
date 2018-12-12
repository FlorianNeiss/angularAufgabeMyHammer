import { Category } from './category';

export class Body{
    id: string;
    title: string;
    zip_code: string;
    thumbnail: string;
    attachments: string [];
    counter: {
        messages_total: number;
        messages_unread: number;
    };
    is_awarded: boolean;
    categories: Category[];
    state: string;
    description: string;
    end_date: string;
    created_at: string;
}
