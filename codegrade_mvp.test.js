import '@testing-library/jest-dom/extend-expect'
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

test('[0] sanity', () => {
  expect(true).not.toBe(false)
})

describe('TASK 1 - Header, Review how to create a new element, manipulate it (such as adding a class and text to it), and add it to the DOM. ', () => {
  let header
  beforeEach(() => {
    header = Header('foo', 'bar', 'baz')
  })
  test('[1] returns a header with the correct heading (element, attrs and text)!', () => {
    expect(header.querySelector('div.header>h1').textContent).toMatch(/foo/i)
  })
  test('[2] returns a header with the correct date (element, attrs and text)', () => {
    expect(header.querySelector('div.header>span.date').textContent).toMatch(/bar/i)
  })
  test('[3] returns a header with the correct temp (element, attrs and text)', () => {
    expect(header.querySelector('div.header>span.temp').textContent).toMatch(/baz/i)
  })
})

describe('TASK 2 - headerAppender, Review DOM selectors and appending to it.', () => {
  beforeEach(() => {
    headerAppender('body')
  })
  test('[4] appends the header to the DOM', () => {
    expect(document.querySelector('.header>h1')).toBeTruthy()
    expect(document.querySelector('.header>.date')).toBeTruthy()
    expect(document.querySelector('.header>.temp')).toBeTruthy()
  })
})

describe('TASK 3 - Tabs, Review how to iterate (loop) over a list of data creating a new component for each item, manipulate it (such as adding a class and text to it), and attaching that component to the DOM.', () => {
  let tabs
  beforeEach(() => {
    tabs = Tabs(['foo', 'bar', 'baz'])
  })
  test('[5] returns topic tabs with the correct text', () => {
    expect(queries.getByText(tabs, 'foo'))
    expect(queries.getByText(tabs, 'bar'))
    expect(queries.getByText(tabs, 'baz'))
  })
})

describe('TASK 4 - tabsAppender,  Review making HTTP requests and getting data from a server using axios as well as how to use promises and iterate over a list of data received from a server, creating a set of components and adding them to the DOM.', () => {
  beforeEach(() => {
    tabsAppender('body')
  })
  test('[6] fetches topics and appends the correct tabs to the DOM', async () => {
    for (let i = 0; i < topics.topics.length; i++) {
      expect(await screen.findByText(topics.topics[i])).toBeInTheDocument()
    }
  })
})

describe('TASK 5 - Card, Review how to iterate (loop) over a list of data creating a new component for each item, manipulate it (such as adding a class and text to it), and attaching that component to the DOM.', () => {
  let card
  beforeEach(() => {
    card = Card({ headline: 'foo', authorName: 'bar', authorPhoto: 'baz' })
  })
  test('[7] returns a card with the correct headline (element, attrs and text)', () => {
    expect(card.querySelector('div.card>div.headline').textContent).toMatch(/foo/i)
  })
  test('[8] returns a card with the correct author (element, attrs and text)', () => {
    expect(card.querySelector('div.card>div.author>span').textContent).toMatch(/bar/i)
  })
  test('[9] returns a card with the correct image (element and src)', () => {
    expect(card.querySelector('div.card>div.author>div.img-container>img').src).toMatch(/baz/)
  })
})

describe('TASK 6 - cardAppender,  Review making HTTP requests and getting data from a server using axios as well as how to use promises and iterate over a list of data received from a server, creating a set of components and adding them to the DOM.', () => {
  beforeEach(() => {
    cardAppender('body')
  })
  test('[10] fetches articles and appends all article cards to the DOM', async () => {
    const headlines = Object.values(articles.articles).flat().map(art => art.headline)
    for (let i = 0; i < headlines.length; i++) {
      expect(await screen.findByText(headlines[i])).toBeInTheDocument()
    }
  })
})
