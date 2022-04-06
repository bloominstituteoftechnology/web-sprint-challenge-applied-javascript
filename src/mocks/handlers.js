import { rest } from 'msw'
import { topics, articles } from './data'

function getTopics(req, res, ctx) {
  return res(
    ctx.status(200),
    ctx.json(topics),
  )
}

function getArticles(req, res, ctx) {
  return res(
    ctx.status(200),
    ctx.json(articles),
  )
}

export const handlers = [
  rest.get('http://localhost:5001/api/articles', getArticles),
  rest.get('http://localhost:5001/api/topics', getTopics),
]
