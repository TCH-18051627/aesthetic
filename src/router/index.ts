import NotFind from '@/components/NotFind';
import CommunityPage from '@/views/CommunityPage';
import UserCenterPage from '@/views/UserCenterPage';
import ClassifyPage from '@/views/ClassifyPage';
import EnhancePage from '@/views/EnhancePage';
import EvaluatePage from '@/views/EvaluatePage';
import GenerationPage from '@/views/GenerationPage';
import DatasetMangePage from '@/views/DatasetMange';
export const HomeRoutes = [
  { path: '/', element: UserCenterPage },
  { path: 'community', element: CommunityPage },
  { path: 'user', element: UserCenterPage },
  { path: 'evaluate', element: EvaluatePage },
  { path: 'generation', element: GenerationPage },
  { path: 'enhance', element: EnhancePage },
  { path: 'classify', element: ClassifyPage },
  { path: 'dataset', element: DatasetMangePage },
  // 重定向
  // { path: 'home', element: <Navigate to='/'></Navigate> },
  // 404找不到
  { path: '*', element: NotFind }
];
