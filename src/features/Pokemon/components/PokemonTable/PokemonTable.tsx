import { useMemo } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Table } from '@/shared/ui/molecules';
import { PokemonListItem } from '../../types';
import type { PockemonTableProps } from './types'

export function PokemonTable({
  data,
  currentPage,
  onRowClick,
  onPageChange,
}: PockemonTableProps) {
  const columns = useMemo<ColumnDef<PokemonListItem>[]>(() => [
    {
      accessorKey: 'name',
      header: 'Name',
      cell: (info) => (
        <span style={{ textTransform: 'capitalize' }}>
          {info.getValue() as string}
        </span>
      ),
    },
    {
      accessorKey: 'url',
      header: 'ID',
      cell: (info) => {
        const url = info.getValue() as string;
        const id = url.split('/').filter(Boolean).pop();
        return `#${id}`;
      },
    },
  ], []);

  return (
    <div>
      <Table
        data={data.results}
        columns={columns}
        onRowClick={onRowClick}
        currentPage={currentPage}
        totalCount={data.count}
        pageSize={20}
        onPageChange={onPageChange}
      />
    </div>
  );
}