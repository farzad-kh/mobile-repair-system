

interface UsePaginationProps<T> {
  items: T[];
  pageSize: number;
};
import {  useMemo, useState } from "react";

export function usePagination<T>({
  items,
  pageSize,
}: UsePaginationProps<T>) {

  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = useMemo(() => {
    return Math.ceil(items.length / pageSize);
  }, [items.length, pageSize]);


  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return items.slice(start, start + pageSize);
  }, [items, currentPage, pageSize]);

  function goToPage(page: number) {
    const validPage = Math.min(Math.max(page, 1), maxPage);
    setCurrentPage(validPage);
  }

  return { currentItems, currentPage, maxPage, goToPage };
}