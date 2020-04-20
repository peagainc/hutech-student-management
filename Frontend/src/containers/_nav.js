export default [
  {
    _name: "CSidebarNav",
    _children: [
      {
        _name: "CSidebarNavItem",
        name: "Dashboard",
        to: "/dashboard",
        icon: "cil-speedometer",
      },
      {
        _name: "CSidebarNavItem",
        name: "Monitoring",
        to: "/monitoring",
        icon: "cil-cast",
      },
      {
        _name: "CSidebarNavItem",
        name: "Recognize",
        to: "/recognize",
        icon: "cil-center-focus",
      },
      {
        _name: "CSidebarNavItem",
        name: "Student Checkin",
        to: "/checkin",
        icon: "cil-barcode",
      },
      {
        _name: "CSidebarNavTitle",
        _children: ["MANAGER"],
      },
      {
        _name: "CSidebarNavItem",
        name: "Departments",
        to: "/departments",
        icon: "cil-layers",
      },
      {
        _name: "CSidebarNavItem",
        name: "Employees",
        to: "/employees",
        icon: "cil-people",
      },
      {
        _name: "CSidebarNavItem",
        name: "Students",
        to: "/students",
        icon: "cil-school",
      },
      {
        _name: "CSidebarNavTitle",
        _children: ["CONFIG"],
      },
      {
        _name: "CSidebarNavItem",
        name: "Exam Schedule",
        to: "/examschedule",
        icon: "cil-calendar",
      },
      {
        _name: "CSidebarNavTitle",
        _children: ["REPORT"],
      },
      {
        _name: "CSidebarNavItem",
        name: "Attendances",
        to: "/attendances",
        icon: "cil-clock",
      },
      {
        _name: "CSidebarNavTitle",
        _children: ["Theme"],
      },
      {
        _name: "CSidebarNavItem",
        name: "Colors",
        to: "/theme/colors",
        icon: "cil-drop",
      },
      {
        _name: "CSidebarNavItem",
        name: "Typography",
        to: "/theme/typography",
        icon: "cil-pencil",
      },
      {
        _name: "CSidebarNavTitle",
        _children: ["Components"],
      },
      {
        _name: "CSidebarNavDropdown",
        name: "Base",
        route: "/base",
        icon: "cil-puzzle",
        items: [
          {
            name: "Breadcrumbs",
            to: "/base/breadcrumbs",
          },
          {
            name: "Cards",
            to: "/base/cards",
          },
          {
            name: "Carousels",
            to: "/base/carousels",
          },
          {
            name: "Collapses",
            to: "/base/collapses",
          },
          {
            name: "Forms",
            to: "/base/forms",
          },
          {
            name: "Jumbotrons",
            to: "/base/jumbotrons",
          },
          {
            name: "List Groups",
            to: "/base/list-groups",
          },
          {
            name: "Navs",
            to: "/base/navs",
          },
          {
            name: "Navbars",
            to: "/base/navbars",
          },
          {
            name: "Paginations",
            to: "/base/paginations",
          },
          {
            name: "Popovers",
            to: "/base/popovers",
          },
          {
            name: "Progress Bars",
            to: "/base/progress-bars",
          },
          {
            name: "Switches",
            to: "/base/switches",
          },
          {
            name: "Tables",
            to: "/base/tables",
          },
          {
            name: "Tabs",
            to: "/base/tabs",
          },
          {
            name: "Tooltips",
            to: "/base/tooltips",
          },
        ],
      },
      {
        _name: "CSidebarNavDropdown",
        name: "Buttons",
        route: "/buttons",
        icon: "cil-cursor",
        items: [
          {
            name: "Buttons",
            to: "/buttons/standard-buttons",
          },
          {
            name: "Button Dropdowns",
            to: "/buttons/dropdowns",
          },
          {
            name: "Button Groups",
            to: "/buttons/button-groups",
          },
          {
            name: "Brand Buttons",
            to: "/buttons/brand-buttons",
          },
        ],
      },
      {
        _name: "CSidebarNavItem",
        name: "Charts",
        to: "/charts",
        icon: "cil-chart-pie",
      },
      {
        _name: "CSidebarNavDropdown",
        name: "Icons",
        route: "/icons",
        icon: "cil-star",
        items: [
          {
            name: "CoreUI Icons",
            to: "/icons/coreui-icons",
          },
          {
            name: "Brands",
            to: "/icons/brands",
          },
          {
            name: "Flags",
            to: "/icons/flags",
          },
        ],
      },
      {
        _name: "CSidebarNavDropdown",
        name: "Notifications",
        route: "/notifications",
        icon: "cil-bell",
        items: [
          {
            name: "Alerts",
            to: "/notifications/alerts",
          },
          {
            name: "Badges",
            to: "/notifications/badges",
          },
          {
            name: "Modals",
            to: "/notifications/modals",
          },
        ],
      },
      {
        _name: "CSidebarNavItem",
        name: "Widgets",
        to: "/widgets",
        icon: "cil-calculator",
      },
      {
        _name: "CSidebarNavTitle",
        _children: ["Extras"],
      },
      {
        _name: "CSidebarNavDropdown",
        name: "Pages",
        route: "/pages",
        icon: "cil-star",
        items: [
          {
            name: "Login",
            to: "/pages/login",
          },
          {
            name: "Register",
            to: "/pages/register",
          },
          {
            name: "Error 404",
            to: "/pages/404",
          },
          {
            name: "Error 500",
            to: "/pages/500",
          },
        ],
      },
    ],
  },
];
