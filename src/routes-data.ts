// import HomeIcon from '@mui/icons-material/Home';

export interface RoutesData {
    path: string;
    // icon: React.ReactNode;
    name: string;
    id: number;
}

 

export const routesData: RoutesData[] = [
    {
        id: 1,
        path: '/',
        name: 'Home',
    },
    {
        id: 2,
        path: '/cadastro',
        name: 'Cadastro',
    },
    {
        id: 3,
        path: '/lista',
        name: 'Lista',
    }
];