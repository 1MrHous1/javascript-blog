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
function generateTitleLinks(customSelector = '') {
  console.log(customSelector);
  /* [DONE]remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);

  titleList.innerHTML = '';
  /* [DONE]for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  console.log(articles);
  let html = '';

  for (let article of articles) {

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

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }

};
generateTitleLinks();


//          generateTags


function generateTags() {

  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);
  /* START LOOP: for every article: */
  for (article of articles) {

    /* find tags wrapper */
    const titleList = article.querySelector('optArticleTagsSelector');
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('href');
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      /* generate HTML of the link */
      const tagHTML = '<li<a href="#tag-' + tag + '">' + tag + '</a></li>';
      console.log(tagHTML);
      /* add generated code to html variable */
      titleList.innerHTML = titleList.innerHTML + tagHTML;
      /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    titleList.insertAdjacentHTML('beforeend', linkHTML);
    /* END LOOP: for every article: */
  }
}

generateTags();


//                tagClickHandler

function tagClickHandler(event) {
  /* prevent default action for this event */
  event.preventDefault();
  console.log(event);
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */

  /* make a new constant "tag" and extract tag from the "href" constant */

  /* find all tag links with class active */

  /* START LOOP: for each active tag link */

  /* remove class active */

  /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */

  /* START LOOP: for each found tag link */

  /* add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
}

function addClickListenersToTags() {
  /* find all links to tags */

  /* START LOOP: for each link */

  /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();