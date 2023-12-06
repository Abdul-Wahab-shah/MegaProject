import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import  Store  from './Store/Store.jsx'
import SignUp from './Components/SignUp.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import { AuthLayout,Login  } from './Components/index.jsx'
import Home from './pages/Home.jsx'
import AddPost from './pages/AddPost.jsx'
import AllPosts from './pages/AllPosts.jsx'
import Post from './pages/Post.jsx'
import EditPost from './pages/EditPost.jsx'


const router=createBrowserRouter([{
path:'/',
element:<App/>,
childern:[
  {
    path:'/',
    element:<Home/>,  
  },{
    paht:'/login',
    element:(
      <AuthLayout authentication={false}>
<Login/>
      </AuthLayout>
    )
  }
  ,{
    paht:'/signup',
    element:(
      <AuthLayout authentication={false}>
<SignUp/>
      </AuthLayout>
    )
  },{
    paht:'/all-posts',
    element:(
      <AuthLayout authentication>
      {''}
<AllPosts/>
      </AuthLayout>
    )
  }
  ,{
    paht:'/add-post',
    element:(
      <AuthLayout authentication>
      {''}
<AddPost/>
      </AuthLayout>
    )
  },{
    paht:'/edit-post/:slug',
    element:(
      <AuthLayout authentication>
      {''}
<EditPost/>
      </AuthLayout>
    )
  },{
    paht:'/post/:slug',
    element:<Post/>
  },
],

},])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={Store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)

