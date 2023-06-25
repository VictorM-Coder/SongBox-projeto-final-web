import type {Music} from "@/model/Music";

export interface StrapiResponse<T> {
    data: T;
    meta: { pagination: Pagination }
}

export interface Pagination {
    page: number,
    pageCount: number,
    pageSize: number,
    total: number
}