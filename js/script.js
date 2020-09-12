'use strict';

// document.getElementById('test-button').addEventListener('click', function(){
//     const links = document.querySelectorAll('.titles a');
//     console.log('links:', links);
//   });

const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /* [IN PROGRESS] add class 'active' to the clicked link */
  clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);

  /* [DONE] remove class 'active' from all articles */

  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */
  const activeArticles = document.querySelectorAll('.posts article.active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }
  /* add class 'active' to the correct article */
  const articleSelector = clickedElement.getAttribute('href');
  const correctArticle = document.querySelector(articleSelector);
  correctArticle.classList.add('active');
};

const links = document.querySelectorAll('.titles a');

for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}



// GENERATE TITLE LINKS FUNCTION
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  // optArticleAuthorSelector = '.post .post-author',
  optAuthorsSelector = '.post-author',
  optTagsListSelector = '.tags.list',
  optCloudClassCount = '5',
  optCloudClassPrefix = 'tag-size-';
  // optAuthorsListSelector = '.authors.list';
const generateTitleLinks = function (customSelector = ''){
  console.log(customSelector);
  /* [DONE]remove contents of titleList */
  const titleList= document.querySelector(optTitleListSelector);

  titleList.innerHTML = '';
  /* [DONE]for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  console.log(articles);
  let html = '';

  for(let article of articles){

    /* [DONE]get the article id */
    const articleId = article.getAttribute('id');
    /* [DONE]find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    /* [NOT DONE YET]get the title from the title element */

    /* [DONE]create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);
    /* [DONE]insert link into titleList */
    titleList.insertAdjacentHTML('beforeend', linkHTML);
    console.log(html);
  }

  const links = document.querySelectorAll('.titles a');
  console.log(links);

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

};
generateTitleLinks();