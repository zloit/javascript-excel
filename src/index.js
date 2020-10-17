import { Excel } from '@/components/excel/Excel'
import { Header } from '@/components/header/Header'
import { Toolbar } from '@/components/toolbar/Toolbar'
import { Formula } from '@/components/formula/formula'
import { Table } from '@/components/table/Table'

import './scss/index.scss'

const excel = new Excel('#app', {
  component: [
    Header,
    Toolbar,
    Formula,
    Table,
  ],
})

console.log('Excel', excel)
