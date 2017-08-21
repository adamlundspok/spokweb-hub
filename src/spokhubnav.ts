import { CurrentUser } from './current.user';
import { Header } from './header';
import { MenuItem, MenuItemFactory } from './menuitem.model';
import axios from 'axios';

export class SpokHubNavBar {
    
        current_user: CurrentUser;
        menu_factory: MenuItemFactory;
        navigation_selector: string;
    
        constructor(rootSelector: string) {
    
            // Ordinarily first thing is to get the current user -- stub it in for now
            this.current_user = new CurrentUser('Adam', 'Lund', 400);
    
            this.menu_factory = new MenuItemFactory();
            this.navigation_selector = rootSelector;
            this.initFeatureMenu();
        }
    
        initFeatureMenu():void {
            let leftnavitems = document.createElement('div');
            let navlist = document.createElement('ul');
    
            leftnavitems.className = "menu-left";
            
            /** This would call a service over http to GET the features object  */
            axios.get('/config-nav.json').then((res) => {
                Object.keys(res.data).forEach((item) => {
                    let menu = this.menu_factory.makeNavItem(res.data[item]);
                    navlist.appendChild(menu);
                });
                leftnavitems.appendChild(navlist);
                document.getElementById(this.navigation_selector).appendChild(leftnavitems);

                this.initUserMenu();
            });
        }
    
        initUserMenu():void {
            const user_profile_menu = {
                user : {
                    label : this.current_user.first + ' ' + this.current_user.last,
                    level : 400,
                    features : {
                        logout : {
                            label : "Sign Out",
                            url : "/identity/account/logout",
                            level : 400
                        },
                        my_profile : {
                            label : "My Profile",
                            url : "/organization/profile",
                            level : 400
                        },
                        change_password : {
                            label : "Change My Password",
                            url : "/organization/profile/changepassword",
                            level : 400
                        }
                    }
                }
            };
    
            let usernavitems = document.createElement('div');
            let usernav = document.createElement('ul');
            usernavitems.className = "menu-user";
    
            Object.keys(user_profile_menu).forEach((item) => {
                console.log(item);
                usernav.appendChild(this.menu_factory.makeNavItem(user_profile_menu[item]));
            });
            usernavitems.appendChild(usernav);
            document.getElementById(this.navigation_selector).appendChild(usernavitems);
        }
    }