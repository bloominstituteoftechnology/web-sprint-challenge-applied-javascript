import 'regenerator-runtime'
import '@testing-library/jest-dom/extend-expect'
import fetch from 'node-fetch'
import axios from 'axios'

globalThis.fetch = fetch
globalThis.axios = axios

import { server } from './src/mocks/server'
import { screen, queries } from '@testing-library/dom'
import { articles, topics } from './src/mocks/data'
import { Card, cardAppender } from './src/components/card'
import { Header, headerAppender } from './src/components/header'
import { Tabs, tabsAppender } from './src/components/tabs'

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => {
  server.resetHandlers()
  document.body.innerHTML = ''
})

test('sanity', () => {
  expect(true).not.toBe(false)
})

describe('TASK 1 - Header', () => {
  let header
  beforeEach(() => {
    header = Header('foo', 'bar', 'baz')
  })
  it('returns a header with the correct heading (element, attrs and text)', () => {
    expect(header.querySelector('div.header>h1').textContent).toMatch(/foo/i)
  })
  it('returns a header with the correct date (element, attrs and text)', () => {
    expect(header.querySelector('div.header>span.date').textContent).toMatch(/bar/i)
  })
  it('returns a header with the correct temp (element, attrs and text)', () => {
    expect(header.querySelector('div.header>span.temp').textContent).toMatch(/baz/i)
  })
})

describe('TASK 2 - headerAppender', () => {
  beforeEach(() => {
    headerAppender('body')
  })
  it('appends the header to the DOM', () => {
    expect(document.querySelector('.header>h1')).toBeTruthy()
    expect(document.querySelector('.header>.date')).toBeTruthy()
    expect(document.querySelector('.header>.temp')).toBeTruthy()
  })
})

describe('TASK 3 - Tabs', () => {
  let tabs
  beforeEach(() => {
    tabs = Tabs(['foo', 'bar', 'baz'])
  })
  it('returns topic tabs with the correct text', () => {
    expect(queries.getByText(tabs, 'foo'))
    expect(queries.getByText(tabs, 'bar'))
    expect(queries.getByText(tabs, 'baz'))
  })
})

describe('TASK 4 - tabsAppender', () => {
  beforeEach(() => {
    tabsAppender('body')
  })
  it('fetches topics and appends the correct tabs to the DOM', async () => {
    for (let i = 0; i < topics.topics.length; i++) {
      expect(await screen.findByText(topics.topics[i])).toBeInTheDocument()
    }
  })
})

describe('TASK 5 - Card', () => {
  let card
  beforeEach(() => {
    card = Card({ headline: 'foo', authorName: 'bar', authorPhoto: 'baz' })
  })
  it('returns a card with the correct headline (element, attrs and text)', () => {
    expect(card.querySelector('div.card>div.headline').textContent).toMatch(/foo/i)
  })
  it('returns a card with the correct author (element, attrs and text)', () => {
    expect(card.querySelector('div.card>div.author>span').textContent).toMatch(/bar/i)
  })
  it('returns a card with the correct image (element and src)', () => {
    expect(card.querySelector('div.card>div.author>div.img-container>img').src).toMatch(/baz/)
  })
})

describe('TASK 6 - cardAppender', () => {
  beforeEach(() => {
    cardAppender('body')
  })
  it('fetches articles and appends all article cards to the DOM', async () => {
    const headlines = Object.values(articles.articles).flat().map(art => art.headline)
    for (let i = 0; i < headlines.length; i++) {
      expect(await screen.findByText(headlines[i])).toBeInTheDocument()
    }
  })
})
