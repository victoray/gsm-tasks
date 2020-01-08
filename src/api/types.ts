export interface Task {
    id: string;
    address: {
        location: {
            type: "Point"
            coordinates: number[]
        }
    }
}
