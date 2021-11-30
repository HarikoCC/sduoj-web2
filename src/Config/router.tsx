import {lazy} from "react";
import {AppstoreOutlined, FileOutlined, FolderOutlined, UsergroupAddOutlined, UserOutlined} from "@ant-design/icons"


interface IBaseRouter {
    id: number
    path: string
    exact?: boolean
    component: any
}

interface IRouter extends IBaseRouter {
    title_i18n: string
    exact?: boolean
    icon?: any
    children?: IRouter[]
}

export const routerLayout: IBaseRouter[] = [
    {
        id: 0,
        path: "/manage",
        exact: false,
        component: lazy(() => import('../Component/layout/MLayout'))
    },
    {
        id: 2,
        path: "/exam",
        exact: false,
        component: lazy(() => import('../Component/layout/ELayout'))
    },
    {
        id: 3,
        path: "/thirdPartyLogin",
        exact: false,
        component: lazy(() => import('../Pages/thirdPartyLogin'))
    },
    {
        id: 1,
        path: "/",
        exact: true,
        component: lazy(() => import('../Component/layout/MLayout'))
    },
]

export const routerE: IBaseRouter[] = [
    {
        id: 1,
        path: "/exam/wait/:eid",
        exact: true,
        component: lazy(() => import('../Pages/EWait'))
    },
    {
        id: 2,
        path: "/exam/running/:eid",
        exact: true,
        component: lazy(() => import('../Pages/EWait'))
    },
    {
        id: 3,
        path: "/exam/list",
        exact: true,
        component: lazy(() => import('../Pages/EWait'))
    },
    {
        id: 4,
        path: "/exam/finish",
        exact: true,
        component: lazy(() => import('../Pages/EWait'))
    }
]


export const routerM: IRouter[] = [
    {
        id: 0,
        path: "/manage/user",
        title_i18n: "user",
        exact: false,
        icon: <UserOutlined/>,
        component: lazy(() => import('../Pages/MUser'))
    },
    {
        id: 1,
        path: "/manage/problem",
        title_i18n: "problem",
        exact: false,
        icon: <FolderOutlined/>,
        component: lazy(() => import('../Pages/MProblem'))
    },
    {
        id: 2,
        path: "/manage/contest",
        title_i18n: "contest",
        exact: false,
        icon: <AppstoreOutlined/>,
        component: lazy(() => import('../Pages/MContest'))
    },
    {
        id: 3,
        path: "/manage/template",
        title_i18n: "template",
        exact: false,
        icon: <FileOutlined/>,
        component: lazy(() => import('../Pages/MJudgeTemplate'))
    },
    {
        id: 4,
        path: "/manage/group",
        title_i18n: "group",
        exact: false,
        icon: <UsergroupAddOutlined/>,
        component: lazy(() => import('../Pages/MGroup'))
    }
]
