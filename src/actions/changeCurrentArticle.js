export const CHANGE_CURRENTARTICLE = 'CHANGE_CURRENTARTICLE';

export const changeCurArticle = (curArticle) => ({
  type: CHANGE_CURRENTARTICLE,
  article: curArticle,
});
