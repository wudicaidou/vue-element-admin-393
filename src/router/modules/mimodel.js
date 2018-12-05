/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const miModelRouter = {
  path: '/mimodel',
  component: Layout,
  redirect: '/mimodel/create',
  name: 'MiModel',
  meta: {
    title: 'MiModel',
    icon: 'component'
  },
  children: [
    {
      path: 'decisionTree',
      component: () => import('@/views/mi/model/decisionTree'),
      name: 'decisionTree',
      meta: { title: 'decisionTree' }
    },
    {
      path: 'generalizedLinear',
      component: () => import('@/views/mi/model/generalizedLinear'),
      name: 'GeneralizedLinear',
      meta: { title: 'generalizedLinear' }
    }
  ]
}
export default miModelRouter
