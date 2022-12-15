export interface ISettings {
  id: number;
  logo?: any;
  header_menu: HeaderMenu[];
  action_buttons: ActionButtons[];
}

export interface HeaderMenu {
  name: string;
  url: string;
  show_on_page: boolean;
  submenu?: HeaderMenu[];
}

export interface ActionButtons {
  call: Call[];
  write: Write[];
}

export interface Call {
  name: string;
  link: string;
}

export interface Write {
  name: string;
  links: Link[];
}

export interface Link {
  email: string;
  watsapp: string;
  telegram: string;
}
