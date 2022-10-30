export interface CharacterI {
    created: string;
    episode: Array<string>;
    gender: string;
    id: number;
    image: string;
    location: {
        name: string;
        url: string;
    };
    name: string;
    origin: {
        name: string;
        url: string;
    };
    species: string;
    status: string;
    type?: string;
    url: string
}