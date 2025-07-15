import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import type { Row } from '@tanstack/react-table';
import { Pagination } from '../../atoms';
import type { TableProps } from './types';
import styles from './Table.module.css';

export function Table<T>({
  data,
  columns,
  currentPage,
  totalCount,
  pageSize,
  onPageChange,
  onRowClick,
}: TableProps<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const totalPages = Math.ceil(totalCount / pageSize);

  const handleRowClick = (row: Row<T>) => {
    if (onRowClick) {
      onRowClick?.(row.original)
    }
  }

  return (
    <div>
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className={styles.th}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr
              key={row.id}
              onClick={() => handleRowClick(row)}
              className={styles.tr}
            >
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className={styles.td}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
}
