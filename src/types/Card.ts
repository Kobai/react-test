export interface CardImages {
    small: string;
    large: string;
}

export interface Card {
    id: string;
    name: string;
    images: CardImages;
}