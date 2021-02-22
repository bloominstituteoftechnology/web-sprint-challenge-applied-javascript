// DO NOT MAKE CHANGES TO THIS FILE
// DO NOT MAKE CHANGES TO THIS FILE
// DO NOT MAKE CHANGES TO THIS FILE
import 'regenerator-runtime'
import { worker } from './mocks/browser'

import { cardAppender } from './components/card'
import { tabsAppender } from './components/tabs'
import { headerAppender, Header } from './components/header'

Header()

worker.start()

headerAppender('.header-container')
tabsAppender('.tabs-container')
cardAppender('.cards-container')


