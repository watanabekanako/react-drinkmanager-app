import Consumption from '../component/pages/Consumption';
import Addition from '../component/pages/Addition';
import History from '../component/pages/History';
import AddItem from '../component/pages/AddItem';
import ItemEdit from '../component/pages/ItemEdit';
import AddPoll from '../component/pages/AddPoll';

export const AdminRouter = [
  { path: '/consumption', element: <Consumption /> },
  { path: '/addition', element: <Addition /> },
  { path: '/history', element: <History /> },
  { path: '/additem', element: <AddItem /> },
  { path: '/addpoll', element: <AddPoll /> },
  { path: '/itemedit/:id', element: <ItemEdit /> },
];
