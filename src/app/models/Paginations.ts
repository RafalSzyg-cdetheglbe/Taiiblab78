export class Pagination {
  constructor(
    public sortColumn: string,
    public page: number,
    public rowsPerPage: number,
    public sortAscending: boolean) {}
}
