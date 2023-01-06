export type PageType = 'website' | 'article';

export interface IPageData {
  id: number;
  banner_title: string;
  banner_image: string;
  page_title: string;
  page_description: string;
  page_image: string;
  page_type: PageType;
  page_url: string;
}
