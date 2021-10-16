// import StartLoginPage from 'components/pages/StartLoginPage/StartLoginPage';
// import SignInPage from 'components/pages/SignInPage/SignInPage';
// import SignUpPage from 'components/pages/SignUpPage/SignUpPage';
import Private from 'shared/components/Private'

export default [
  {
    path: '/login',
    component: Private,
    isRestricted: false,
    exact: true,
  },
  {
    path: '/sign-in',
    component: Private,
    isRestricted: false,
    exact: true,
  },
  {
    path: '/sign-up',
    component: Private,
    isRestricted: false,
    exact: true,
  },
]
