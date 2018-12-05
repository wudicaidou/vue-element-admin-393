/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const miDataRouter = {
  path: '/midata',
  component: Layout,
  redirect: '/midata/file-upload-table',
  name: 'MiData',
  meta: {
    title: 'MiData',
    icon: 'documentation'
  },
  children: [
    {
      path: 'file-upload-table',
      component: () => import('@/views/mi/data/fileUploadTable'),
      name: 'FileUpload',
      meta: { title: 'fileUpload' }
    }
  ]
}
export default miDataRouter
