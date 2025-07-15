import {
  ColumnDef,
} from '@tanstack/react-table';

export interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onRowClick?: (row: T) => void;
}