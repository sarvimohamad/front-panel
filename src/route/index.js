import {createRouter, createWebHistory} from 'vue-router'
import UserList from "@/Pages/Users/UserList";
import UserCreateForm from "@/Pages/Users/UserCreateForm";
import UserEditForm from "@/Pages/Users/UserEditForm";

const routes = [
    {path: '/users', name: 'users', component: UserList},
    {path: '/users-create', component: UserCreateForm},
    {path: '/users/:id', name: 'show-user', component: UserEditForm},
]

export default createRouter({
    history: createWebHistory(),
    routes
})