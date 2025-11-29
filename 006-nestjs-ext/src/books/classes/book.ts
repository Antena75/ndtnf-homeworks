import { Pub } from "../interfaces/pub";

export class Book implements Pub {
    title: string
    description: string
    author: string
    id: string
}