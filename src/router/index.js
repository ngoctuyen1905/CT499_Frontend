import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/",
        name: "contactbook",
        component: () => import("@/views/ContactBook.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    { 
        path: "/contacts/:id", 
        name: "contact.edit", 
        component: () => import("@/views/ContactEdit.vue"), 
        props: true 
    },
    {
        path: "/",
        name: "contact.add",
        component: () => import("@/views/ContactAdd.vue"),
        
    },
    {
        path: "/",
        name: "Admin",
        component: () => import("@/views/Admin.vue"),
      
    },
    { 
        path: "/admins/:id", 
        name: "admin.edit", 
        component: () => import("@/views/AdminEdit.vue"), 
        props: true 
    },
     {
        path: "/",
        name: "Login",
        component: () => import("@/components/Login.vue"),
        
    },
    {
        path: "/",
        name: "main",
        component: () => import("@/components/MainHeader.vue"),
       
    },
    {
        path: "/",
        name: "contact",
        component: () => import("@/views/Contact.vue"),
        
    },
    {
        path: "/",
        name: "about",
        component: () => import("@/views/About.vue"),
       
    },
    
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;

