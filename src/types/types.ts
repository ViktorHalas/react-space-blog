export interface BlogInfo {
    id:	number;
    featured?: boolean;
    default: false;
    title: string;
    url: string;
    imageUrl: string;
    blogSite: string;
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
};

export type Theme = "dark" | "light";

export interface TabsBlogInfo {
    id: string;
    label: string;
};

export interface SelectOption {
    value: string;
    label: string;
}

export interface RequestOption {
    blogType?:string | undefined;
    id?:string | undefined ;
    sort?:string;
    limit?:number;
    start?:string;
    search?:string;
}