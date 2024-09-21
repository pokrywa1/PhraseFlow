import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { routes } from '../routes/routes'
import { lazy } from 'react'
import { AppLayout } from '../layout/AppLayout'
import { ViewError } from './errors/ViewError'

const ViewHome = lazy(() => import('./home/ViewHome'))
const ViewEndpointOverview = lazy(() => import('./sections/ViewEndpointOverview'))

const routesFromElements = createRoutesFromElements(
  <Route element={<AppLayout />} errorElement={<ViewError />}>
    <Route path={routes['introduction']} element={<ViewHome />} />
    <Route path={routes['endpoint-overview']} element={<ViewEndpointOverview />} />
  </Route>,
)

const router = createBrowserRouter(routesFromElements)
export const AppRoutes = () => {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  )
}
