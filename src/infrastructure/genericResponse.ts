export interface PaginatedResponse<T> {
    data: T[],
    pagination: Pagination
}

export interface Pagination {
    next: string
}