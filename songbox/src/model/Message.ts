import type {Status} from "@/enums/Status";

export interface Message {
    id: number,
    content: string,
    status: Status
}