import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import { routesData } from '../../routes-data';

export default function MainLayout() {
    return (
        <main>
            <Navbar routeData={routesData}>
                <Outlet />
            </Navbar>
        </main>
    )
}