import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { AppLayout } from '../../layout/AppLayout'
import { Title } from '@mantine/core'

export const ViewError = () => {
  const error = useRouteError()
  const isRouteError = isRouteErrorResponse(error)

  const errorStatus = isRouteError ? error.status : undefined

  let ErrorPage: React.ReactNode = <div>Unknown Error</div>

  switch (errorStatus) {
    case 404:
      ErrorPage = <Title>404 Not Found</Title>
      break
    case 500:
      ErrorPage = <Title>500 Internal Server Error</Title>
      break
    default:
      return
  }

  return <AppLayout render={() => ErrorPage} />
}
