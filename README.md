# Nextflix

      getNextPageParam: (lastPage, pages) => {
        const nextPage = pages?.length + 1;
        return nextPage <= lastPage?.total_pages ? nextPage : undefined;
      },
