import Contact from '../component/pages/Contact';
import Faq from '../component/pages/Faq';
import Guide from '../component/pages/Guide';
import ItemDetail from '../component/pages/ItemDetail';
import ItemSearch from '../component/pages/ItemSearch';
import Poll from '../component/pages/Poll';
import PollResult from '../component/pages/PollResult';
import Timeline from '../component/pages/Timeline';

export const UserRouter = [
  { path: '/timeline', element: <Timeline /> },
  { path: '/search', element: <ItemSearch /> },
  { path: '/search/:itemId', element: <ItemDetail /> },
  { path: '/contact', element: <Contact /> },
  { path: '/guide', element: <Guide /> },
  { path: '/faq', element: <Faq /> },
  { path: '/poll', element: <Poll /> },
  { path: '/poll/:id', element: <PollResult /> },
];
