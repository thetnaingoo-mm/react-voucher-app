import { Children } from "react";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import DashboardPage from "./pages/DashboardPage";
import ProductPage from "./pages/ProductPage";
import SalePage from "./pages/SalePage";
import VoucherPage from "./pages/VoucherPage";
import VoucherDetailPage from "./pages/VoucherDetailPage";
import { createBrowserRouter } from "react-router";
import React from "react";
import ProductCreatePage from "./pages/ProductCreatePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                element: <DashboardPage />,
            },
            {
                path: "/products",
                element: <ProductPage />
            },
            {
                path: "/products/create",
                element: <ProductCreatePage />
            },
            {
                path: "/sale",
                element: <SalePage />
            },
            {
                path: "/voucher",
                element: <VoucherPage />
            },
            {
                path: "/voucher-detail",
                element: <VoucherDetailPage />
            }
        ]
    }
])

export default router;