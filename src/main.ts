import { CurrentUser } from './current.user';
import { Header } from './header';
import { MenuItem, MenuItemFactory } from './menuitem.model';
import axios from 'axios';
import { SpokHubNavBar } from './spokhubnav';

/** Bootstraping SpokHub ::: Order of operations */
// 1. if authorization callback is occurring, check token and initialize session
// 2. check authorization, if not authorized redirect and provide user's requested route in the redirect
// 3. load basic service endpoints -- this is needed to get the Org endpoints for user
// 4. load menu
//  4.1 load user info, make menu
//  4.2 load feature data, present options available to user, make menu

let spokNav = new SpokHubNavBar('navigation');