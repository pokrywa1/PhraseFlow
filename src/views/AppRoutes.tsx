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
const ViewRequestParameters = lazy(() => import('./sections/ViewRequestParameters'))
const ViewResponseStructure = lazy(() => import('./sections/ViewResponseStructure'))
const ViewBasicUsage = lazy(() => import('./sections/ViewBasicUsage'))
const ViewFaq = lazy(() => import('./sections/ViewFaq'))
const ViewContactUs = lazy(() => import('./sections/ViewContactUs'))

const routesFromElements = createRoutesFromElements(
  <Route element={<AppLayout />} errorElement={<ViewError />}>
    <Route path={routes['introduction']} element={<ViewHome />} />
    <Route path={routes['endpoint-overview']} element={<ViewEndpointOverview />} />
    <Route path={routes['request-parameters']} element={<ViewRequestParameters />} />
    <Route path={routes['response-structure']} element={<ViewResponseStructure />} />
    <Route path={routes['basic-usage']} element={<ViewBasicUsage />} />
    <Route path={routes['faq']} element={<ViewFaq />} />
    <Route path={routes['contact-us']} element={<ViewContactUs />} />
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
