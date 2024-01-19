import { AppLayout } from '@hilla/react-components/AppLayout.js';
import { DrawerToggle } from '@hilla/react-components/DrawerToggle.js';
import Placeholder from 'Frontend/components/placeholder/Placeholder.js';
import { useRouteMetadata } from 'Frontend/util/routing.js';
import { Suspense, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const navLinkClasses = ({ isActive }: any) => {
    return `block rounded-m p-s ${isActive ? 'bg-primary-10 text-primary' : 'text-body'}`;
};

export default function MainLayout() {
    const currentTitle = useRouteMetadata()?.title ?? 'Hybrid example';

    useEffect(() => {document.title = currentTitle;}, [currentTitle]);

    return (
        <AppLayout primarySection="drawer">
            <div slot="drawer" className="flex flex-col justify-between h-full p-m">
                <header className="flex flex-col gap-m">
                    <h1 className="text-l m-0">Hybrid example</h1>
                    <nav>
                        <NavLink className={navLinkClasses} to="/">
                            Hilla
                        </NavLink>
                        <NavLink className={navLinkClasses} to="/x">
                            X
                        </NavLink>
                        <NavLink to={'/flow'} className={navLinkClasses}>
                            Flow
                        </NavLink>
                        <NavLink className={navLinkClasses} to="/about">
                            About
                        </NavLink>
                    </nav>
                </header>
            </div>

            <DrawerToggle slot="navbar" aria-label="Menu toggle"></DrawerToggle>

            <Suspense fallback={<Placeholder />}>
                <Outlet />
            </Suspense>
        </AppLayout>
    );
}
