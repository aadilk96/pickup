export class Game {
    gameId: string;
    courtId: string;
    endDate: string;
    ownerid: string;
    duration: number;
    startDate: string;
    participants: number;
    creationDate: string;
}

export class Participation {
    gameId: string;
    userId: string;
    updated: string;
}