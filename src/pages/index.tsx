import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    async ({ pageParam = '' }) =>
      await api.get('/api/images', { params: { after: pageParam } }),
    {
      getNextPageParam: (lastPage, pages) => lastPage.data.after,
    }
  );

  const formattedData = useMemo(() => {
    if (data) {
      return data.pages.flatMap((page, i) => {
        return page.data.data;
      });
    }
  }, [data]);

  if (isLoading) {
    return Loading();
  } else if (isError) {
    return Error();
  } else {
    return (
      <>
        <Header />
        <Box maxW={1120} px={20} mx="auto" my={20}>
          <CardList cards={formattedData} />
          {hasNextPage && (
            <Button
              name="Carregar mais"
              marginTop={5}
              disabled={isFetchingNextPage ? true : false}
              onClick={() => fetchNextPage()}
            >
              Carregar mais
            </Button>
          )}
        </Box>
      </>
    );
  }
}
