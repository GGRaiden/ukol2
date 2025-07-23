import { ReactElement } from 'react';
import { IUser } from '@/types/user';
import style from './ArticleList.module.css';

interface IArticle {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface IArticleListProps {
  articles: IArticle[];
  user: IUser;
}

const ArticleList = ({ articles, user }: IArticleListProps): ReactElement => (
  <div className={style.container}>
    <div className={style.header}>
      <h1 className={style.title}>Articles</h1>
      <p className={style.subtitle}>
        <span className={style.label}>Autor </span>{user.name}</p>
    </div>

    <div className={style.articlesGrid}>
      {articles.map((article) => (
        <article key={article.id} className={style.articleCard}>
          <h2 className={style.articleTitle}>{article.title}</h2>
          <p className={style.articleBody}>{article.body}</p>
        </article>
      ))}
    </div>
  </div>
);

export default ArticleList;
