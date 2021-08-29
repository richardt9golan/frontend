import React from 'react';

const ListPosts = React.lazy(() => import('./views/post/ListPosts'));
const AddPosts = React.lazy(() => import('./views/post/AddPosts'));
const EditPosts = React.lazy(() => import('./views/post/EditPosts'));
const PreviewPosts = React.lazy(() => import('./views/post/PreviewPosts'));

const routes = [
  { path: '/', exact: true, name: 'Post' },
  { path: '/post', name: 'All Posts', component: ListPosts },
  { path: '/add', name: 'Add Posts', component: AddPosts },
  { path: '/edit', name: 'Edit Posts', component: EditPosts },
  { path: '/preview', name: 'Preview Posts', component: PreviewPosts }

];

export default routes;
