import {
  DashboardOutlined,
  ProjectOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";

export const resources: IResourceItem[] = [
  {
    name: "dashboard",
    list: "/",
    meta: {
      label: "Dashboard",
      icon: <DashboardOutlined />,
    },
  },
  {
    name: "companies",
    list: "/companies",
    meta: {
      label: "Companies",
      icon: <ShopOutlined />,
    },
    show: "/companies/:id",
    create: "/companies/new",
    edit: "/companies/edit/:id",
  },
  {
    name: "tasks",
    list: "/tasks",
    meta: {
      label: "Tasks",
      icon: <ProjectOutlined />,
    },
    create: "/tasks/new",
    edit: "/tasks/edit/:id",
  },
];
