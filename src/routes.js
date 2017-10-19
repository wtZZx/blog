import Archive from './Archive/Archive'
import Summary from './Summary/Summary'
import Post from './Post/Post'
import Tags from './Tags/Tags'
import About from './About/About'
import Login from './Login/Login'
import NewPost from './NewPost/NewPost'

export default [
    {
        path: '/archive',
        component: Archive
    },
    {
        path: '/index',
        component: Summary
    },
    {
        path: '/post/:id',
        component: Post
    },
    {
        path: '/tags',
        component: Tags
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/post',
        component: NewPost
    }
]