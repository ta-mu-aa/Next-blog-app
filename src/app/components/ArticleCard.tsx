import { Article } from '@/types';
import React from 'react'

type ArticleCardProps = {
  article: Article;
}

export default function ArticleCard( {article}: ArticleCardProps ) {
  return (
    <article className="flex flex-col shadow my-4" key={article.id}>
          <a href={`articles/${article.id}`} className="hover:opacity-75">
            <img src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`} />
          </a>
          <div className="bg-white flex flex-col justify-start p-6">
            <a
             href={`articles/${article.id}`}
              className="text-blue-700 text-sm font-bold uppercase pb-4"
            >
              {article.title}
            </a>
            <a href={`articles/${article.id}`} className="text-3xl font-bold hover:text-gray-700 pb-4">
              Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
            </a>
            <p className="text-sm pb-3 text-black">
              By{" "}
              <a href="#" className="font-semibold hover:text-gray-800">
                David Grzyb
              </a>
              , Published on {article.created_at}
            </p>
            <a href="#" className="pb-6 text-black">  
              {article.content.length > 70 ? article.content.substring(0,70) + "..." : article.content}   
            </a>
            <a href={`articles/${article.id}`} className="uppercase text-gray-800 hover:text-black">
              Continue Reading <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </article>
  )
}
