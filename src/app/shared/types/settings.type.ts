export interface ISettings {
  id: number;
  logo?: any;
  header_menu: HeaderMenu[];
}

export interface HeaderMenu {
  name: string;
  url: string;
  show_on_page: boolean;
  submenu?: HeaderMenu[];
}
