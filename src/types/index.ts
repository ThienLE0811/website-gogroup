interface DataRespone {
  id: number;
  slug: string;
  status: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  jetpack_featured_media_url: string;
  excerpt: {
    rendered: string;
    protected: boolean;
  };
}
