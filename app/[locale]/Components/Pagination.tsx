'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const Pagination = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '5'
  const currentPathname = usePathname()

  const updateQueryParams = (newParams: Record<string, string>) => {
    const params = new URLSearchParams(searchParams as any); // Clone existing params
    Object.entries(newParams).forEach(([key, value]) => {
      params.set(key, value); // Update or add new params
    });
    router.push(`${currentPathname}?${params.toString()}`); // Preserve existing params
  };

  return (
    <div className="join">
      <button
        className="join-item btn"
        onClick={() => {
          if (Number(page) > 1) {
            updateQueryParams({ page: (Number(page) - 1).toString(), per_page });
          }
        }}
      >
        «
      </button>
      <button className="join-item btn">{page}</button>
      <button
        className="join-item btn"
        onClick={() => {
          updateQueryParams({ page: (Number(page) + 1).toString(), per_page });
        }}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;