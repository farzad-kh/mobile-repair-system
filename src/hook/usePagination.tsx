import { useMemo, useState } from "react";

interface UsePaginationProps<T> {
  items: T[];
  pageSize: number;
}

export function usePagination<T>({
  items,
  pageSize,
}: UsePaginationProps<T>) {

  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = useMemo(() => {
    return Math.max(1, Math.ceil(items.length / pageSize));
  }, [items.length, pageSize]);

 
  const safePage = useMemo(() => {
    return Math.min(currentPage, maxPage);
  }, [currentPage, maxPage]);

  const currentItems = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return items.slice(start, start + pageSize);
  }, [items, safePage, pageSize]);

  function goToPage(page: number) {
    setCurrentPage(Math.min(Math.max(page, 1), maxPage));
  }

  return {
    currentItems,
    currentPage: safePage,
    maxPage,
    goToPage,
  };
}