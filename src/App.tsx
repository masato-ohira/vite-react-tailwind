import { MyBox } from '@/components/ui/MyBox'
import { MyContainer } from '@/components/ui/MyContainer'
import { MyCenter } from './components/ui/MyCenter'
import { MyIcon } from './components/icons/MyIcon'

const App = () => {
  return (
    <div className={'bg-gray-100 leading-7'}>
      <MyCenter className={'min-h-screen'}>
        <MyBox
          className={
            'lg:w-1/2 w-auto p-6 py-10 lg:p-10 text-center space-y-4 mx-4 lg:mx-0'
          }
        >
          <MyCenter className={'text-blue-900 text-7xl lg:text-9xl'}>
            <MyIcon name={'react'} />
          </MyCenter>
          <h1 className={'text-xl lg:text-2xl font-bold text-blue-900'}>
            サイトメンテナンスのお知らせ
          </h1>
          <p>
            現在、ホームページのメンテナンス中です。
            <br />
            ご迷惑をお掛けしますが、ご理解のほど何卒よろしくお願い申し上げます。
          </p>
        </MyBox>
      </MyCenter>
    </div>
  )
}

export default App
