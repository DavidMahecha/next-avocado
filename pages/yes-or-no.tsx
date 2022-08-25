import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Header, Button } from 'semantic-ui-react'
import Layout from '@components/Layout/Layout'

import type { GetServerSideProps } from 'next'

type YesOrNoApiResponse = {
  data: 'yes' | 'no'
}

type Props = { initialResult: string }

const fetchResult = async () => {
  console.log('Iniciando 2', `${process.env.NEXT_PUBLIC_URL_API}/api/yes-or-no`)
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/yes-or-no`)
  const { data }: YesOrNoApiResponse = await res.json()
  console.log('Iniciando 3', data)

  return data
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  console.log('Iniciando')
  const initialResult = await fetchResult()
  console.log('Terminando', initialResult)

  return {
    props: {
      initialResult,
    },
  }
}

const YesOrNo = ({ initialResult }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState(initialResult)
  const [triggerCount, setTriggerCount] = useState(0)

  useEffect(() => {
    setIsLoading(true)
    fetchResult().then((initialResult) => {
      setResult(initialResult)
      setIsLoading(false)
    })
  }, [triggerCount])

  const onClick = async () => {
    setTriggerCount(triggerCount + 1)
  }

  return (
    <Layout>
      <div>
        <Header as="h1" color={isLoading ? 'grey' : 'green'}>
          {result}
        </Header>

        <p>
          <Button
            color="green"
            onClick={onClick}
            loading={isLoading}
            disabled={isLoading}
          >
            Intentar de nuevo
          </Button>
        </p>
        <p>
          <Link href="/">
            <a className="ui black button basic">Volver al inicio</a>
          </Link>
        </p>
      </div>

      <style jsx>{`
        div {
          text-align: center;
        }
        div :global(h1.header) {
          font-size: 7rem;
          text-transform: uppercase;
        }
      `}</style>
    </Layout>
  )
}

export default YesOrNo
