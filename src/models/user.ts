export class User {
    userId: string;
    firstName: string;
    lastName: string;
    displayName: string;
    email: string;
    birthday: string;
    joindate: string;
}

export class Court {
    courtId: string;
    address: string;
    lon: number;
    lat: number;
}

export class VisitedCourts {
    courtId: string;
    userId: string;
    times: number;
}