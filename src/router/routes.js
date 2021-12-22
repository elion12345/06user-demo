import Home from '@/views/Home';
import News from '@/views/News';
import Login from '@/views/Login';
import Loading from '@/views/Loading';
import User from '@/views/User';

const routes = [
  { name: "Home", path: '/', component: Home },
  {
    name: "News", path: '/news', component: News, meta: {
      auth: true
    }
  },
  {
    name: "User", path: '/user', component: User, meta: {
      auth: true
    }
  },
  { name: "Login", path: '/login', component: Login },
  { name: "Loading", path: '/loading', component: Loading },
]

export default routes;