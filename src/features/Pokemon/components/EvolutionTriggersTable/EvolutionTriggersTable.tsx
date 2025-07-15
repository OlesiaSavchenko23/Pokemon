import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  ColumnDef,
} from '@tanstack/react-table';
import { Table } from '@/shared/ui/molecules';
import { EvolutionTriggerResponse, EvolutionTrigger } from '../../types';
import { fetchEvolutionTriggers } from '../../services';
import styles from './EvolutionTriggersTable.module.css';

export function EvolutionTriggersTable() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, isPending,isError } = useQuery<EvolutionTriggerResponse>({
    queryKey: ['evolutionTriggers', currentPage],
    queryFn: () => fetchEvolutionTriggers(currentPage),
  });

  const columns = useMemo<ColumnDef<EvolutionTrigger>[]>(() => [
    {
      accessorKey: 'name',
      header: 'Trigger Name',
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

  const onPageChange = (page: number) => {
    setCurrentPage(page)
  }

  if (isPending ) {
    return <div className={styles.loading}>Loading evolution triggers...</div>;
  }

  if (isError || !data.results) {
    return <div className={styles.error}>Failed to load evolution triggers.</div>;
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Evolution Triggers</h3>

       <Table
        columns={columns}
        data={data.results}
        currentPage={currentPage}
        totalCount={data.count}
        pageSize={10}
        onPageChange={onPageChange}
       />
    </div>
  );
}
