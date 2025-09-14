import { NavLink } from "react-router";

const NavItems = () => {

       /* ------------------Pages----------------- */
       const navItems = [
              { pageName: 'Home', path: '/' },
              { pageName: 'About', path: '/about' },
              { pageName: 'Services', path: '/services' },
              { pageName: 'Blog', path: '/blog' },
              { pageName: 'Projects', path: '/projects' },
              { pageName: 'Contact', path: '/contact' },
       ]

       return (
              <>
                     {navItems.map((item) => (
                            <NavLink key={item.path} to={item.path} className={({ isActive }) => `font-bold border-b lg:border-b-0 border-b-soft-black hover:text-light-red pb-2 lg:py-0 ${isActive ? 'text-pink-red' : 'text-gray md:text-gray lg:text-white'}`}>{item?.pageName}</NavLink>
                     ))}
              </>
       );
};

export default NavItems;