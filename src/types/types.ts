export interface NewsInfo {
    id:	number;
    featured?: boolean;
    default: false;
    title: string;
    url: string;
    imageUrl: string;
    newsSite: string;
    summary: string;
    publishedAt: string;
    launches: Launch[];
    events: Event[];
};

interface Launch {
    id:	string;
    provider:	string;
};
interface Event {
    id:	string;
    provider:	string;
}