import { ReactElement } from 'react';
import { notFound } from 'next/navigation';
import ArticleList from '@/components/ArticleList/ArticleList';
import { IUser } from '@/types/user';
import publicRuntimeConfig from '@/utils/config';

interface IArticle {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface IPageProps {
  params: Promise<{
    userId: string;
  }>;
}

const fetchUser = async (userId: string): Promise<IUser> => {
  const url = publicRuntimeConfig.userUrl.replace('{useId}', userId);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Nepodařilo se načíst uživatele');
  }

  return response.json();
};

const fetchArticles = async (userId: string): Promise<IArticle[]> => {
  const url = publicRuntimeConfig.articlesUrl.replace('{useId}', userId);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Nepodařilo se načíst články');
  }

  return response.json();
};

const ArticlesPage = async ({ params }: IPageProps): Promise<ReactElement> => {
  const { userId } = await params;

  try {
    const [user, articles] = await Promise.all([
      fetchUser(userId),
      fetchArticles(userId),
    ]);

    if (!user || !articles) {
      notFound();
    }

    return <ArticleList articles={articles} user={user} />;
  } catch (error) {
    console.error('Chyba při načítání dat:', error);
    notFound();
  }
};

export default ArticlesPage;
