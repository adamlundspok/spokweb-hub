import { CurrentUser } from './current.user';
import { Header } from './header';
import { MenuItem, MenuItemFactory } from './menuitem.model';
import axios from 'axios';

let current_user = new CurrentUser('Adam', 'Lund', 400);
let menu_factory = new MenuItemFactory();

/** Order of operations */
// 1. if authorization callback is occurring, check token and initialize session
// 2. check authorization, if not authorized redirect and provide user's requested route in the redirect
// 3. load basic service endpoints -- this is needed to get the Org endpoints for user
// 4. load user info
// 5. load feature data, present options availabloe to user


let navlist = document.createElement('ul');

/** This would call a service over http to GET the features object  */
axios.get('/features.json').then((res) => {
    Object.keys(res.data).forEach((item) => {
        navlist.appendChild(menu_factory.makeNavItem(res.data[item]));
    });
    document.getElementById('navigation').appendChild(navlist);
});
