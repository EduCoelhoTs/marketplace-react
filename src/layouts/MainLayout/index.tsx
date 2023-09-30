import { Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
        <main>
            <div>
                MainLayout
            </div>
            <Outlet />
        </main>
    )
}